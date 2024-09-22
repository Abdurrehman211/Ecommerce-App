import React, { useState } from "react";
import './Contact.css';

function Contact() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/myzgnerz", {
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                var a= document.getElementById('message') ;
                var b = document.getElementById('contact-form');
                if (a.style.display==='none') {
                    a.style.display='block';
                    b.style.display='none';
                }else{
                    a.style.display='none';
                    b.style.display='block';
                }
                form.reset();
            } else {
                alert('Failed to send email.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
const Moveback = ()=>{
    var a= document.getElementById('message') ;
                var b = document.getElementById('contact-form');
                if (b.style.display==='none') {
                    b.style.display='block';
                    a.style.display='none';
                }else{
                    b.style.display='none';
                    a.style.display='block';
                }
}
    return (
        <>
            <section id="Contact">
                <div className="container">
                    <div className="row" style={{ alignItems: 'flex-end' }}>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <h1 className="Con-text text-uppercase">Contact Us</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section id="contact">
                <div className="contact-box">
                    <div className="contact-links">
                        <h2>CONTACT</h2>
                        <div className="links">
                            <div className="link">
                                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <img src="https://i.postimg.cc/m2mg2Hjm/linkedin.png" alt="LinkedIn" id='Social'/>
                                </a>
                            </div>
                            <div className="link">
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                    <img src="https://i.postimg.cc/YCV2QBJg/github.png" alt="GitHub"  id='Social'/>
                                </a>
                            </div>
                            <div className="link">
                                <a href="https://codepen.io" target="_blank" rel="noopener noreferrer">
                                    <img src="https://i.postimg.cc/W4Znvrry/codepen.png" alt="CodePen"  id='Social'/>
                                </a>
                            </div>
                            <div className="link">
                                <a href="mailto:someone@example.com">
                                    <img src="https://i.postimg.cc/NjLfyjPB/email.png" alt="Email"  id='Social' />
                                </a>
                            </div>
                        </div>
                        <div className="row mt-3" id="Contact-row">
                            <div className="contact-col col-lg-6 col-md-6 col-sm-12">
                                <h1>Visit US</h1>
                                <p>UET Lahore, Punjab, Pakistan
                                Phone: +923039898987</p>
                            </div>
                            <div className="contact-col col-lg-6 col-md-6 col-sm-12">
                            <h1>Email us</h1>
                                <a href="mailto:battlemani790@gmail.com" id="email">battlemani790@gmail.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form-wrapper">
                       
                            <form onSubmit={handleSubmit} id="contact-form">
                                <div className="form-item">
                                    <input type="text" name="sender" required />
                                    <label>Name:</label>
                                </div>
                                <div className="form-item">
                                    <input type="email" name="email" required />
                                    <label>Email:</label>
                                </div>
                                <div className="form-item">
                                    <textarea name="message" required></textarea>
                                    <label>Message:</label>
                                </div>
                                <input type="submit" className="submit-btn" value="Send" />
                            </form>
                       
                            <div className="message" id="message">
                                <h1>Message sent successfully</h1>
                                <button className="submit-btn" onClick={Moveback}>Go back</button>
                            </div>
                       
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;
