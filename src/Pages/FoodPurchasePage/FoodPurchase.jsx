import axios from "axios";
import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
const FoodPurchase = () => {
  const currentDate = new Date().toISOString().split("T")[0];
  const { user } = useContext(AuthContext);
  const foodData = useLoaderData();
  const { foodName, price, foodImage, _id, quantity } = foodData;
  const [availableQuantity, setAvailableQuantity] = useState(quantity);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const foodName = form.foodName.value;
    const price = form.price.value;
    const quantity = parseInt(form.quantity.value);
    const date = form.buyingDate.value;
    const buyer_email = form.buyerEmail.value;
    const buyer_name = form.buyerName.value;
    const purchaseFood = {
      foodName,
      price,
      date,
      buyer_email,
      buyer_name,
      quantity,
      foodImage,
      foodId: _id,
    };
    // console.log("test my data ", test);
    console.log(purchaseFood);
    axios.post("http://localhost:8000/purchases", purchaseFood).then((res) => {
      setAvailableQuantity((prevQuantity) => prevQuantity - quantity);
      console.log(res.data);
    });
  };
  return (
    <div>
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Purchase Food Item
        </h2>
        {availableQuantity <= 0 && (
          <p className="text-red-500 mb-4">This item is not available.</p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-600">Food Name:</label>
            <input
              type="text"
              name="foodName"
              className="border border-gray-300 rounded-md p-2 w-full"
              defaultValue={foodName}
              readOnly
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600">Price:</label>
            <input
              type="number"
              name="price"
              className="border border-gray-300 rounded-md p-2 w-full"
              defaultValue={price}
              readOnly
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600">Quantity:</label>
            <input
              type="number"
              name="quantity"
              min="1"
              defaultValue="1"
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600">Buyer Name:</label>
            <input
              type="text"
              name="buyerName"
              defaultValue={foodData?.foodName}
              className="border border-gray-300 rounded-md p-2 w-full"
              readOnly
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600">Buyer Email:</label>
            <input
              type="text"
              name="buyerEmail"
              defaultValue={user?.email}
              className="border border-gray-300 rounded-md p-2 w-full"
              readOnly
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600">Buying Date:</label>
            <input
              type="text"
              name="buyingDate"
              defaultValue={currentDate}
              className="border border-gray-300 rounded-md p-2 w-full"
              readOnly
            />
          </div>

          <button
            type="submit"
            disabled={availableQuantity <= 0}
            className={`bg-blue-500 text-white font-semibold rounded-md p-2 hover:bg-blue-600 ${
              availableQuantity <= 0 && "opacity-50 cursor-not-allowed"
            }`}
            // className="bg-blue-500 text-white font-semibold rounded-md p-2 hover:bg-blue-600"
          >
            Purchase
          </button>
        </form>
      </div>
    </div>
  );
};

export default FoodPurchase;
// const { id } = useParams();
// useEffect(() => {
//   getData();
// }, []);
// const getData = async () => {
//   const { data } = await axios(`http://localhost:8000/allFoods/${id}`);
//   setItem(data);
// };
// console.log(item);

// const { foodName: f, price: p, foodImage: I, _id: i, quantity: q } = item;

// console.log(f, p, i, q, I);
