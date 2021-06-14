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
                <div className="list3"> 
                    <span className="tooltip2"><a href="Page1" >HOME</a>
                     <div className="tool-container" >
                        <div className="mylist">Creative Home</div>
                        <div className="mylist">Designer Home</div>
                        <div className="mylist">Portfolio Home</div>
                        <div className="mylist"> Parallax Home</div>
                        <div className="mylist">Carousel Home</div>
                        <div className="mylist">Header Style</div>
                     </div>

                    </span>
                    <span className="tooltip2"><a href="Page6">ABOUT</a>
                        <div className="tool-container">
                        <div className="mylist">Creative Home</div>
                        <div className="mylist">Designer Home</div>
                        </div>
                    </span>

                    <span  className="tooltip2"><a href="Page3">PORTFOLIO</a>
                    <div className="tool-container" >
                        <div className="mylist">Portfolio Left Sidebar</div>
                        <div className="mylist">Portfolio Right Sidebar</div>
                        <div className="mylist">Portfolio Centered</div>
                        <div className="mylist">Portfolio Slide</div>
                        <div className="mylist">Portfolio Mansonry</div>
                     </div>
                    </span>
                    <span  className="tooltip2">ELEMENTS
                    <div className="tool-container" >
                        <div className="mylist">Home</div>
                        <div className="mylist">Header Style</div>
                        <div className="mylist">About</div>
                        <div className="mylist">Portfolio</div>
                     </div>
                    </span>
                    <span  className="tooltip2"><a href="Page8">BLOG</a>
                    <div className="tool-container" >
                        <div className="mylist">Blog With Sidebar</div>
                        <div className="mylist">Blog Grid View</div>
                        <div className="mylist">Blog List View</div>
                        <div className="mylist">Blog Mansonry</div>
                        <div className="mylist">Blog Single</div>
                     </div>
                    </span>
                    <span  className="tooltip2"><a href="Page9">CONTACT US</a></span>
                </div>
            
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