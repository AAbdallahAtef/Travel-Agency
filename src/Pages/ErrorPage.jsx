import React, { useEffect } from 'react';

const ErrorPage = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])
    return (
        <div style={{textAlign:"center", marginBottom:"600px"}}>
            <h1 style={{color:"brown", marginTop:"70px" }}>ERROR 404!!!!!!!!!!!!</h1>
            {/* <img src='Images/error.jpg'  width={"500px"} height={"400px"} style={{ marginTop:"50px"} }></img> */}
        </div>
    );
}

export default ErrorPage;
