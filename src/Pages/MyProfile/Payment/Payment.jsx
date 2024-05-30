import { Elements } from "@stripe/react-stripe-js";

import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
console.log(import.meta.env.VITE_payment_Gateway_Pk);
const stripePromise = loadStripe(import.meta.env.VITE_payment_Gateway_Pk);
const Payment = () => {
  return (
    <div className=" ">
      <div>
        <Elements stripe={stripePromise}>
          <CheckOutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
