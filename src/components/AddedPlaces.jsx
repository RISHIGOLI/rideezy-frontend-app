import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import img1 from "../assets/images/img1.png";
import "./addedplace.css";
import {Row, Col} from "react-bootstrap";
// import Carousel from 'react-elastic-carousel'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 576, itemsToShow: 2, itemsToScroll: 2},
    { width: 768, itemsToShow: 3 },
    { width: 992, itemsToShow: 4 },
    { width: 1200, itemsToShow: 4 }
  ];
export default class App extends Component {
  state = {
    items: [
      {id: 1, title: 'Tanishq',category:'Jewellery Shop', address:'Pune', mobileno:'9823345672', rating:'3.4'},
      {id: 2, title: 'Automobile',category:'automobile', address:'Gujrat', mobileno:'9823345672', rating:'3.4'},
      {id: 3, title: 'Shri Clinic',category:'Clinic', address:'Punjab', mobileno:'9823345672', rating:'3.4'},
      {id: 4, title: 'Season Shop',category:'Business', address:'Nashik', mobileno:'9823345672', rating:'3.4'},
      {id: 5, title: 'Shri Pharma',category:'Medical', address:'Hydrabad', mobileno:'9823345672', rating:'3.4'},
      {id: 5, title: 'Taj Hotel',category:'Medical', address:'Mumbai', mobileno:'9823345672', rating:'3.4'},
    ]
  }

  render () {
    const { items } = this.state;
    return (
        <div>
      <Carousel breakPoints={breakPoints} showArrows={false}>
        {items.map(item => <div key={item.id} className="box1">
          <a href="/SearchedPlace">
            <img src={img1} alt="img 1" />
            <h5>{item.title}</h5>
            <p>{item.address}</p>
            <p>{item.category}</p>
            <Row className="mobileno">
               <Col md="6">
                  <h6><i className="fa fa-phone"></i> {item.mobileno}</h6>
               </Col>
               <Col md="6" className='rating'>
               <p><i className='fa fa-star'></i> 3.5</p>
                    {/*<h6><span>{item.rating}</span></h6>*/}
               </Col>
            </Row>
            </a>
            </div>)}
      </Carousel>
      </div>
    )
  }
}