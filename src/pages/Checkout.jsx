// import React from 'react'
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { Package, MapPin, PinIcon, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import OrderConfirmation from "./OrderConfirmation";

function Checkout() {
  const { cartTotal, clearCart, cart } = useCart();
  const [deliveryDetails, setDeliveryDetails] = useState({
    name: "",
    address: "",
    city: "",
    zip: "",
  });

  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeliveryDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearCart();
    setIsConfirmed(true);
  };

  // console.log("shipping data",deliveryDetails)

  if (isConfirmed)
    return <OrderConfirmation deliveryDetails={deliveryDetails} />;
  return (
    <>
      <div className="container mx-auto px-4 md:px-8 pt-4 ">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 md:mb-10 text-center md:text-left md:ml-22">
          {" "}
          Finalize Order
        </h2>
        <div
          className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-30 px-4 mx-auto 
          max-w-md md:max-w-2xl lg:max-w-none lg:ml-20 lg:pr-60"
        >
          <div
            className="lg:col-span-2 p-4 md:p-6  bg-gray-900 rounded-2xl shadow-2xl border border-gray-800 mx-auto 
       w-full max-w-md md:max-w-xl lg:max-w-full"
          >
            <h3 className="text-3xl font-bold text-orange-400 mb-6 flex items-center space-x-3 border-b border-gray-700 pb-4">
              <MapPin className="w-7 h-7 text-orange-700" />
              <span>Shipping Information</span>
            </h3>

            <form className="w-full space-y-5 px-2 sm:px-4 md:px-0 flex flex-col items-center md:items-stretch" onSubmit={handleSubmit}>
              {Object.keys(deliveryDetails).map((key) => (
                <div key={key} className="w-full max-w-sm md:max-w-full">
                  <label
                    htmlFor={key}
                    className="block text-sm font-semibold text-gray-300 capitalize mb-1"
                  >
                    {key === "zip" ? "Pin Code" : key}
                  </label>
                  <input
                    type={key === "zip" ? "number" : "text"}
                    id={key}
                    name={key}
                    value={deliveryDetails[key]}
                    required
                    onChange={handleChange}
                    className="mt-1 w-full max-w-sm md:max-w-full px-5 py-3 border border-gray-700 rounded-xl shadow-inner 
                     text-white bg-gray-800 placeholder-gray-500"
                  />
                </div>
              ))}
              <div className="pt-1 ">
                <button
                  type="submit"
                  className="w-full max-w-sm md:max-w-full mx-auto py-3 bg-orange-600 text-white font-extrabold rounded-full text-xl shadow-lg
                  shadow-orange-800/50 cursor-pointer hover:bg-orange-700 transition duration-300 flex items-center justify-center
                  space-x-2 transform hover:ring-4 hover:ring-orange-600/50 upperCase tracking-wider"
                >
                  <span>₹ Pay and Confirm Order(₹{cartTotal.toFixed(2)})</span>
                  {/* <Zap className="w-6 h-6" /> */}
                </button>
              </div>
            </form>
          </div>

          {/* Order Summary in Checkout */}
          <div className="lg:col-span-1 w-full max-w-md md:max-w-xl lg:w-96 mx-auto p-5 md:p-8  bg-gray-900 rounded-2xl 
  shadow-2xl border border-gray-800">
            <h3
              className="text-3xl font-bold text-white mb-5 border-b border-y-gray-700 pb-3 flex items-center
              space-x-2"
            >
              <Package className="w-6 h-6  text-orange-400" />

              <span>Summary</span>
            </h3>

            <div className="space-y-4 text-gray-400 ">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between text-base border-b border-gray-800 pb-2"
                >
                  <span className="trucate text-gray-300">{item.name}</span>
                  <span className="font-medium text-orange-300">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}

              <div className="space-y-4 text-gray-400 ">
                <div className="flex justify-between text-xl ">
                  <span>SubTotal :</span>
                  <span className="font-semibold text-white">
                    ₹{cartTotal.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between text-xl ">
                  <span>Shipping (Express) :</span>
                  <span className="font-semibold text-green-500">Free</span>
                </div>

                <div className="flex justify-between pt-2 border-t border-gray-700 ">
                  <span className="text-2xl font-extrabold text-white">
                    Total Due:
                  </span>
                  <span className=" text-3xl font-extrabold text-orange-500">
                    ₹{cartTotal.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
