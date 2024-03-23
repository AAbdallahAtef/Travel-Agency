import React, { useContext, useEffect, useState } from 'react';
import App from '../App';
import { Button, Table } from 'react-bootstrap';
import{data} from "../DB/data"
import { packageContext } from '../context/packageContextProvider';
import { cartContext } from '../context/CartProvider';
import Payment from '../Components/Payment';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const Cart = () => {
  const [t,i18n]=useTranslation();
  const {cart,removeFromCart,totalAmount,setTotalAmount} = useContext(cartContext)
  const totalCartCount=cart.length;
// let totalAmount=0;
  useEffect(()=>{
    window.scrollTo(0, 0);
    setTotalAmount(0)
  cart.map((item)=>{
  //  totalAmount+=item.price
  setTotalAmount((old)=>old+item.price)
  });
  },[])



const {packages} = useContext(packageContext)

// const [show, setShow] = useState(false);
// const [success, setSuccess] = useState(false);
// const [error, setError] = useState("");
// const [orderId, setorderId] = useState(false);
// const createOrder=(data,actions)=>{
//   return actions.order.create({
//     purchase_units:[
//       {
//         description:'Book your Package',
//         amount:{
//           currency_code:"USD",
//           value:200
//         },
//       },
//     ],
//     application_context:{
//       shipping_preference:'NO_SHIPPING'
//     }
//   })
//   .then((orderID)=>{
//     setorderId(orderID)
//     return orderID
//   })
//   }
//   const onApprove=(data,actions)=>{
//   return actions.order.capture().then(function(details){
//     const {payer}=details
//     setSuccess(true)
//   })
//   }
//   const onError=(data,actions)=>{
//     setError("error exists in your payment  ")
//   }
  
const navigate = useNavigate();

const handlePayment=()=>{
navigate('/payment')

}
useEffect(()=>{
  console.log(cart  );
},[])

return (
<>
<h2 style={{marginTop:"100px", textAlign:"center"}}> {t("Your Cart")} ({totalCartCount})</h2>
<div dir={`${i18n.language}`==='en'?"ltr":"rtl"}
 className='d-flex justify-content-between align-items-start' >
<button className='btn btn-danger ' style={{position:"relative",width:"200px",height:"57px"}}  onClick={handlePayment}  >{t("Go To Payment")}</button>
<span className='alert alert-info'   style={{width:"210px"}}   >{t("Total Cart Amount:")}{totalAmount}</span>
</div>
<Table 
     dir={`${i18n.language}`==='en'?"ltr":"rtl"}
 bordered hover style={{marginTop:"40px", marginBottom:"600px"}}>
   
      <thead>
        <tr>
          <th style={{color:"brown"}}>{t("Package_Id")}</th>
          <th style={{color:"brown"}}>{t("Name")}</th>
          <th style={{color:"brown"}}>{t("Description")} </th>
          <th  style={{color:"brown"}} >{t("Package Image")}</th>
          <th  style={{color:"#589abb"}}>{t("Price")}</th>
          <th style={{color:"brown"}}>{t("Delete")}</th>
        </tr>
      </thead>
      <tbody>
      {cart.map((pack)=>(
        <tr key={pack.id}> 
          <td> {pack.id}</td>
          <td>{pack. destination_name}</td>
          <td>{pack.Name}</td>
          <td ><img src={pack.image_url} style={{width:"150px", height:"150px"}}></img></td>
          <td style={{color:"#589abb"}}>{pack.price}$</td>
          <button className='btn  text-light shadow' style={{backgroundColor:"brown"}} onClick={(e)=>{
            e.preventDefault()
            setTotalAmount((old)=>old-pack.price)
            removeFromCart(pack.id)
          }}>{t("Delete")}</button>
        </tr>
      ))}
      
      </tbody>
   
      
    </Table>
  
</>
  );
}
export default Cart;
