import React from 'react';
import '../App.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import Carditems from './Carditems'
import Cards from './Cards';
import './Body.css'
function Body() {
    return (
        <>
            <div className='Body-container'>
                <video src="/video/computerman.mp4" autoPlay loop muted />
                <video className='weather-app' src="/video/weather-app.mp4" autoPlay loop muted></video>
                <a classname='hello' target="_blank" href="https://github.com/Scotsquared?tab=repositories">
                    My Work
                </a>
            </div>
            <Cards />
        </>

    )
}

export default Body
