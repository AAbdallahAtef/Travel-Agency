import React, { useCallback, useContext, useEffect, useTransition } from 'react'
import HorizontalLineWithText from './HorizontalLineWithText';
import { useState } from 'react';
import { usersContext } from '../context/userContextProvider';
import { useNavigate } from 'react-router-dom';
import {auth,provider} from "./config";
import { signInWithPopup } from 'firebase/auth';
import { useTranslation } from 'react-i18next';

const Login = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])
    const [t, i18n] = useTranslation();
    const navigate = useNavigate()
    const {users, setCurrentUser} = useContext(usersContext);
    const [userData,setUserData] = useState({userEmail:"",userPassword:""})

    const handleChange = useCallback((event) =>{
        const {name,value} = event.target
        setUserData(prev=>({...prev,[name]: value}))
    },[])

    const handleSubmit = useCallback(async(event) => {
        event.preventDefault()
        const foundedUser = users.find(u => u.email === userData.userEmail && u.Password === userData.userPassword);
        if (foundedUser) {
            await setCurrentUser(foundedUser)
            navigate("/home")
        }else{
            alert(t("Invalid UserName or Password"))
        }
    },[userData,navigate,setCurrentUser,users]);
    const handleClick =useCallback(()=>{
        signInWithPopup(auth,provider).then( (data)=>{ 
            const foundedUser =  users.find(u => u.email === data.user.email)
            if(foundedUser){
            setCurrentUser(foundedUser)
            navigate("/home")
            }
            else{
                alert(t("Invalid UserName or Password"))
            }
        }).catch((error)=>{
        alert(t("Error In FireBase"))
        })
    },[navigate,setCurrentUser,users])
    return (
<section className="vh-100 gradient-custom mt-5">
  <div className="container py-3 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100 ">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5 mt-4 ">
        <div className="card bg-dark shadow-lg p-3  bg-body-tertiary" style={{borderRadius:"1rem",color:'#000000'}} >
          <div className="card-body p-3 text-center">
            <div className="mb-md-5 ">
                <h2 className="fw-bold mb-2 text-uppercase">{t("LOGIN")}</h2>
                <p className="text-dark-50 mb-5">{t("Please enter your email and password!")}</p>
                <form onSubmit={handleSubmit} className='mb-4'>
                <div className="form-outline form-white mb-4">
                    <label className="form-label" htmlFor="typeEmailX">{t("Email")}</label>
                        <input type="email" id="typeEmailX" className="form-control form-control-lg" value={userData.userEmail} name='userEmail'
                        onChange={handleChange} required/>
                    </div>
                    <div className="form-outline form-white mb-4">
                    <label className="form-label" htmlFor="typePasswordX">{t("Password")}</label>
                        <input type="password" id="typePasswordX" className="form-control form-control-lg" value={userData.userPassword} name='userPassword'
                        onChange={handleChange} required/>
                    </div>
                    <button className="btn  btn-lg   text-white" type="submit" style={{backgroundColor:"#589abb", position:"relative"}}>{t("Login")}</button>
                </form>
                <HorizontalLineWithText text={t("OR")}></HorizontalLineWithText>
                <div className="d-flex justify-content-center text-center mt-3 pt-1">
                    <button className="btn btn-danger text-light  col-sm-5 col-md-6" style={{position:"relative"}}  onClick={handleClick}><i className="bi bi-google me-2"></i>{t("Login with Google")}</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    );
}

export default Login;
