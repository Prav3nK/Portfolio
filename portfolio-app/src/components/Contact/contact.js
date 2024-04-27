import React, { useState } from "react";
import axios from 'axios';
import wal from "../../assets/walmart.png"
import mic from "../../assets/microsoft.png"
import adobe from "../../assets/adobe.png"
import facebook from "../../assets/facebook.png"
import  "./contact.css"
import facebookIcon from "../../assets/facebook-icon.png"
import twitter from "../../assets/twitter.png"
import youTubeIcon from "../../assets/youtube.png"
import instagramIc from "../../assets/instagram.png"

const Conctact = () =>{
        const [name,setName] = useState('');
        const [email,setEmail] = useState('');
        const [message, setMessage] = useState('');

        const handleSubmit = async (e) => {
        e.preventDefault();
        const serviceId = 'service_xw8v5lm';
        const publickey = 'F5otaVPDyO_UXTzTi';
        const templateId ='template_14k70ei';

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
            <div id="clients">
                <h1 className="title"> My clients</h1>
                <p className="clientDesc"> I have had the opportunity to work with a diverese group of companies.
                Some of the notable companies I have worked with includes
                </p>
                <div className="cIMGS">
                    <img src={wal} alt="" className="cIM" />
                    <img src={mic} alt="" className="cIM" />
                    <img src={adobe} alt="" className="cIM" />
                    <img src={facebook} alt="" className="cIM" />
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
export default Conctact;