import React from 'react'
import '../../App.css'
import react from React



function Footer() {
    return (
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
    );
}
export default Footer;