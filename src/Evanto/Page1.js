import React from "react"
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
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
const Page1 = () =>{
    
    return(
            <>
           
                <style>
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
                </style>
               
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
                        <div className="item-1"><img className="image1" src={Logo2} alt="hi" /></div>
                        <div className="item-2"><img className="image1" src={Logo3} alt="hi" /></div>
                        <div className="item-3"><img className="image1" src={Logo4} alt="hi" /></div>
                        <div className="item-4"><img className="image1" src={Logo5} alt="hi" /></div>
                        <div className="item-5"><img className="image1" src={Logo6} alt="hi" /></div>
                        <div className="item-6"><img className="image1" src={Logo7} alt="hi" /></div>
                        <div className="item-7"><img className="image1" src={Logo8} alt="hi" /></div>
                        <div className="item-8"><img className="image1" src={Logo9} alt="hi" /></div>
                        <div className="item-9"><img className="image1" src={Logo10} alt="hi" /></div>
                        <div className="item-10"><img className="image1" src={Logo11} alt="hi" /></div>
                        <div className="item-11"><img className="image1" src={Logo4} alt="hi" /></div>
                        <div className="item-12"><img className="image1" src={Logo12} alt="hi" /></div>
                        <div className="item-13"><img className="image1" src={Logo13} alt="hi" /></div>
                        <div className="item-14"><img className="image1" src={Logo14} alt="hi" /></div>
                      

                    </div>
           

            </>
    );
} 

export default Page1