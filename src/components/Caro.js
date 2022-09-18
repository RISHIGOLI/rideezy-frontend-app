import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Carousel from "react-elastic-carousel";
// import img1 from "../assets/images/img1.png";
import car from "../assets/images/car.jpg";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 3 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

const Caro = () => {
    const [news, setNews] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=4a9fe6d755b04c429b306f712f19ca58")
            .then((response) => {
                setNews(response.data.articles);
                setLoading(true)
            }).catch((error) => {
                setError(error.message);
                setLoading(true);

            })
    }, [])

    if(error){
        return <div>Error:{error.message}</div>;
    }else if(!loading){
        return <div>Loading....</div>;
    }else{

    

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                <Carousel  breakPoints={breakPoints} showArrows={true}>
                    {
                        news.map((item, id) => {
                            return (
                               
                                <div className="col-12" key={item.id}>
                                <div className="card text-center Hover" style={{width: "13rem",height:"22rem"}}>
                                        <img src={car} style={{width: "7rem",height:"16rem"}} className="card-img-top ms-5 mt-4" alt="..." showArrows={true}/>
                                        <div className="card-body">
                                            <h5 className="card-title">Hennessey  <span><h6 className='text-danger'>Venom GT</h6></span></h5>
                                            <p className="card-text">Vehicle transmission</p>
                                            <p className="card-text">Vehicle Fuel</p>
                                            <p className="card-text">vehicle no.of seats</p>
                                            <p className="card-text text-success mar">   3.5</p>
                                   
                                            <a href="/show" className="btn btn-primary mb-2 mar1 "> Get More </a>
                                        </div>
                                    </div>
                                </div>
                                    
                               
                            )
                        })
                    }
                    </Carousel>
                </div>
            </div>
        </>
    )
                }
}
export default Caro;