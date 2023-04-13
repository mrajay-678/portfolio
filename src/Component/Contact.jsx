import React from "react";
import { useState } from "react";

const Contact = () => {
    const [mail,setMail] = useState('')
    const [subject,setSubject] = useState('')
    const [message,setMessage] = useState('')
    
    // let sumit_mail = () => {
    //     let send_mail = document.querySelector("#send_mail")
    //     send_mail.setAttribute("href","")
    //  }
  return (
    <>
      <section className="py-5 wow fadeInUp" data-wow-delay="0.1s" id="contact">
        <h1 className="title pb-3 mb-5">Contact Me</h1>
        <form>
          <div className="row g-3">
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control border-0 bg-secondary"
                  id="name"
                  placeholder="Your Name"
                />
                <label htmlFor="name">Your Name</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="email"
                  className="form-control border-0 bg-secondary"
                  id="email"
                  placeholder="Your Email"
                  defaultValue={mail}
                  onInput={(e) => setMail(e.target.value)}
                />
                <label htmlFor="email">Your Email</label>
              </div>
            </div>
            <div className="col-12">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control border-0 bg-secondary"
                  id="subject"
                  placeholder="Subject"
                  defaultValue={subject}
                  onInput={(e)=>setSubject(e.target.value)}
                />
                <label htmlFor="subject">Subject</label>
              </div>
            </div>
            <div className="col-12">
              <div className="form-floating">
                <textarea
                  className="form-control border-0 bg-secondary"
                  placeholder="Leave a message here"
                  id="message"
                  style={{height: '200px'}}
                  defaultValue={message}
                  onInput={(e)=> setMessage(e.target.value)}
                ></textarea>
                <label htmlFor="message">Message</label>
              </div>
            </div>
            <div className="col-12">
                <a id="send_mail" href= {`mailto:theajay678@gmail.com?subject=${subject}&body=${message}`}>     
                    <span className="btn btn-primary w-100 py-3">Send Message</span>
                </a>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default Contact;
