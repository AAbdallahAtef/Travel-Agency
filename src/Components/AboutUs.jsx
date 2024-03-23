import React, { useEffect } from 'react'
import "../Styles/AboutUs.css"
import {  Button, Container, Grid, Input, InputAdornment, Paper, TextField } from '@mui/material';
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import { useTranslation } from 'react-i18next';
export default function AboutUs() {
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])
    const [t, i18n] = useTranslation();
    return (
        <>
            <div dir={`${i18n.language}`==='en'?"ltr":"rtl"} className='container1'>
            <div className='mask'>
                    <div className="top-right">
            </div>
            <div className="centered">
                <div className='h1'>{t("About US")}</div>
                <p style={{fontWeight:'500',lineHeight:'1.5'}}>
                {t("where every journey is a story waiting to be told. As passionate travelers ourselves,we understand the transformative power of exploration. With a commitment to craftingunforgettable experiences, we specialize in curating personalized travel adventures that cater to every wanderlust-filled heart.")}
                </p>
            </div>
            </div>
            </div>
            <Container  dir={`${i18n.language}`==='en'?"ltr":"rtl"}>
                <Grid container spacing={5} p={5}>
                <Grid item xs={12} sm={12} md={6}>
                        <Paper sx={{ lineHeight: '2', color: '#363530' }}>
                        <div className=' box1'>
                                {t("Hey, We Are The Red Explorers Brief History")} <span style={{ textDecoration: 'underline', color: '#589abb' }}>{t("About Us")}</span></div>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <div className='right-text'>
                            {t("the history of red flags reflects their evolution from practical signaling devices in maritime and military settings to symbolic representations of danger, dissent, and vigilance in various aspects of human endeavor.")}
                        </div>
                    </Grid>
                </Grid>
            </Container>
            <div dir={`${i18n.language}`==='en'?"ltr":"rtl"} className='cont2'>
                <img className='img2' src="Images/imagee2.jpg" alt="Tourism" />
                <p>
                    {t("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure fugiat sint quis laborum, autem rerum ab odio eveniet recusandae laboriosam, explicabo repellendus quasi perspiciatis vero dolore quas molestias nesciunt? Dolorum Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti necessitatibus, possimus quisquam unde quas asperiores velit architecto quod ratione esse facilis amet quasi id nobis quo illum rerum accusantium sed?")}
                </p>
            </div>
            <Container dir={`${i18n.language}`==='en'?"ltr":"rtl"}  >
                <Grid container spacing={5} p={5}>
                    <Grid item xs={12} sm={12} md={6}>
                        <div style={{lineHeight:'2',color:'#363530',fontFamily:'Roboto Mono',fontWeight:'600'}}>
                            <p style={{ fontSize: '32pt' }}>{t('Our Story')}</p>
                            <p>{t('Once upon a time, nestled in the bustling streets of the digital world, there emerged a vibrant travel agency website. With its sleek design and captivating imagery, it beckoned wanderlust souls from around')}</p> <br />
                            <p>
                            {t('From the majestic peaks of the Himalayas to the sun-kissed shores of the Caribbean, it offered an array of curated adventures. Users embarked on virtual journeys, browsing through enchanting destinations and immersive experiences.')}</p><br />
                            {t('With a few clicks, dreams transformed into reality as bookings were made seamlessly. Expertly crafted itineraries and personalized recommendations ensured every trip was tailor-made. Customer testimonials echoed tales of unforgettable escapades, fostering a sense of community among fellow travelers. In this digital oasis, the world was just a click away, waiting to be explored with boundless curiosity and wanderlust.')}
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} >
                        <div style={{lineHeight:'2',color:'#363530',fontFamily:'Roboto Mono',fontWeight:'600'}}>
                            <p style={{ fontSize: '32pt' }}>{t('Who Are Red Expolrers')}</p>
                            <p>
                                {t("Red Explorers are a passionate group of adventurers dedicated to unlocking the mysteries of the world's most remote and challenging landscapes. With a spirit of exploration deeply rooted in their hearts,")}</p> <br />
                            <p>
                                {t("they embark on expeditions to uncover hidden treasures and push the boundaries of human discovery. From scaling towering mountains to traversing vast deserts, Red Explorers fearlessly venture into the unknown,")} </p><br />
                                {t("driven by a thirst for adventure and a quest for knowledge. Armed with resilience and determination, they embrace the thrill of the journey, facing obstacles with courage and ingenuity. Through their daring exploits and extraordinary achievements, Red Explorers inspire others to embrace curiosity, embrace the unknown, and embark on their own epic quests.")}
                        </div>
                    </Grid>
                </Grid>
            </Container>
            <Container dir={`${i18n.language}`==='en'?"ltr":"rtl"} >
                <Grid container spacing={5} p={5}>
                    <Grid item xs={12} sm={12} md={6}>
                        <div style={{lineHeight:'2',color:'#363530',fontFamily:'Roboto Mono',fontWeight:'600'}}>
                            <p style={{ fontSize: '32pt' }}>{t("About Our Cameraman")}</p>
                            <p>{t("Meet Our Cameraman, the visionary behind capturing the essence of every adventure. With an artistic eye and a passion for storytelling, our skilled cameraman transforms fleeting moments into everlasting memories.")}</p> <br />
                            <p>
                                {t("Armed with state-of-the-art equipment, they venture alongside our travelers, preserving the beauty of each destination in stunning detail. From panoramic vistas to intimate encounters, every frame tells a unique story,")}</p><br />
                            <p>
                                {t("inviting viewers to immerse themselves in the journey. Whether trekking through dense jungles or sailing across azure seas, our cameraman fearlessly captures the spirit of exploration with precision and grace. Their keen sense of composition and lighting elevates each scene,")}</p>
                            <p>
                                {t("creating cinematic experiences that resonate with audiences worldwide. Behind the lens, they embody the spirit of adventure, braving rugged terrain and adverse conditions to seize the perfect shot. Join us as we embark on a visual odyssey, guided by the expertise and passion of Our Cameraman.")}
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} >
                        <div style={{lineHeight:'2',color:'#363530',fontFamily:'Roboto Mono',fontWeight:'600'}}>
                            <p style={{ fontSize: '32pt'}}>{t("What You'll Learn Here")}</p>
                            <p>
                                {t("Here, you'll embark on a journey of discovery, where every click opens doors to new horizons. Explore our curated collection of destinations, each offering a unique blend of culture, adventure, and relaxation.")}</p> <br />
                            {t("Learn insider tips and tricks to make the most of your travels, from packing essentials to off-the-beaten-path experiences. Dive into immersive travel guides that unveil hidden gems and iconic landmarks, ensuring you create memories that last a lifetime.")}
                            <p style={{ fontSize: '18pt' }}>{t("On Our Website You'll Find:")}</p>
                            <ul style={{listStyleType:'square'}}>
                                <li>{t("Explore a wide range of destinations, from tropical paradises to cultural hubs, each offering its own unique charm and allure.")}</li>
                                <li>{t("Dive deep into our detailed travel guides, packed with insider tips,and hidden gems to ensure you make the most of your journey.")}</li>
                                <li>{t("Discover special  customized travel packages tailored to your preferences and budget, making your dream vacation very Exciting.")}</li>
                                <li>{t("Immerse yourself in captivating travel narratives , fueling your wanderlust and igniting your passion for exploration.")}</li>
                                <li>{t("Streamline travel planning with user-friendly booking tools,allowing you to easily reserve flights,activities,with just a few clicks.")}</li>
                            </ul>
                        </div>
                    </Grid>
                </Grid>
            </Container>
            <Container dir={`${i18n.language}`==='en'?"ltr":"rtl"} >
                <Grid container spacing={5} p={5}>
                <Grid item xs={12} sm={12} md={6}>
                        <Paper style={{ lineHeight: '2', color: '#363530',fontFamily:'Roboto Mono',fontWeight:'600' }}>
                        <div className='box1'>
                            {t("What")}  <span style={{textDecoration:'underline',color:'#589abb'}}>{t("Customer Says")}</span> <br />{t("About Us?")}
                        </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <div className='right-text'>
                        {t("the history of red flags reflects their evolution from practical signaling devices in maritime and military settings to symbolic representations of danger, dissent, and vigilance in various aspects of human endeavor.")}
                        </div>
                    </Grid>
                </Grid>
            </Container>
            <Container dir={`${i18n.language}`==='en'?"ltr":"rtl"}>
                <Grid container spacing={3} p={5}>
                    <Grid  item xs={12} sm={12} md={4}>
                        <div className='team'>
                            <Card1></Card1>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <div className='team'>
                            <Card2></Card2>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <div className='team'>
                            <Card3></Card3>
                        </div>
                    </Grid>
                </Grid>
            </Container>
            <div className="image-section my-5 overflow-hidden">
        <div
          className="img-container d-flex my-5"
          style={{ width: "216px", height: "300" }}
        >
          <img src="/Images/img1.jpg" width="100%" alt="egypt"></img>
          <img src="/Images/img2.jpg" width="100%" alt="egypt"></img>
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
        </>
  )
}
