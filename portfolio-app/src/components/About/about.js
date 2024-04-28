import React from 'react'
import './about.css'
import UIDesign from "../../assets/ui-design.png"
import WebDesign from "../../assets/website-design.png"
import AppDesign from "../../assets/app-design.png"

 const About =() =>{
return(
    <section id="skll">
    <span className="sk"> What I do</span>
    <span className="skdes"> Passionate software developer specializing in full-stack web development, with expertise in technologies like JavaScript,
     React, Node.js, and Python. Experienced in building scalable and responsive applications to meet diverse business needs.</span>
    <div className= "sksec">
        
    <div className="sks">
            <img  src={AppDesign}alt="" className="secIm"/>
            <div className="secTex">
                <h2>APP development</h2>
                <p>
                I've experienced in building dynamic React and Angular applications, and I'm proficiency in creating responsive and feature-rich interfaces for mobile and web platforms.
                </p>
            </div>
        </div>

        <div className="sks">
            <img  src={UIDesign} alt="" className="secIm"/>
            <div className="secTex">
                <h2>UI/UX Design</h2>
                <p>
                     I specialize in UI/UX design, ensuring intuitive and visually captivating experiences that drive user engagement and satisfaction.
                </p>            
        </div>
        </div>
        <div className="sks">
            <img  src={WebDesign} alt="" className="secIm"/>
            <div className="secTex">
                <h2>Website Design</h2>
                <p>
                My expertise in website design combines aesthetics with usability, creating impactful and 
                functional websites that resonate with users and achieve business goals.
                </p>
            </div>
        </div>

    </div>
    </section>
    
)
 }

 export default About;