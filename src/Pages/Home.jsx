import React, { lazy, useContext, useEffect } from 'react';
import { destinationsContext } from '../context/DistinationsContextProvider';
import '../Components/Home.css';
import classes from "../Styles/home.module.css"
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from 'react-router-dom';
import {Button, Container, Grid, Input, InputAdornment, TextField } from '@mui/material';
import { packageContext } from '../context/packageContextProvider';
import { cartContext } from '../context/CartProvider';
import SearchBar from '../Components/Searchbar/Search';
import { usersContext } from '../context/userContextProvider';
const Home = (props) => {
// const img1 = lazy(()=>import("/Images/img1.jpg"))
const { currentUser, setCurrentUser } = useContext(usersContext);

  const [t, i18n] = useTranslation();
const navigate = useNavigate();
const {packages} = useContext(packageContext)
const {addCart} = useContext(cartContext)
  const { destinationsArr } = useContext(destinationsContext)
useEffect(()=>{
  window.scrollTo(0, 0);
},[])
  return (
    
    <div>
            
        <div id="intro" className="bg-image vh-100 w-100" style={{
              backgroundImage: "url('https://i.postimg.cc/Y2JTg47T/image5.jpg')" , backgroundRepeat:"no-repeat" , backgroundSize:"cover"}} >
          <div className="mask" style={{backgroundColor: "rgba(250, 182, 162, 0.25)"}}></div>
      
        <div className="col-12 col-md-auto mb-2 order-last order-md-first" >
               <div className="position-absolute top-0 start-50 translate-middle-x" style={{color: "white"}}>
                   <h2 className="display-2 fw-normal" style={{marginTop:"150px", fontFamily:"Roboto mono"}}>{t("Leave your mark on all over the world")}</h2>
               </div>
           </div>
           </div>
           <section className="p-5 bg-light" style={{marginTop:"70px"}}>
  <div className="container">
    <h2 className="text-center mb-5 " style={{color:"brown", fontFamily:"Roboto mono"}}>{t("Special Features")}</h2>
  <h1 className="text-center mb-5" style={{fontFamily:"Roboto mono"}}>{t("Join us and see some benefits")}</h1>
    <div className="row text-center g-4" >
      <div className="col-md-4" >
      <div className="card h-100 shadow">
        <div className="feature-box position-relative">
        <div className="feature-content">
          <i className="bi bi-bag-check fs-1 " style={{color:"brown"}}></i>
          
          <h3 style={{fontFamily:"Roboto mono"}}>{t("Get the best deals")}</h3>
          <p style={{fontFamily:"Roboto mono"}}>{t("Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.")}</p>
        </div>
        </div>
        </div>
        <div className="box-shadow"></div>
      </div>
      <div className="col-md-4">
      <div className="card h-100 shadow">
        <div className="feature-box position-relative">
          <i className="bi bi-credit-card-2-front fs-1 " style={{color:"brown"}}></i>
          <h3 style={{fontFamily:"Roboto mono"}}>{t("The price is 100% transparent")}</h3>
          <p style={{fontFamily:"Roboto mono"}}>{t("Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.")}</p>
        </div>
        </div>
        <div className="box-shadow"></div>
      </div>
      <div className="col-md-4">
      <div className="card h-100 shadow">
        <div className="feature-box position-relative">
          <i className="bi bi-person-check fs-1 " style={{color:"brown"}}></i>
          <h3 style={{fontFamily:"Roboto mono"}}>{t("Feel more confident when you travel")}</h3>
          <p style={{fontFamily:"Roboto mono"}}>{t("Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.")}</p>
        </div>
        </div>
        <div className="box-shadow"></div>
      </div>
    </div>
  </div>
</section>
<div>
            <div className={classes.locations} >
                <p className={classes.locations_header} >{t("BEST LOCATIONS")}</p>
                <p className={classes.locations_second}>{t("Our")} <span style={{ color: "#b2cad9" }}>{t("Tourism")}</span> </p>
            </div>

     
            <div className={classes.cards_container} >
                {destinationsArr.map((d) => {
                    return (

                        <div key={d.id} className={classes.card}  style={{marginBottom:"70px", marginTop:"0px"}}> 
                            <Link to={`/destinations/${d.id}`}>
                                <button className='btn btn-info rounded-pill m-3 ourbutton'>{d.name}</button>
                            </Link>
                            <img src={d.image_url} style={{ width: "400px", height: "500px" }}></img>
                        </div>
                    )
                }
                )
                }
            </div>
        </div>

        <div dir={`${i18n.language}` === 'en' ? "ltr" : "rtl"} className="container mt-5" style={{marginBottom:"150px"}}>
                <div className="row">
                    <div className="col-lg-6">
                        <img src='Images/2.jpeg' className="img-fluid mb-4" style={{ borderRadius: "20px" }} alt="" />
                    </div>

                    <div className={`col-lg-6 ${classes.work_second_container}`}>
                        <p className={classes.work_header}>{t("HOW IT WORKS")}</p>
                        <h1 className={classes.second_work_header}>{t("One Click For You")}</h1>
                        <div className="mb-5 mt-5 mx-auto rounded-pill w-75 p-0" style={{boxShadow: "15px 13px 20px 8px"}}>
                        <SearchBar  ></SearchBar>

                        </div>
                        <div style={{ width: "735px", display: "flex" }}>
                            <div>
                                <h4 className="fw-bold"><span className={`badge bg-primary ${classes.badge}`} >{t("01")}</span> {t("Book Ticket")}</h4>
                            </div>
                            <div>
                                <h4 className="fw-bold"><span className={`badge bg-primary ${classes.badge}`}>{t("02")}</span> {t("Make Payment")}</h4>
                            </div>
                            <div>
                                <h4 className="fw-bold"><span className={`badge bg-primary ${classes.badge}`}>{t("03")}</span> {t("Explore Destination")}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
<h1 style={{color: "brown", textAlign:"center", marginBottom:"25px", fontSize:"50px"}}>{t("Our Packages")} </h1>
<div dir={`${i18n.language}` === 'en' ? "ltr" : "rtl"} className="row mx-auto" style={{marginBottom:"100px", marginTop:"2px", width:"100%" }} >
{packages.map((pack)=>(
  <div className="col-md-4 " key={pack.id}>
  <div className="card m-3 mx-auto" >
  <img className="card-img " src={pack.image_url} alt="a snow-capped mountain range" style={{height:"300px"}}/>
  <div className="card-img-overlay text-white">
    <h2 className="card-title">{t(`${pack.name}`)}</h2>
    <p style={{height:"28px"}}>{t(`${pack.description}`)}</p>
    <h5 style={{color:"red", marginTop:"5px"}} >{t(`${pack.duration_days}`)} {t("days")}</h5> 
    <p className="card-text">{pack.price}$ </p>
    <button href="#" className="btn shadow position-relative" style={{marginTop:"80px", backgroundColor:"brown", color:"white", width:"120px"}} onClick={()=>{
      if(Object.keys(currentUser).length===0){
        navigate('/login')
      }else{
        addCart(pack)
      }
      }}>
        {t("Book now !")}</button>
</div>
</div>
</div>
))}
</div>
<div className="image-section my-5 overflow-hidden">
        <div
          className="img-container d-flex my-5"
          style={{ width: "216px", height: "300" }}
        >
          <img src="/Images/img1.jpg" width="100%" alt="egypt" ></img>
          <img src="/Images/img2.jpg" width="100%" alt="egypt" ></img>
          <img src="/Images/img3.jpg" width="100%" alt="egypt"></img>
          <img src="/Images/img4.jpg" width="100%" alt="egypt"></img>
          <img src="/Images/img5.jpg" width="100%" alt="egypt"></img>
          <img src="/Images/img6.jpg" width="100%" alt="egypt"></img>
          <img src="/Images/img7.jpg" width="100%" alt="egypt"></img>
          <img src="/Images/img8.jpg" width="100%" alt="egypt"></img>
        </div>
      </div>
      <Container>
                <Grid container p={5} sx={{marginBottom:'50px'}} >
                <Grid  item xs={12} sm={12} >
                        <div  className='news' >
                            {t("Subscribe")} <span style={{ color: '#052624' }}>{t("news letter")}</span>  {t("@")} <br /> {t("get latest news")} <br/> <br />
                            <TextField
                                label={t("Enter Your Email Address")}
                                variant='outlined'
                                style={{ width: "400px", backgroundColor: 'white', borderRadius: '8px' ,marginBottom:'15px'}}
                                InputProps={{
                                    endAdornment: (
                                    <InputAdornment position="end">
                                        <Button sx={{backgroundColor:'brown',borderRadius: '8px', color:'white'}} type="submit" variant="contained" >
                                        {t("Subscribe")}
                                        </Button>
                                    </InputAdornment>
                                    ),
                                }}
                            />
                        </div>
                    </Grid>
                </Grid>
            </Container>

   
        
      </div>
     
 
    );
}

export default Home;
