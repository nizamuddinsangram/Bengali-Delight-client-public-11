import axios from "axios";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
const MyAddedFoodUpdate = () => {
  const updateData = useLoaderData();
  const { user } = useContext(AuthContext);
  //   console.log(updateData);
  const {
    foodImage,
    shortDescription,
    foodName,
    foodCategory,
    price,
    addedBy,
    foodOrigin,
    quantity,
    numberOfPurchases,
    _id,
  } = updateData;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const foodName = form.foodName.value;
    const foodImage = form.foodImage.value;
    const foodCategory = form.foodCategory.value;
    const quantity = parseFloat(form.quantity.value);
    const price = form.price.value;
    const addedBy = {
      name: form.addedByName.value,
      email: form.addedByEmail.value,
    };
    const foodOrigin = form.foodOrigin.value;
    const shortDescription = form.shortDescription.value;
    const numberOfPurchases = parseFloat(form.numberOfPurchases.value);
    const updatedFoodItem = {
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
    console.log(updatedFoodItem);
    axios
      .put(`http://localhost:8000/foods/${_id}`, updatedFoodItem)
      .then((res) => {
        console.log(res.data);
      });
  };
  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Update Food Item</h1>
        <form
          onSubmit={handleUpdate}
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
              defaultValue={foodName}
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
              defaultValue={foodImage}
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
              defaultValue={foodCategory}
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
              defaultValue={quantity}
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
              defaultValue={price}
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
                defaultValue={addedBy?.name}
                className="mt-1 p-2 w-1/2 border border-gray-300 rounded-lg"
                placeholder="Name"
                readOnly
                required
              />
              <input
                type="email"
                name="addedByEmail"
                defaultValue={addedBy?.email}
                className="mt-1 p-2 w-1/2 border border-gray-300 rounded-lg"
                placeholder="Email"
                readOnly
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
              defaultValue={foodOrigin}
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
              defaultValue={shortDescription}
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
              defaultValue={numberOfPurchases}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyAddedFoodUpdate;
