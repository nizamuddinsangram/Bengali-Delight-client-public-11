import axios from "axios";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../../provider/AuthProvider";
const AddFood = () => {
  const { user } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const foodName = form.foodName.value;
    const foodImage = form.foodImage.value;
    const foodCategory = form.foodCategory.value;
    const quantity = parseFloat(form.quantity.value);
    const price = form.price.value;
    const addedBy = {
      name: user?.displayName,
      email: user?.email,
    };
    const foodOrigin = form.foodOrigin.value;
    const shortDescription = form.shortDescription.value;
    const numberOfPurchases = parseFloat(form.numberOfPurchases.value);
    const addFood = {
      foodName,
      foodImage,
      foodCategory,
      quantity,
      price,
      addedBy,
      foodOrigin,
      shortDescription,
      numberOfPurchases,
    };
    console.log(addFood);
    axios.post("http://localhost:8000/foods", addFood).then((res) => {
      console.log(res.data);
    });
  };
  return (
    <>
      <Helmet>
        <title>Bengali Delights || Add Food </title>
      </Helmet>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Add Food Item</h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Food Name
            </label>
            <input
              type="text"
              name="foodName"
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
              placeholder="Enter food name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Food Image URL
            </label>
            <input
              type="text"
              name="foodImage"
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
              placeholder="Enter food image URL"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Food Category
            </label>
            <input
              type="text"
              name="foodCategory"
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
              placeholder="Enter food category"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Quantity
            </label>
            <input
              type="number"
              name="quantity"
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
              placeholder="Enter quantity"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              type="number"
              step="0.01"
              name="price"
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
              placeholder="Enter price"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Added By
            </label>
            <div className="flex space-x-4">
              <input
                type="text"
                name="addedByName"
                defaultValue={user?.displayName}
                className="mt-1 p-2 w-1/2 border border-gray-300 rounded-lg"
                placeholder="Name"
                required
              />
              <input
                type="email"
                name="addedByEmail"
                defaultValue={user?.email}
                className="mt-1 p-2 w-1/2 border border-gray-300 rounded-lg"
                placeholder="Email"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Food Origin
            </label>
            <input
              type="text"
              name="foodOrigin"
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
              placeholder="Enter food origin"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Short Description
            </label>
            <textarea
              name="shortDescription"
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
              placeholder="Enter short description of food item"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Number of Purchases
            </label>
            <input
              type="number"
              name="numberOfPurchases"
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
              placeholder="Enter number of purchases"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600"
          >
            Add Item
          </button>
        </form>
      </div>
    </>
  );
};

export default AddFood;
