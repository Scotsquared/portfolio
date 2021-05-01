import React from 'react'
import '../../App.css'
import Carditems from '../Widgets/Carditems'
import '../Widgets/Cards.css'
import Cards from '../Widgets/Cards'
import '../Widgets/Button.css';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import '../Widgets/about.css'
import '../footer/Footer.css'

function About() {
    return (
        <>
            <h1 className='About'>About me</h1>
            <div className='cards-container'>
                <div className='cards-wrapper'>
                    <ul className='cards-items'>
                        <Carditems
                            src="images/me scot.jpg"
                            text='I specialize in app devlopment, involving CSS,React,JS,JSON, and HTML. I keep high standards for what I do. I am always learning, and open to critisim.
                            My work ethic is unmatched because I will never stop working on a project! '
                            label='Me'
                        />
                        <Carditems
                            src="images/simple .png"
                            text={<a target="_blank" href={"https://github.com/Scotsquared"}>Although I have been coding for only a short amount of time, I have learned quickly and effectivly to make quality apps and functional programs. To learn more about my experince feel free to check out my Github!
                                <i class="fab fa-github fa-lg"></i>
                            </a>}
                            label='Experience '
                        />
                    </ul>
                </div>
            </div>
            <div className='footer-container'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <div class='footer-link-items'>
                            <div class='footer-link-items'>
                                <h2>Social Media</h2>
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
        </>
    );
}
export default About