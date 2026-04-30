// import React from 'react'
import {CheckCircle,Zap} from "lucide-react"
import {Link} from"react-router-dom"


const OrderConfirmation = ({deliveryDetails}) => {
  return (
    <>
     <div className="container mx-auto md:px-8 mt-[-12px]">
          <div className="p-12 bg-gray-900 rounded-3xl shadow-2xl max-w-2xl mx-auto text-center mt-12 
          border border-green-700 text-white">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6 drop-shadow-lg "/>
            <h2 className="text-4xl font-extrabold text-white mb-4">Order Confirmed</h2>
            <p className="text-lg text-gray-300 mb-6 ">Your transaction is complete. A confirmation email has been sent to your account</p>
            <div className="p-6 bg-green-900/30 border-green-700 rounded-xl font-mono text-left inline-block 
            text-green-300 text-sm">
                <p className="font-semibold text-lg mb-1 ">
                  {deliveryDetails?.name}
                </p>
                <p>{deliveryDetails?.address}</p>
                <p>{deliveryDetails?.city},{deliveryDetails?.zip}</p>
            </div>

            <Link to={"/"}
                  className="mt-10 px-10 py-4 w-full bg-orange-600 text-white font-extrabold rounded-full text-xl shadow-lg
                  shadow-orange-800/50 cursor-pointer hover:bg-orange-700 transition duration-300 flex items-center justify-center
                  space-x-2 transform hover:ring-4 hover:ring-orange-600/50 upperCase tracking-wider"
                >
                  {/* <Zap className="w-6 h-6" /> */}
                  <span>continue Shopping</span>
                </Link>
          </div>
     </div>
    </>
  )
}

export default OrderConfirmation
