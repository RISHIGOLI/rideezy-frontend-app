import React from 'react'
import './Show.css'
// import FontAwesome from 'react-fontawesome'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import faStyles from 'font-awesome/css/font-awesome.css'
// import car from './car.png'
import car from "../assets/images/car.png";
import Base from '../components/Base';

const Show = () => {
    return (
        <Base>
        <div className="container-fluid">
            <div className="row mt-2 m-1">

                <div className="col-md-9">
                    <div className="row">
                        <div className="col-sm-7 border border-2">
                            <p className="subtitle fancy"><span>Hyundai Santro AT</span></p>
                            <div className="card-body">
                                <div className="img">
                                    <img src={car} alt="" style={{ width: "500px", height: "150px" }} />

                                </div>
                                <h5 className="card-title">Hennessey  <span><h6 className='text-danger'>Venom GT</h6></span></h5>
                                <ul>

                                    <li className="card-text marg">vehicle Model</li>
                                    <li className="card-text marg">Vehicle Fuel</li>
                                    <li className="card-text marg">Vehicle transmission</li>
                                    <li className="card-text marg">vehicle </li>
                                    <li className="card-text marg">vehicle lugguge</li>
                                    <li className="card-text marg">vehicle Milege</li>
                                    <li className="card-text marg">vehicle City</li>
                                    <p className="card-text  space  me-5"><i className='fa fa-star '></i>3.5</p>
                                </ul>

                            </div>
                        </div>
                        <div className="col-sm-5 border border-2 ">
                            <p className='subtitle fancy'><span>Owner Details</span></p>
                            <h4>Address:<span className='font'>Solapur</span></h4>
                            <h4>Owner:<span className='font'>Rushi Goli</span></h4>
                            <h4>Contact:<span className='font'>9638527410</span></h4>
                        </div>
                    </div>

                    <div className="row bottom-right  ">
                        <div className="col-sm-12 pe-0 ps-0">
                            <table className="table table-bordered ">
                                <tbody>
                                    <tr >
                                        <td className='col-md-5'>Change in Princing Plan:</td>
                                        <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                            Repellendus itaque ipsam, commodi temporibus dignissimos magni?</td>
                                    </tr>
                                    <tr >
                                        <td className='col-md-5'>FUEL:</td>
                                        <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                            Lorem ipsum dolor sit amet. Repellendus itaque ipsam, commodi temporibus dignissimos magni? </td>
                                    </tr>
                                    <tr >
                                        <td className='col-md-5'>Tolls Parking Inter-State-Taxes:</td>
                                        <td>Lorem ipsum dolor,</td>
                                    </tr>
                                    <tr >
                                        <td className='col-md-5'>ID Verification:</td>
                                        <td>Lorem ipsum dolor, sit amet Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Nihil omnis cumque architecto quod reprehenderit molestias! consectetur adipisicing elit.
                                            Repellendus itaque ipsam, commodi temporibus dignissimos magni?</td>
                                    </tr>
                                    <tr >
                                        <td className='col-md-5'>Pre-Handover Inspection:</td>
                                        <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                        </td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 border border-2 mb-3">
                    <h1 >hello</h1>
                </div>
            </div>
        </div>
        </Base>
    )
}

export default Show;
