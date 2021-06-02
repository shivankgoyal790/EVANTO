import React, { useState } from "react"
import "./Page1.css"
import Logo1 from "E:/react_practice/development/src/Evanto/images/logo.png";
import Logo2 from "E:/react_practice/development/src/Evanto/images/1-2.jpg";
import Logo3 from "E:/react_practice/development/src/Evanto/images/16-1.jpg";
import Logo4 from "E:/react_practice/development/src/Evanto/images/3-2.jpg";
import Logo5 from "E:/react_practice/development/src/Evanto/images/15-1.jpg";
import Logo6 from "E:/react_practice/development/src/Evanto/images/5-1.jpg";
import Logo7 from "E:/react_practice/development/src/Evanto/images/6-1.jpg";
import Logo8 from "E:/react_practice/development/src/Evanto/images/7-1.jpg";
import Logo9 from "E:/react_practice/development/src/Evanto/images/8-1.jpg";
import Logo10 from "E:/react_practice/development/src/Evanto/images/10-1.jpg";
import Logo11 from "E:/react_practice/development/src/Evanto/images/9-1.jpg";
import Logo12 from "E:/react_practice/development/src/Evanto/images/14-1.jpg";
import Logo13 from "E:/react_practice/development/src/Evanto/images/12-1.jpg";
import Logo14 from "E:/react_practice/development/src/Evanto/images/13-1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from '@fortawesome/free-brands-svg-icons' 
import { faFacebookF } from '@fortawesome/free-brands-svg-icons' 
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons' 
import { faPinterestP} from '@fortawesome/free-brands-svg-icons' 
import { faDribbble} from '@fortawesome/free-brands-svg-icons'
import {faLink}  from "@fortawesome/free-solid-svg-icons" 
import {faSearch}  from "@fortawesome/free-solid-svg-icons" 
import {faBullhorn}  from "@fortawesome/free-solid-svg-icons"
import {faAngleUp}  from "@fortawesome/free-solid-svg-icons"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Overlay from "E:/react_practice/development/src/Evanto/Overlay.js"
const Page1 = () =>{
    
    const myfunction1 = () =>{
        document.documentElement.scrollTop = 0;
    }

    const [visible,setvisible] = useState(false);

    
    const toggleVisible = () =>{
        if (document.documentElement.scrollTop > 10) {
            setvisible(true);
      } else {
        setvisible(false);
        
      }
    }
    
      window.addEventListener('scroll', toggleVisible);
    
    return(
            <>
           
                <style>
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
                </style>

                    <div className="scrolltotop">
                        <span className="gotobtn" style={{display : visible ? "block" : "none"}} onClick={myfunction1}>
                        <FontAwesomeIcon icon={faAngleUp} /></span>
                    </div>
               
                    <div className="flexbox1">
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
                    </div>

                   

                    <div className="grid-container">
                        <div className="item-1"><img className="image1" src={Logo2} alt="hi"/></div>
                        <div className="item-2"> <Overlay imglink={Logo3} icons1={faLink} icons2={faSearch} /></div>
                        <div className="item-3">
                        <div className="pos">
                        <img className="image1" src={Logo4} alt="hi"/>
                        <h1 className="text">About Us</h1>
                        </div>
                        </div>
                        <div className="item-4"><Overlay imglink={Logo5} icons1={faLink} icons2={faSearch} /></div>
                        <div className="item-5"><Overlay imglink={Logo6} icons1={faLink} icons2={faSearch} /></div>
                        <div className="item-6"><Overlay imglink={Logo7} icons1={faLink} icons2={faSearch} /></div>
                        <div className="item-7"><img className="image1" src={Logo8} alt="hi"/></div>
                        <div className="item-8"><Overlay imglink={Logo9} icons1={faLink} icons2={faSearch} /></div>
                        <div className="item-9"><Overlay imglink={Logo10} icons1={faLink} icons2={faSearch} /></div>
                        <div className="item-10"><Overlay imglink={Logo11} icons1={faLink} icons2={faSearch} /></div>
                        <div className="item-11">
                        <div className="pos">
                        <img className="image1" src={Logo4} alt="hi"/>
                        <h1 className="text">Meet Team</h1>
                        </div>
                        </div>
                        <div className="item-12">
                        <div className="pos">
                        <img className="image1" src={Logo12} alt="hi"/>
                        <div className="overlay2">
                            <h1>"Leverage agile frameworks to the
                                provide a robust synopsis for high</h1>
                                <p>-; John Doue</p>
                        </div>
                        </div>
                        </div>
                        <div className="item-13"><Overlay imglink={Logo13} icons1={faLink} icons2={faSearch} /></div>
                        <div className="item-14">
                        
                        <div className="pos">
                        <img className="image1" src={Logo14} alt="hi"/>
                        <div style={{position:"absolute" , color:"#ff3271" , top:"30%", width:"100%" ,textAlign:"center"}}>
                        <FontAwesomeIcon style={ {fontSize:"45px"}} icon={faBullhorn} /> 
                        <h1 className="text" style={{marginTop:"30px"}}>Contact</h1>
                        </div>
                        
                        </div>
                        </div>
                      

                    </div>

                    <div className="foot">
                    <img className="footimage" src={Logo1} alt="hi" />
                    <br />
                    <p>© Copyright 2020 Limerick. All Rights Reserved</p>
                    <div>
                            
                            <span className="icons"><FontAwesomeIcon icon={faFacebookF} /></span>
                            <span className="icons"><FontAwesomeIcon icon={faTwitter} /></span>
                            <span className="icons"><FontAwesomeIcon icon={faGooglePlusG} /></span>
                            <span className="icons"><FontAwesomeIcon icon={faPinterestP} /></span>
                            <span className="icons"><FontAwesomeIcon icon={faDribbble} /></span>
                        </div>
                    </div>
           

            </>
    );
} 

export default Page1