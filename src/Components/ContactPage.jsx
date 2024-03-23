import * as React from "react";
import "./contact.css";
import { Link } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";
import { Button, ButtonGroup, TextField, InputAdornment, Grid, Container } from "@mui/material";
import ContactForm from "./Form/ContactForm";
import FeedbackForm from "./Form/FeedbackForm";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function ContactPage() {
  const [t, i18n] = useTranslation();
useEffect(()=>{
window.scrollTo(0, 0);
},[])
const [btn, setBtn] = React.useState(true);

const handleContact = () => {
setBtn(true);
};
const handleFeedback = () => {
setBtn(false);
};

return (
<div className="contactus">
<div className="image-content">
<div className="layout"></div>
<div className="text-content container">
  <h2>{t("Contact Us")}</h2>
  <p>
{t("Our team is here to assist you. Please fill out the form below or contact us directly via email or phone.")}
          </p>
          <Button variant="contained"  style={{width:"190px"}} endIcon={<SendIcon />}>
            <Link to="/about"> {t("Read More")}      
            </Link>
          </Button>
        </div>
      </div>
      <div
     
        className="form container text-center my-5"
        style={{
          minHeight: "80vh",
        }}
      >
        <h5
          style={{
            marginTop: "90px",
            marginBottom: "50px",
            fontWeight: "bold",
            textTransform: "uppercase",
            fontSize: "18px",
          }}
        >
          {t("Please, Feel yourself comfortable to fill in our contact form")}
        </h5>
        <ButtonGroup variant="outlined" aria-label="Basic button group">
          <Button onClick={handleContact} active>
            {t("Contact Us")}
          </Button>
          <Button onClick={handleFeedback}>{t("Feedback")}</Button>
        </ButtonGroup>

        {btn ? <ContactForm></ContactForm> : <FeedbackForm></FeedbackForm>}
      </div>

      <div className="image-section my-5 overflow-hidden">
        <div
          className="img-container d-flex my-5"
          style={{ width: "216px", height: "300" }}
        >
          <img src="/Images/img1.jpg" width="100%" alt="egypt" ></img>
          <img src="/Images/img2.jpg" width="100%" alt="egypt" ></img>
          <img src="/Images/img3.jpg" width="100%" alt="egypt" ></img>
          <img src="/Images/img4.jpg" width="100%" alt="egypt" ></img>
          <img src="/Images/img5.jpg" width="100%" alt="egypt" ></img>
          <img src="/Images/img6.jpg" width="100%" alt="egypt" ></img>
          <img src="/Images/img7.jpg" width="100%" alt="egypt" ></img>
          <img src="/Images/img8.jpg" width="100%" alt="egypt" ></img>
        </div>
      </div>
      {/* <div className="container" style={{ height: "70vh" }}>
        <div
          className="subscribe d-flex flex-column text-center justify-content-center align-items-center"
          style={{
            padding: "80px",
            backgroundColor: "#589abb",
            marginTop: "140px",
            borderRadius: "50px",
          }}
        >
          <h2
            style={{
              fontSize: "60px",
              fontWeight: "bold",
              marginBottom: "25px",
            }}
          >
            Subscribe <span style={{ color: "brown" }}>news letter</span> @ get
            latest news
          </h2>
          <form>
            <TextField
              fullWidth
              id="outlined-basic"
              placeholder="Please Enter Your Email"
              sx={{ backgroundColor: "white" }}
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment
                    position="end"
                    sx={{ backgroundColor: "white" }}
                  >
                    <Button
                      variant="contained"
                      sx={{ backgroundColor: "brown" }}
                    >
                      Subscribe
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
          </form>
        </div>
      </div> */}
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
