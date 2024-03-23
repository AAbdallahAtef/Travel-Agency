import React, { useContext, useEffect, useState } from 'react';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import { cartContext } from '../context/CartProvider';
const Payment = () => {
  const {setCart,totalAmount} = useContext(cartContext)
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])
const [show, setShow] = useState(false);
const [success, setSuccess] = useState(false);
const [error, setError] = useState("");
const [orderId, setorderId] = useState(false);

const createOrder=(data,actions)=>{
  return actions.order.create({
    purchase_units:[
      {
        description:'Book Your Travel Package',
        amount:{
          currency_code:"USD",
          value:totalAmount
        },
      },
    ],
    application_context:{
      shipping_preference:'NO_SHIPPING'
    }
  }).then((orderID)=>{
      setorderId(orderID)
       return orderID
     })
  
  }
  const onApprove=(data,actions)=>{
  return actions.order.capture().then(function(details){
    const {payer}=details
    setCart([])
    setSuccess(true)

  })
  }
  const onError=(data,actions)=>{
    setError("error exists in your payment  ")
  }
  
    return (
        <div style={{margin:"200px"}}>

        <div class="card mb-1 shadow mx-auto" style={{maxWidth: "40rem",height:"250px"}}>
  <div class="card-body text-center">
  <PayPalScriptProvider
      options={{
        "client-id": "Ae-htR7tJGC9ZtgEYb5elo_tntQEoD8O-xHXfbbKnqT12hK53zqTvB788sOOkK_EvEOfD3S1APtuzp-L",
      }}
    >
      <PayPalButtons
        style={{ layout: "vertical" }}
         createOrder={createOrder}
        onApprove={onApprove}
        onError={onError}
        
      />
        
        {show ? (
        <Payment
          createOrder={createOrder}
          onApprove={onApprove}
          onError={onError}
        />
      ) : null}

      {success ? (
        <h3 style={{ color: "brown" }}>
          Your Payment has been done Successfully
        </h3>
        
      ) : null}
       </PayPalScriptProvider>
  </div>
  </div>
       
          
        </div>
       
    );
}

export default Payment;
