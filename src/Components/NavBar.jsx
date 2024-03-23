import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { usersContext } from "../context/userContextProvider";
import { Link, useNavigate } from 'react-router-dom';
import LanguageIcon from '@mui/icons-material/Language';
import { changeLanguage } from '../Redux/Slice/language';
import { Button } from '@mui/material';
import "../Styles/AboutUs.css"
import { useContext, useState } from 'react';
import { cartContext } from '../context/CartProvider';

function Navba() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(usersContext);
  const logout = () => {
    setCurrentUser({});
  };
  const {cart} = useContext(cartContext)

    const lang = useSelector((state) => state.language.language);
  const [t, i18n] = useTranslation();
  const dispatch = useDispatch();

const totalCartCount=cart.length;
  return (
    <nav style={{backgroundColor:"white"}}  className="navbar navbar-expand-lg navbar-light fixed-top mask-custom shadow-0 w-100" >
          <div className='container' dir={`${i18n.language}`==='en'?"ltr":"rtl"}>           
<span style={{color: "#589abb"}} className="navbar-brand"><i className="bi bi-airplane"></i> <b>Travel</b><span  style={{color: "brown"}}> <b>Agency</b></span></span>
             {i18n.language === "en" && <Button onClick={() => {
               dispatch(changeLanguage("ar"))
               i18n.changeLanguage('ar')
             }}><LanguageIcon sx={{ color: "#589abb" }} /><sup style={{ color: "#589abb" }}>{lang}</sup></Button>}
             {i18n.language === "ar" && <Button onClick={() => {
               dispatch(changeLanguage("en"))
               i18n.changeLanguage('en')
             }}><LanguageIcon sx={{ color: "#589abb" }} /><sup style={{ color: "#589abb" }}>{lang}</sup></Button> }
           
         
         <button className="navbar-toggler"  style={{marginLeft:"470px"}}  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon" ></span>
</button>
 
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul style={{fontFamily:"Roboto Mono",fontSize:"20px"}} className="navbar-nav me-auto mb-1 mb-lg-0">
        
            <li className="nav-item">
              <Link className="nav-link  btn btn-light"  aria-current="page" to="/home"><b>{t("Home")}</b></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-light" to="/about"><b>{t("About Us")}</b></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-light" to="/contactus"><b>{t("Contact Us")}</b></Link>
            </li>

          {(Object.keys(currentUser).length===0)&&<li className="nav-item">
              <Link className="nav-link btn btn-light" to="/login" ><b>{t("Sign In")} </b></Link>
            </li>
           }
           {!(Object.keys(currentUser).length===0)&&<li className="nav-item">
              <Link className="nav-link btn btn-light" to="/login"  onClick={logout}><b>{t("Sign out")} </b></Link>
            </li>}
            {currentUser.isAdmin && (
            <li className="nav-item">
              <Link className="nav-link btn btn-light" to="/addpackage"><b>{t("AddPackage")}</b> </Link>
            </li>
            )}
           {!(Object.keys(currentUser).length===0)&& <li className="nav-item">
              <Link className="nav-link btn btn-light" to="/cart"><b>{t("Cart")}</b>({totalCartCount}) <i className="bi bi-cart4"></i> </Link>
            </li>}
           <li>
            <Link className='nav-link btn btn-light' to="/paymentDetails"></Link>
           </li>
          </ul>
         
          </div>
          </div>
    </nav>

);
}
export default Navba;



