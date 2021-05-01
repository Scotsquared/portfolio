import React from 'react'
import '../../App.css'
import emailjs from "emailjs-com";
import '../Widgets/contactForm.css'
import { init } from 'emailjs-com';


init("user_pQ3hzJzPMmsPStofd6jfM");


export default function emailUs() {

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_2j67zd3', 'template_q6wudzd', e.target, 'user_pQ3hzJzPMmsPStofd6jfM')
            .then((result) => {
                console.log("success", result.status)
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }



    return (
        <>
            <div className="form-background">
                <div className="container">
                    <form onsSubmit={sendEmail}>
                        <div className="form-boxs">
                            <div className="form-name">
                                <input type="text" className="form-control" placeholder="Name" name="name" />
                            </div>
                            <div className="form-emal">
                                <input type="email" className="form-control" placeholder="Email Address" name="email" />
                            </div>
                            <div className="form-subject">
                                <input type="text" className="form-control" placeholder="Subject" name="Subject" />
                            </div>
                            <div className="form-message">
                                <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                            </div>
                            <div className="form-button">
                                <input type="submit" className="btn btn-info" value="Send Message"></input>
                            </div>
                        </div>
                    </form>
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