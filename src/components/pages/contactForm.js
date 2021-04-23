import React from 'react'
import '../../App.css'
import emailjs from "emailjs-com";
import '../contactForm.css'


export default function emailUs() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_q6wudzd', e.target, 'user_pQ3hzJzPMmsPStofd6jfM')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }



    return (
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
    );
}