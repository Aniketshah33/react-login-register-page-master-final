import React from 'react'
import { Link } from 'react-router-dom'
import BackgroundImage from '../../assets/images/bg.jpg'

export default function HomePage() {
    return (
        <div className="text-center" style={ HeaderStyle }>
            <h1 className="main-title home-page-title">welcome to our app</h1>
            <Link to="/about">
                <button className="primary-button">About</button>
            </Link>
            <Link to="/">
                <button className="primary-button">Log out</button>
            </Link>
            <Link to="/student">
                <button className="primary-button">Student</button>
            </Link>
        </div>
    )
}
const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover", 
    opacity : 0.9
}