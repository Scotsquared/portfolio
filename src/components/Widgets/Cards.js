import React from 'react'
import Carditems from './Carditems'
import './Cards.css'
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom'
import '../footer/Footer.css'
import GitHubIcon from '@material-ui/icons/GitHub';
function Cards() {
    return (
        <div className='cards'>
            <h1>Welcome to my portfolio </h1>
            <div className='cards-container'>
                <div className='cards-wrapper'>
                    <ul className='cards-items'>
                        <Carditems
                            src="images/scot illustration2.jpg"
                            text='Hello! Welcome to my portfolio, I started coding early 2019-2021 and have been ever since. '
                            label='If you would like to learn more about me click here.'
                            path='/About-me'
                        />
                        <Carditems
                            src="images/simple .png"
                            text=' The languages I work with are, React,JS,CSS,HTML, and JSON click for more info on what I do! '
                            label='Projects I Have Made. '
                            path='/About-me'
                        />
                    </ul>
                </div>
            </div>
            <div>
            </div>

        </div>
    )
}

export default Cards
