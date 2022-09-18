
import React, { Component } from 'react';
//import Carousel from 'react-elastic-carousel';
//import img1 from "../assets/images/img1.png";
//import "../../addedplace.css";
import {Container, Row, Col, Button, Tabs, Tab} from "react-bootstrap";
import Newplaces from "./Newplaces";

export default class HelpingHandPost extends Component {
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
        <Tab eventKey="profile" title="My Post">
            a
        </Tab>
        <Tab eventKey="helps" title="My Helps">
            b
        </Tab>
        <Tab eventKey="thoughts" title="24 Thoughts">
            c
        </Tab>
        <Tab eventKey="contact" title="Results">
            d
        </Tab>
        </Tabs>
      </div>    
    )
  }
}