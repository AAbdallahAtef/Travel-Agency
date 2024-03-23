import React, { useContext, useState } from 'react';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './PaymentDetails.css';
import { ModalContext } from '../../Contexts/pypalContext.js';


function PayPalButtonComponent({ tourPrice }) {
  // const {setCart,totalAmount} = useContext(cartContext)
  const [show, setShow] = useState(false);

  const { showModal, setShowModal } = useContext(ModalContext);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  // const [orderId, setorderId] = useState(false);
  
  const createOrder=(data,actions)=>{
    // const formattedTotalAmount = (totalAmount).toFixed(2); // Subtract the price of the selected tour and round to 2 decimal places

    return actions.order.create({
      
      purchase_units:[
        {
          description:'Book Your Travel Package',
          amount:{
            currency_code:"USD",
            value:tourPrice,
          },
        },
      ],
      application_context:{
        shipping_preference:'NO_SHIPPING'
      }
    })
    // .then((orderID)=>{
    //   setorderId(orderID)
    //   return orderID
    // })
    }
    const onApprove = (data, actions) => {
      return actions.order.capture().then(function (details) {
        const { payer } = details;
        // setCart([]);
        setSuccess(true);
        console.log('Payment successful');
        console.log(`tourPrice in payment${tourPrice}`);


      });
    };
    
    
    const onError=(data,actions)=>{
      setError("error exists in your payment  ")
    }
  return (
    <div className="container text-center">
      <PayPalScriptProvider
        options={{
          'client-id': 'Ae-htR7tJGC9ZtgEYb5elo_tntQEoD8O-xHXfbbKnqT12hK53zqTvB788sOOkK_EvEOfD3S1APtuzp-L',
        }}
      >
        

        {/* Background overlay */}
        {showModal && <div className="shadow" onClick={() => setShowModal(false)}></div>}

        {/* PayPal Modal */}
        {showModal && (
          <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header justify-content-evenly">
                  <h5 className="modal-title" id="paypalModalLabel">Pay with PayPal</h5>
                  <button type="button" className="close" onClick={() => setShowModal(false)}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                <PayPalButtons
        style={{ layout: "vertical" }}
        // createOrder={createOrder}
        onApprove={onApprove}
        onError={onError}
      />
      {show ? (
        <PayPalButtonComponent
          // createOrder={createOrder}
          onApprove={onApprove}
          onError={onError}
        />
      ) : null}
                </div>
              </div>
            </div>
          </div>
        )}
        {/* End PayPal Modal */}
      </PayPalScriptProvider>
      {success && (
  <div className="alert alert-success" role="alert">
    Payment successful
  </div>
)}

    </div>
  );
}

export default PayPalButtonComponent;
