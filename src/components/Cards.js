import React from 'react'
import Carditems from './Carditems'
import './Cards.css'
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom'
import './Footer.css'
import GitHubIcon from '@material-ui/icons/GitHub';
function Cards() {
    return (
        <div className='cards'>
            <h1>Welcome to my portfolio </h1>
            <div className='cards-container'>
                <div className='cards-wrapper'>
                    <ul className='cards-items'>
                        <Carditems
                            src="images/funny.png"
                            text='Hello, welcome to my portfolio, I started coding early 2019 and have been ever since '
                            label='If you like to learn more about me click here'
                            path='/About-me'
                        />
                        <Carditems
                            src="images/simple .png"
                            text='Languages I work with, and know, React,JS,CSS,HTML click for more info on what I do '
                            label='Projects I Have Made '
                            path='/About-me'
                        />
                    </ul>
                </div>
            </div>
            <div>
            </div>
            <div className='footer-container'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <div class='footer-link-items'>
                            <div class='footer-link-items'>
                                <h2>Social Media</h2>

                                <a
                                    target="_blank"
                                    href={"https://github.com/Scotsquared"}>
                                    Github
                                </a>
                                <a
                                    target="_blank"
                                    href={"https://www.instagram.com/scot__dot/"}>
                                    Instagram
                                </a>
                                <a
                                    target="_blank"
                                    href={"https://www.facebook.com/scotland.bullard/"}>
                                    Facebook
                                </a>
                                <a to='/'>
                                    <a
                                        target="_blank"
                                        href={"https://twitter.com/Scot__dot"}>
                                        Twitter
                                    </a>
                                </a>
                            </div>
                        </div>
                        <div class='social-media-wrap'>
                            <div class='footer-logo'>
                                <a to='/' className="social-logo">
                                    <a target="_blank" href={"https://github.com/Scotsquared"}>
                                        <i class="fab fa-github"></i>
                                    </a>
                                </a>
                                <a to='/' className="social-logo">
                                    <a target="_blank" href={"https://twitter.com/Scot__dot"}>
                                        <i class='fab fa-twitter' />
                                    </a>
                                </a>
                                <a to='/' className="social-logo" target="_blank" href={"https://www.facebook.com/scotland.bullard/"}>
                                    <i class='fab fa-facebook-f' />
                                </a>
                                <a className="social-logo" target="_blank" href={"https://www.instagram.com/scot__dot/"}>
                                    <i class='fab fa-instagram' />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Cards
