import emailjs from '@emailjs/browser'
import React from 'react';
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

export const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_maghoso', 'template_nqnb9wc', e.target, 'ZpFj7rdF1dREoAwsy')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return(
        <div>
            <div className="container">
            
            <form className="custom-form" onSubmit={sendEmail}>
            <h2 className="contact-header">New gloves on signup!</h2>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Your Email Address" name="email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Message"></input>
                        </div>
                    </div>
                    <h2 className="contact-header">Sign up in person</h2>
                </form>
            </div>
            <div className="videowrapper">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2975.405948550925!2d-87.98452404886017!3d41.77646417964532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e4faeae3f0be7%3A0xbb7704dfe9fca978!2sTeam%20Toro%20Janjira%20Muay%20Thai!5e0!3m2!1sen!2sus!4v1660433266193!5m2!1sen!2sus" 
                style={{ border: "0" }}
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                className="iframe">
              </iframe>
            </div>
        </div>
    )
}