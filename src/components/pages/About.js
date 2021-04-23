import React from 'react'
import '../../App.css'
import Carditems from '../Carditems'
import '../Cards.css'
import Cards from '../Cards'
import '../Button.css';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import '../about.css'
import '../Footer.css'

function About() {
    return (
        <>
            <h1 className='About'>About me</h1>
            <div className='cards-container'>
                <div className='cards-wrapper'>
                    <ul className='cards-items'>
                        <Carditems
                            src="images/me scot.jpg"
                            text='I specialize in code work, involving CSS,React,JS,JSON, and HTML. I keep high standards for what I do and I am always learning, and open for critisim.
                            My work ethic is unmatched because I will never stop working on a project.  '
                            label='Me'
                            path='/'
                        />
                        <Carditems
                            src="images/simple .png"
                            text={<a target="_blank" href={"https://github.com/Scotsquared"}>Although I have been coding for only a short amount of time I have learned quickly and effectivly to make quality apps and functional programs, to learn more about my experince feel free to check out my Github
                                <i class="fab fa-github fa-lg"></i>
                            </a>}
                            label='Experince '
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
        </>
    );
}
export default About