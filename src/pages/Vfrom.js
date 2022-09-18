import React from 'react'
// import { useState } from 'react'
import { Row, Col, Container, Card, CardBody, CardHeader, Form, FormGroup, Label, Input, Button, } from "reactstrap"
import Base from '../components/Base'
import god from "../assets/images/god.pdf";
// import img1 from "../assets/images/img1.png";
import { loadAllCategories } from '../services/Category-service';
import { useEffect } from 'react';
import { useState } from 'react';
import { createPost as doCreatePost, uploadPostImage } from '../services/Post-service';
import { getCurrentUserDetail } from '../auth';
// import { toast } from 'react-toastify';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Vfrom = () => {
    const [categories, setCategories] = useState([]);
    const[user,setUser]=useState(undefined)

    const [post, setPost] = useState({
        model: '',
        number: '',
        categoryId:'',
        fuelType: '',  
        seatingCapacity: '',
        luggageCapacity: '',
        transmission: '',
        airCondition:'',
        mileage:'',
        city:'',
        vehicleId:""
      
})

const [image,setImage]=useState(null)

    useEffect(() => {
        setUser(getCurrentUserDetail()) 
        loadAllCategories().then((data) => {
            console.log(data);
            setCategories(data)
        }).catch(error => {
            console.log(error);

        })
    }, [])

// field change function

const fieldChanged=(event)=>{
    // console.log(event);
    setPost({...post,[event.target.name]:event.target.value})
    // console.log(event.target.value);
    

    
}

const createPost=(event)=>{

    event.preventDefault();
    // console.log(post);
    if(post.model.trim()===''){
      
       toast.error("post model is required !!",{
        position:"top-center"});
        return;
    }
    if(post.number.trim()===''){
        toast.error("post number is required !!",{
            position:"top-center"});
        return;
    }
    if(post.fuelType.trim()===''){
        toast.error("post fuelType is required !!",{
            position:"top-center"});
        return;
    }
    // if(post.category.trim()===''){
    //     alert("post category is required !!")
    //     return;
    // }

    //submit the form on server 
// post['userId']=user.id
post['userId']=user.id
    doCreatePost(post).then(data => {
console.log(post);

        uploadPostImage(image,data.vehicleId).then(data=>{
            toast.success("Image Upload !!",{
                position:"top-center"});
        }).catch(error=>{
            toast.error("error in image upload!!",{
                position:"top-center"});
            console.log(error);
            
        })
        toast.success("post create !!",{
            position:"top-center"});
        // console.log(post);
        setPost({
            model: '',
            number: '',
            categoryId:'',
            fuelType: '',  
            seatingCapacity: '',
            luggageCapacity: '',
            transmission: '',
            airCondition:'',
            mileage:'',
            city:'',
            vehicleId:""
        })
        
    }).catch((error)=>{
        toast.error("Post not create due to some error",{
            position:"top-center"});
        // console.log(error);
    })   
    }

    // handle File change event
    const handleFileChange=(event)=>{
        console.log(event.target.files[0]);
        setImage(event.target.files[0])
        
    }

    return (
        <div>
            <Base>

                <Container>
                    <Row className='mt-4'>
                        <Col sm={{ size: 12 }}>

                                   { JSON.stringify(post)}
                            {/* <Card color='dark' inverse> inverse lil tar font color white hoto karan bg dark aahe */}
                            <Card className='changecolor '> {/*inverse lil tar font color white hoto karan bg dark aahe*/}
                                <CardHeader className='bgchange'>
                                    <h3 >Fill information to Registration</h3>
                                </CardHeader>
                                <CardBody>
                                    <Form onSubmit={createPost}>
                                        <Row>
                                            <Col sm={{size:6}}>
                                                <FormGroup>
                                                    <Label for="vmodel">Vehicle Model</Label>
                                                    <Input type="text" placeholder="Vehicle Model Name" id='vmodel' name="model" onChange={fieldChanged}/>
                                                </FormGroup>
                                            </Col>
                                            <Col sm={{size:6}}>
                                                <FormGroup>
                                                    <Label for="vnumber">Vehicle Number</Label>
                                                    <Input type="text" placeholder="Vehicle Number" id='vnumber' name='number' onChange={fieldChanged}/>
                                                </FormGroup>
                                            </Col>

                                        </Row>

                                        <Row>
                                            <Col sm={{size:6}}>
                                                <FormGroup>
                                                    <Label for="vmodel">Vehicle Category: </Label>
                                                    <Input type='select' id="vmodel" name='categoryId' onChange={fieldChanged} defaultValue={0}>

                                                        <option disabled value={0}>--Select Category--</option>
                                                        {/* <option value="1">4 wheeler</option> */}
                                                        {/* {
                                                            categories.map((category)=>(
                                                                <option  value={category.categoryId} key={category.categoryId}>
                                                                    {category.categoryTitle}
                                                                </option>
                                                            ))
                                                        } */}

                                                        {/* <select name="languages" id="vaircon" className='ms-2 p-2 rounded'> */}
                                                        {/* <option desabled value={0}>--Select Category--</option> */}

                                                        <option value="1">JavaScript</option>
                                                        <option value="2">PHP</option>
                                                        <option value="3">Java</option>
                                                        <option value="4">Golang</option>
                                                        <option value="5">Python</option>
                                                        <option value="6">C#</option>
                                                        <option value="7">C++</option>
                                                        <option value="8">Erlang</option>

                                                    </Input>
                                                </FormGroup>
                                            </Col>
                                            <Col sm={{size:6}}>
                                                {/* <FormGroup>
                                                    <Label for="vfule">Vehicle Fule Type :</Label>
                                                    <Input type='select' id="vfule" name='fueltype' onChange={fieldChanged} defaultValue={0}>

                                                        <select name="languages" id="vaircon" className='ms-2 p-2 rounded'>
                                                        <option disabled value={0}>--Select Fule Type--</option>
                                                        <option value="petrol">petrol</option>
                                                        <option value="desile">desile</option>
                                                       
                                                    </Input>
                                                </FormGroup> */}
                                                 <FormGroup>
                                                    <Label for="fuel">Vehicle Fuel</Label>
                                                    <Input type="text" placeholder="Vehicle Model Name" id='fuel' name="fuelType" onChange={fieldChanged}/>
                                                </FormGroup>
                                            </Col>

                                        </Row>

                                        <Row>
                                            <Col sm={{size:6}}>
                                                <FormGroup>
                                                    <Label for="vmodel">Vehicle Seating Capacity</Label>
                                                    <Input type="number" placeholder="How much of seats" id='vmodel'name='seatingCapacity' onChange={fieldChanged} />
                                                </FormGroup>
                                            </Col>
                                            <Col sm={{size:6}}>
                                                <FormGroup>
                                                    <Label for="vlugguge">Vehicle Lugguge</Label>
                                                    <Input type="number" placeholder="How much of lugguge" id='vlugguge' name='luggageCapacity' onChange={fieldChanged}/>
                                                </FormGroup>
                                            </Col>

                                        </Row>

                                        <Row>
                                            <Col sm={{size:6}}>
                                                <FormGroup>
                                                    <Label for="vtransmission">Vehicle Transmission: </Label>
                                                    <Input type='select' id="vtransmission" name='transmission' onChange={fieldChanged} defaultValue={0}>

                                                        {/* <select name="languages" id="vaircon" className='ms-2 p-2 rounded'> */}
                                                        <option disabled value={0}>--Select Transmission--</option>

                                                        <option value="javascript">JavaScript</option>
                                                        <option value="php">PHP</option>
                                                        <option value="java">Java</option>
                                                        <option value="golang">Golang</option>
                                                        <option value="python">Python</option>
                                                        <option value="c#">C#</option>
                                                        <option value="C++">C++</option>
                                                        <option value="erlang">Erlang</option>
                                                    </Input>
                                                </FormGroup>
                                            </Col>
                                            <Col sm={{size:6}}>
                                                <FormGroup>
                                                    <Label for="vaircon">Vehicle Air Condition :</Label>
                                                    <Input type='select' id="vaircon" name='airCondition' onChange={fieldChanged} defaultValue={0}>

                                                        {/* <select name="languages" id="vaircon" className='ms-2 p-2 rounded'> */}
                                                        <option disabled value={0}>--Select Air Condition--</option>

                                                        <option value="javascript">JavaScript</option>
                                                        <option value="php">PHP</option>
                                                        <option value="java">Java</option>
                                                        <option value="golang">Golang</option>
                                                        <option value="python">Python</option>
                                                        <option value="c#">C#</option>
                                                        <option value="C++">C++</option>
                                                        <option value="erlang">Erlang</option>
                                                    </Input>
                                                </FormGroup>
                                            </Col>

                                        </Row>

                                        <Row>
                                            <Col sm={{size:6}}>
                                                <FormGroup>
                                                    <Label for="vmodel">Vehicle Milege</Label>
                                                    <Input type="text" placeholder="Vehicle Milege" id='vmodel' name='mileage' onChange={fieldChanged} />
                                                </FormGroup>
                                            </Col>
                                            <Col sm={{size:6}}>
                                                <FormGroup>
                                                    <Label for="vlugguge">Vehicle City</Label>
                                                    <Input type='select' id="vlugguge" name='city' onChange={fieldChanged} defaultValue={0}>

                                                        {/* <select name="languages" id="vaircon" className='ms-2 p-2 rounded'> */}
                                                        <option disabled value={0}>--Select City--</option>

                                                        <option value="javascript">JavaScript</option>
                                                        <option value="php">PHP</option>
                                                        <option value="java">Java</option>
                                                        <option value="golang">Golang</option>
                                                        <option value="python">Python</option>
                                                        <option value="c#">C#</option>
                                                        <option value="C++">C++</option>
                                                        <option value="erlang">Erlang</option>
                                                    </Input>

                                                </FormGroup>


                                            </Col>

                                        </Row>
                                        {/* File upload Field */}
                                        <Row>
                                            <Col sm={{size:6}}>
                                                <FormGroup>
                                                    <Label for="img">Vehicle Image</Label>
                                                    <Input type="file" id='img' onChange={handleFileChange} name="vehicleId" />
                                                </FormGroup>
                                            </Col>
                                            <Col sm={{size:6}}>
                                                <FormGroup>
                                                    <Label for="rc">Vehicle RC Image</Label>
                                                    <Input type="file" id='rc' />
                                                </FormGroup>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col sm={{size:6}}>
                                                <FormGroup>
                                                    <Label for="puc">Vehicle PUC</Label>
                                                    <Input type="file" id='puc' />
                                                </FormGroup>
                                            </Col>
                                            <Col sm={{size:6}}>
                                                <FormGroup>
                                                    <Label for="insurance">Vehicle Insurance Image</Label>
                                                    <Input type="file" id='insurance' />
                                                </FormGroup>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col sm={{size:6}}>
                                                <FormGroup>
                                                    <Label for="vmodel">Vehicle Agreement Upload</Label>
                                                    <Input type="file" placeholder="How much of seats" id='vmodel' />
                                                </FormGroup>
                                            </Col>
                                            <Col sm={{size:6}}>
                                                <FormGroup>
                                                    <Label for="agreement">Vehicle Agreement Image Download</Label><br />
                                                    {/* <iframe src={god} width="150px" height="50px">
                                                    </iframe> */}

                                                    {/* <a href={god} download>
                                                    <embed src={god} />
                                                    </a> */}
                                                    <a href={god}>Download Agreement Page</a>
                                                </FormGroup>
                                            </Col>
                                        </Row>


                                        <Container className='text-center'>
                                            <Button outline color='dark' onClick={createPost}>Create Post</Button>
                                            <Button color='secondary' type='reset' className='ms-2'>Reset Content</Button>
                                        </Container>
                                        <ToastContainer/>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>

            </Base>
        </div>
    )
}

export default Vfrom;
