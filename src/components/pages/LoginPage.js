import React from 'react'
import { Link } from 'react-router-dom'


import '../../App.css'
import BackgroundImage from '../../assets/images/bg.jpg'

export default function SignInPage() {


    
    
    return (
        <div className="text-center m-5-auto" id="main_login" style={ HeaderStyle }>
            <h2 id="reg_header">Sign in to Us</h2>
            <form action="/home">
            
                <p>
                    <label>Username or email address</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" name="password" required />
                </p>
                <p>
                <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
              
        
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}
const HeaderStyle = {
    width: "100%",
    height: "120vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover", 
    opacity : 0.9
}

