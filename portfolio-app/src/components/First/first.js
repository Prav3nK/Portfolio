import React from "react";
import './first.css'
import pic from "../../assets/image.png"
import btnImg from "../../assets/hireme.png"
import { Link } from "react-scroll";
const First = () =>{
    return (
        <section id="first">
            <div className="cntent">
                <span className="hello">Hello</span>
                <span className="ku">I'm <span className="S"> Praveen </span>  <br/> Software Developer </span>
                <p className="introPAra"> I'm a skilled software developer with vast veriety <br/>of knowledge in field of software developer</p>
                <Link><button className ="btn"><img  className="btnImg"src ={btnImg} alt="Hire me" />Hire me</button></Link>
            </div>
            <img src={pic} alt="mepic" className="picture"/>
        </section>
    )
}
export default First;