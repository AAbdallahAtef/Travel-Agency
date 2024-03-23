import React, { useContext, useEffect, useState } from 'react';
import { destinationsContext } from '../context/DistinationsContextProvider';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
const Details = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])
    const { getDestinatinById } = useContext(destinationsContext);
    const { id } = useParams();
    const [selectedDestination, setSelectedDestination] = useState({});

    useEffect(() => {

        const destination = getDestinatinById(id);
        setSelectedDestination(destination);

    }, [getDestinatinById, id]);
    console.log(selectedDestination)
    // if (!selectedDestination) {
    //     return <div>Loading...</div>;
    //   }
    return (
        <div>
               <h1 style={{fontWeight:"bold",marginTop:"150px", textAlign:"center"}}>Discription of {selectedDestination.name}</h1>
            <Card style={{ width: '30rem', margin: "auto", marginTop: "70px", marginBottom: "70px" }} >
                <Card.Body style={{textAlign:"center"}}>
                    <Card.Img variant="top" src={selectedDestination.image_url} style={{height:"400px"}} />

                    <Card.Title className='cards mt-4'>{selectedDestination.name}</Card.Title><br></br>
                    <Card.Subtitle className='mb-4 text-muted'>{selectedDestination.description}</Card.Subtitle>

                    <Card.Title className='mt-2'>Activities</Card.Title><br></br>
                    {selectedDestination.activities && selectedDestination.activities.length > 0 ? (
                        selectedDestination.activities.map((activity, index) => (

                            <Card.Subtitle key={index} className="mb-2 text-muted">
                                {activity.Name} , {activity.Cost} , {activity.Way_to_go}<br></br><br></br><br></br>
                            </Card.Subtitle>
                        ))
                    ) : (
                        <Card.Subtitle className="mb-2 text-muted">No activities available</Card.Subtitle>
                    )}
                </Card.Body>
            </Card>
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
        </div>
    );
}

export default Details;
