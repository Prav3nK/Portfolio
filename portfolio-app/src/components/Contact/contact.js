import React, { useState } from "react";
import axios from 'axios';
import node from "../../assets/nodejs-logo.png"
import react from "../../assets/react-logo.png"
import python from "../../assets/python-logo.png"
import c from "../../assets/c-logo.png"
import  "./contact.css"
import facebookIcon from "../../assets/facebook-icon.png"
import twitter from "../../assets/twitter.png"
import youTubeIcon from "../../assets/youtube.png"
import instagramIc from "../../assets/instagram.png"

const Contact = () =>{
        const [name,setName] = useState('');
        const [email,setEmail] = useState('');
        const [message, setMessage] = useState('');
        const serviceId = process.env.REACT_APP_SERVICE_ID;
        const publickey = process.env.REACT_APP_PUBLIC_KEY;
        const templateId = process.env.REACT_APP_TEMPLATE_ID;
        
        const handleSubmit = async (e) => {
        e.preventDefault();


        const data= {
           service_id : serviceId,
           template_id : templateId,
           user_id : publickey,
           template_params : {
            from_name : name,
            from_email : email,
            message : message,
            to_name : 'Praveen Kumar'
           }
           }

           try{
            const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send",data)
            console.log(res.data)
            setName('');
            setEmail('');
            setMessage('');
           } catch (error){
            console.error(error);
           }
       }

    return (
        <section id="contactsec">
            <div id="Me">
                <h1 className="title"> My skills</h1>
                <p className="MeDesc"> I possess strong proficiency in React, Angular, Flask,  to create interactive and responsive web applications. 
                 Additionally, my expertise in Python, NodeJs and C# allows me to develop scalable and efficient backend solutions.
                 I offer comprehensive solutions for both mobile and web development and welcome inquiries for assistance.
                </p>
                <div className="cIMGS">
                    <img src={node} alt="" className="cIM" />
                    <img src={react} alt="" className="cIM" />
                    <img src={python} alt="" className="cIM" />
                    <img src={c} alt="" className="cIM" />
                </div>
            </div>
            <div id="contact">
                <h1 className="sectionTitle"> Contact Me</h1>   
                <span className="sectionDes">Please fill out the form below to discuss any work opportunies.</span>
                
                <form className="contactForm" onSubmit={handleSubmit}>
                    <input
                     type="text" 
                     className="name" 
                     placeholder="Your name"  
                     value ={name}
                     onChange  ={(e)=>setName(e.target.value)}
                     />                     
                    <input
                     type="email" 
                     className="em" 
                     placeholder="Email" 
                     value ={email} 
                    onChange  ={(e)=>setEmail(e.target.value)}
                    />
                    <textarea 
                    className="text"
                     name="message" 
                     rows ="5" 
                     placeholder="Enter Message" 
                     value={message}
                     onChange  ={(e)=>setMessage(e.target.value)}
                      />
                    <button type="submit" className="subBtn">Submit</button>
                    <div className="links">
                        <img src={facebookIcon} alt="" className="linkimg"/>
                        <img src={twitter} alt="" className="linkimg"/>
                        <img src={youTubeIcon} alt="" className="linkimg"/>
                        <img src={instagramIc} alt="" className="linkimg"/>

                    </div>
                </form>
            </div>

        </section>
    )
}
export default Contact;