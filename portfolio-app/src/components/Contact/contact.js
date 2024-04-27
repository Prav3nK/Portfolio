import React from "react";

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
                <form className="contactForm">
                    <input type="text" className="name" placeholder="Your name" ></input>
                    <input type="email" className="em" placeholder="Email"></input>
                    <textarea className="text" name="message" rows ="5" placeholder="Enter Message"></textarea>
                    <button type="submit" className="subBtn" value="send">Submit</button>
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