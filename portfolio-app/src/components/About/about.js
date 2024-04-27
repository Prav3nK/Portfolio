import React from 'react'
import './about.css'
import UIDesign from "../../assets/ui-design.png"
import WebDesign from "../../assets/website-design.png"
import AppDesign from "../../assets/app-design.png"

 const About =() =>{
return(
    <section id="skll">
    <span className="sk"> What I do</span>
    <span className="skdes"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </span>
    <div className= "sksec">
        <div className="sks">
            <img  src={UIDesign} alt="" className="secIm"/>
            <div className="secTex">
                <h2>UI/UX Design</h2>
                <p>user interface (UI) refers to the interactivity, look, and feel of a product screen or web page, while user experience (UX) covers a user's overall experience with the product or website.</p>
            </div>
        </div>
        <div className="sks">
            <img  src={WebDesign} alt="" className="secIm"/>
            <div className="secTex">
                <h2>Website Design</h2>
                <p>
                Coders use HTML to determine where elements are placed on a web page and CSS to style it.
                </p>
            </div>
        </div>
        <div className="sks">
            <img  src={AppDesign}alt="" className="secIm"/>
            <div className="secTex">
                <h2>APP development</h2>
                <p>
                Mobile application development is the process of creating software applications that run on a mobile device, and a typical mobile application utilizes a network connection to work with remote computing resources.
                </p>
            </div>
        </div>
    </div>
    </section>
    
)
 }

 export default About;