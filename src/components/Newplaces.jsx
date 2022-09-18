import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import img1 from "../assets/images/img1.png";
import "./addedplace.css";
import { Row, Col} from "react-bootstrap";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 }
  ];
export default class NewPlaces extends Component {
  state = {
    items: [
      {id: 1, title: 'Tanishq',category:'Jewellery Shop', address:'Pune', mobileno:'9823345672', rating:'3.4'},
      {id: 2, title: 'Automobile',category:'automobile', address:'Pune', mobileno:'9823345672', rating:'3.4'},
      {id: 3, title: 'Shri Clinic',category:'Clinic', address:'Pune', mobileno:'9823345672', rating:'3.4'},
      {id: 4, title: 'Season Shop',category:'Business', address:'Pune', mobileno:'9823345672', rating:'3.4'},
      {id: 5, title: 'Shri Pharma',category:'Medical', address:'Pune', mobileno:'9823345672', rating:'3.4'},
      {id: 6, title: 'jewellery',category:'Bitla jewellery', address:'Pune', mobileno:'9823345672', rating:'3.4'},
    ]
  }

  render () {
    const { items } = this.state;
    return (
        <div>
        {/*slider */}
      <Carousel breakPoints={breakPoints} showArrows={false}>
        {items.map(item => <div key={item.id} className="post_u">
        
            <Row className='add_map' style={{borderBottom:"none"}}>
            <Col md="5" className="n_help">
            <img src={img1} alt="Needy Help"></img>
         </Col>
               <Col md="7" className='map_a mb-0' >
               <div className='n_place'>
               <h6>{item.title}</h6>
               <p>{item.address}</p>
               <p>{item.category}</p>
               <h4><i className='fa fa-star'></i> 3.5</h4>
               {/*<p>Jewellery Shop</p>*/}
              </div>
               </Col>             
            </Row>                      
            </div>)}
      </Carousel>
      </div>
    )
  }
}