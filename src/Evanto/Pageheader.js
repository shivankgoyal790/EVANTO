import React, { useState } from "react"
import "./Pageheader.css"
import Logo1 from "E:/react_practice/development/src/Evanto/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from '@fortawesome/free-brands-svg-icons' 
import { faFacebookF } from '@fortawesome/free-brands-svg-icons' 
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons' 
import { faPinterestP} from '@fortawesome/free-brands-svg-icons' 
import { faDribbble} from '@fortawesome/free-brands-svg-icons'
import {faBars} from '@fortawesome/free-solid-svg-icons'
const Pageheader = () =>{

    const[pad , setpad] = useState(true);
    const togglepad = () =>{
        
        if(document.documentElement.scrollTop < 25)
            setpad(true);
        else
            setpad(false);
            }
    const[visible , setvisible ] = useState(true);
    const toggledisplay = () => {
        if(window.innerWidth < 770)
            setvisible(false);
         else
            setvisible(true)   
        }

    window.addEventListener("scroll" , togglepad);
    window.addEventListener("resize" , toggledisplay);
    window.addEventListener("load" , toggledisplay);

    return(
       <>
        <style>@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');</style> 
        <div className="flexbox1" style={{padding: pad ? "65px 0px" : "30px 0px"}}>
            <div className="flex-1"><img className="logo6" src={Logo1} alt="hi" /></div>
            <div className="flex-2">
                <ul className="list3">
                    <li className="active">HOME</li>
                    <li>ABOUT</li>
                    <li>PORTFOLIO</li>
                    <li>ELEMENTS</li>
                    <li>BLOG</li>
                    <li>CONTACT US</li>
                    

                </ul>
            </div>
            <div className="flex-3">
                
                <span className="icons"><FontAwesomeIcon icon={faFacebookF} /></span>
                <span className="icons"><FontAwesomeIcon icon={faTwitter} /></span>
                <span className="icons"><FontAwesomeIcon icon={faGooglePlusG} /></span>
                <span className="icons"><FontAwesomeIcon icon={faPinterestP} /></span>
                <span className="icons"><FontAwesomeIcon icon={faDribbble} /></span>
            </div>

<span className="menu" style={{display : visible ? "none" : "block"}}><FontAwesomeIcon icon={faBars} /> </span>
</div>

</>
    );
}

export default Pageheader