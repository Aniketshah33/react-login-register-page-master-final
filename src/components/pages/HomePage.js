import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
    return (
        <div className="text-center">
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
