import React from "react";
import './project.css'
import profolio1 from "../../assets/portfolio-1.png"
import profolio2 from "../../assets/portfolio-2.png"
import profolio3 from "../../assets/portfolio-3.png"
import profolio4 from "../../assets/portfolio-4.png"
import profolio5 from "../../assets/portfolio-5.png"
import profolio6 from "../../assets/portfolio-6.png"

const Projects = ()=>{

    return (
        <section id='projects'>
            <h2 className="projectstitle"> My Portfolio</h2>
            <spam className="projectDes"> I take pride It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </spam>
            <div className="projectImgs">
                <img src={profolio1} alt="" className="projectIm"></img>
                <img src={profolio2} alt="" className="projectIm"></img>
                <img src={profolio3} alt="" className="projectIm"></img>
                <img src={profolio4}  alt="" className="projectIm"></img>
                <img src={profolio5}  alt="" className="projectIm"></img>
                <img src={profolio6}  alt="" className="projectIm"></img>
            </div>
            <button className="projectBtn"> See More</button>

        </section>
    )

}

export default Projects;