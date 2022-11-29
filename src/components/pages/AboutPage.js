import React from "react";
import { Link } from 'react-router-dom'

import '../../App.css'
import BackgroundImage from '../../assets/images/bg.jpg'

export default function AboutPage () {
    return (
        <div className="container student-profile">
            <from method="">
                <div className="row">
                    <div className="col-md-5">

                    </div>

                    <div className="col-md-6">
                        <div className="profile-head">
                            <h5>Buddha Lama</h5>
                            <h6>web developer</h6>
                            <p className="profile-rating mt-3 mb-5">Rankings: <span> 1/10</span></p>
                            

                            {/* <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item">
                                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab">Active</a>

                                </li>

                                <li className="nav-item">
                                <a className="nav-link active" id="profile-tab" data-toggle="tab" href="#profile" role="tab">Timeline</a>
                                </li>


                            </ul> */}
                        </div>
                    </div>

                    <div className="col-md-10">
                        <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile" />
                    </div>
                </div>

                {/* <div className="row">

                    <div className="col-md-8">
                        <div className="profile-work">
                            <p> WORK LINK</p>

                        </div>
                    </div>
                </div> */}
            </from>
        </div>

    )
}