
import React, { Component } from 'react';
//import Carousel from 'react-elastic-carousel';
//import img1 from "../assets/images/img1.png";
//import "../../addedplace.css";
import {Container, Row, Col, Button, Tabs, Tab} from "react-bootstrap";
import Newplaces from "./Newplaces";

export default class Post extends Component {
  render () { 
    return (
        <div>
        <Tabs
        defaultActiveKey="home"
        transition={false}
        id="noanim-tab-example"
        className="mb-3 category_title"
        >
        <Tab eventKey="home" title="Post">
            <div className='all_place'>
            <h6>NEWLY ADDED PLACES</h6>
            <Newplaces />
                </div>
                <div className='all_place'>
                <h6>MOST POPULAR IN CITY</h6>
            <Newplaces />
            </div>
            <div className='all_place'>
                <h6>RECOMMANDED PLACES</h6>
            <Newplaces />
            </div>
        </Tab>
       
        <Tab eventKey="categoriwise" title="Categoriwise">
            b
        </Tab>
       
        </Tabs>
      </div>
    )
  }
}