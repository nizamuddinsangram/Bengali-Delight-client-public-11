import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import useOrederFood from "../../../hook/useOrederFood";
import { AuthContext } from "../../../provider/AuthProvider";

const CheckOutForm = () => {
  const [test] = useOrederFood();
  const { user } = useContext(AuthContext);
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState();
  const axiosSecure = useAxiosSecure();

  // -------------------payment related ---------
  const totalPrice = test
    ?.reduce((total, item) => total + Number(item.price), 0)
    .toFixed(2);
  // console.log(typeof itemPrice);
  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", {
        price: totalPrice,
      })
      .then((res) => {
        console.log(res?.data?.clientSecret);
        setClientSecret(res?.data?.clientSecret);
      });
  }, [axiosSecure, totalPrice]);
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
      // console.log("[error]", error);
    } else {
      // console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }
    //confirm payment method
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "no name",
            email: user?.email || "noEmail",
          },
        },
      });
    if (confirmError) {
      console.log("confirm error");
    } else {
      console.log(paymentIntent);
      if (paymentIntent.status === "success") {
        // console.log("success", paymentIntent.id);
        setTransactionId(paymentIntent.id);
      }
    }
  };
  return (
    <div className="p-6">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="my-4 btn btn-sm bg-green-600 text-white border-none"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
        <p className="text-red-400 ">{error}</p>
        {transactionId && <p>{transactionId}</p>}
      </form>
    </div>
  );
};

export default CheckOutForm;
