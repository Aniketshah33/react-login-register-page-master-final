import React from "react";
// import { Link } from 'react-router-dom'
// import './../App.css'
import BackgroundImage from '../../assets/images/bg.jpg'

export default function Students() {

    return (
        <>
        <div className="text-center m-10-auto" style={ HeaderStyle }>

            <h5>Personal Details</h5>
            <form >
                <p>
                    <label>Name of the student:</label><br />
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Father's Name:</label><br />
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Mother's Name</label><br />
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Date of Birth:</label><br />
                    <input type="text" name="dateof_birth" required />
                </p>
                <p>
                    <label>Nationality:</label><br />
                    <input type="text" name="nationality" required />
                </p>
                <p>
                    <label>Citizenship No:</label><br />
                    <input type="number" name="citizenship" required />
                </p>
                <p>
                    <label>Contact Address:</label><br />
                    <input type="text" name="address" required />
                </p>
                <p>
                    <label>Email</label><br />
                    <input type="email" name="email" required />
                </p>
                <p>
                    <label>Conatct No:</label><br />
                    <input type="number" name="residence" required />
                </p>
                
                <p>
                    <button id="sub_btn" type="submit">Submit</button>
                </p>

                <p>
                    {/* <Link to="/user">Back to Homepage</Link> */}
                    </p>
            </form>

        </div>
        </>
    )

}
const HeaderStyle = {
    width: "100%",
    height: "165vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover", 
    opacity : 0.9
}