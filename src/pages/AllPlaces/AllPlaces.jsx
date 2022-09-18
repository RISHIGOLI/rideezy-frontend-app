
import React from 'react'



import "./allplaces.css";
import {Container, Row, Col, Button, Form, InputGroup, FormControl, Tab, Nav, Tabs} from "react-bootstrap";

import HelpingHandPost from "../../components/HelpingHandPost.jsx";
import Post from "../../components/Post.jsx";
import Caro from '../../components/Caro';
import Paginate from '../../components/Paginate';
import Paginate2wheel from '../../components/Paginate2wheel';
import Paginate3wheel from '../../components/Paginate3wheel';
import PaginateAv from '../../components/paginateAv';

// import Newplaces from "../../components/Newplaces";


export default function AllPlaces() {
  
  return (
  <div>
 
    <div>
    {/* <Header /> */}
       <section>
          <Container>
             <div className='cetegory_top'>
             <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                 <Row>
                 <Col md="3 mt-3 ">
                     <div className='cetegory_left'>
  {/*sidemenu place*/}
                         <Nav variant="pills" className="flex-column">
                         <Nav.Item>
                          <Nav.Link eventKey="first"><i className='fa fa-map-marker'></i> Places For You</Nav.Link>
                         </Nav.Item>
                         <Nav.Item>
                         <Nav.Link eventKey="second"><i className='fa fa-tags'></i> Posts</Nav.Link>
                         </Nav.Item>
                         <Nav.Link eventKey="third"><i className='fa fa-map-marker'></i> Helping Hands</Nav.Link>
                         
                     </Nav> 
                     
                     </div>
                     
                 </Col>
                 <Col md="9">                        
                   
                    <Tab.Content>
                    <Tab.Pane eventKey="first">
                    <Row>
                    <div className='search_place mt-0'>                                                          
                         <Row>
                            <Col md="8">
                            
                                <Row>
                                 <Form>
                                {/*Search bar*/}
                                     <InputGroup className="mb-3 mt-3">
                                         <InputGroup.Text id="basic-addon1"><i className='fa fa-search'></i></InputGroup.Text>
                                         <FormControl
                                         className='searchbar'
                                         placeholder="Serach"
                                         aria-label="Username"
                                         aria-describedby="basic-addon1"
                                         />
                                     </InputGroup>
                                 </Form>
                                </Row>
                            </Col>
                            <Col md="4 mt-3">
                            {/*Add places*/}
                                 <a href="/user/vfrom" className="add_place_div1"><i className="fa fa-plus"></i> Add Place</a>
                            </Col>
                         </Row>
                         
                    </div>
                    
                    </Row>
                    <Tabs
                         defaultActiveKey="home"
                         transition={false}
                         id="noanim-tab-example"
                         className="mb-3 category_title">

                         {/*first show places*/}

                         <Tab eventKey="home" title="Places">
              
                             <div className='all_place'>
                        {/*link newplaces*/}
                             <h6>NEWLY ADDED PLACES</h6>
                             <Caro />
                                 </div>
                            {/*link newplaces*/}
                                 <div className='all_place'>
                                 <h6>MOST POPULAR IN CITY</h6>
                             <Caro />
                             </div>
                            {/*link newplaces*/}
                             <div className='all_place'>
                                 <h6>RECOMMANDED PLACES</h6>
                             <Caro />
                             </div>

                         </Tab>
                         {/*offers*/}
                         <Tab eventKey="profile" title="4 wheeler">
                             <Paginate/>
                         </Tab>
                         {/*categories*/}
                         <Tab eventKey="contact" title="2 wheeler">
                         <Paginate2wheel/>
                             
                         </Tab>
                         <Tab eventKey="2 wheeler" title="3 wheeler">
                         <Paginate3wheel/>
                         
                     </Tab>
                     <Tab eventKey="3 wheeler" title="AV load wheeler">
                     <PaginateAv/>
                     
                 </Tab>
                         </Tabs>
                       
                    </Tab.Pane>


                    <Tab.Pane eventKey="second">
                    <Row>
                    <div className='search_place mt-0'>                                                          
                         <Row>
                            <Col md="8">
                            
                                <Row>
                                 <Form>
                                 {/*post search bar*/}
                                
                                     <InputGroup className="mb-3 mt-3 ">
                                         <InputGroup.Text id="basic-addon1"><i className='fa fa-search'></i></InputGroup.Text>
                                         <FormControl
                                         className='searchbar'
                                         placeholder="Serach"
                                         aria-label="Username"
                                         aria-describedby="basic-addon1"
                                         />
                                     </InputGroup>
                                 </Form>
                                </Row>
                            </Col>
                            <Col md="4 mt-3">
                             {/*Add post*/}
                                 <Button className="add_place_div"><i className="fa fa-plus"></i> Add Post</Button>
                            </Col>
                         </Row>
                         
                    </div>
                    
                    </Row>
                    <Post />

                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                    <div className='search_place mt-0'>                                                          
                         <Row>
                            <Col md="8">
                            
                                <Row>
                                 <Form>
                                {/*Helping Hand post search bar*/}
                                     <InputGroup className="mb-3 mt-3">
                                         <InputGroup.Text id="basic-addon1"><i className='fa fa-search'></i></InputGroup.Text>
                                         <FormControl
                                         className='searchbar'
                                         placeholder="Serach"
                                         aria-label="Username"
                                         aria-describedby="basic-addon1"
                                         />
                                     </InputGroup>
                                 </Form>
                                </Row>
                            </Col>
                            <Col md="4 mt-3">
                             {/*Add post*/}
                                 <Button className="add_place_div"><i className="fa fa-plus"></i> Add Post</Button>
                            </Col>
                         </Row>
                         
                    </div>
                    
                    </Row>
                       <HelpingHandPost />
                    </Tab.Pane>
                  </Tab.Content>
                 </Col>
                 </Row>
             </Tab.Container>
             </div>
          </Container>
       </section>
   
      </div>
      </div>
  )
}

