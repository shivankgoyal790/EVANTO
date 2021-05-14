import React from "react"
import "./Page1.css"
import Logo1 from "E:/react_practice/development/src/Evanto/images/logo.png";
import Logo2 from "E:/react_practice/development/src/Evanto/images/1-2.jpg";
import Logo3 from "E:/react_practice/development/src/Evanto/images/16-1.jpg";
import Logo4 from "E:/react_practice/development/src/Evanto/images/3-2.jpg";
import Logo5 from "E:/react_practice/development/src/Evanto/images/6-1.jpg";
import Logo6 from "E:/react_practice/development/src/Evanto/images/7-1.jpg";
import Logo7 from "E:/react_practice/development/src/Evanto/images/8-1.jpg";
import Logo8 from "E:/react_practice/development/src/Evanto/images/9-1.jpg";
import Logo9 from "E:/react_practice/development/src/Evanto/images/10-1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from '@fortawesome/free-brands-svg-icons' 
import { faFacebookF } from '@fortawesome/free-brands-svg-icons' 
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons' 
import { faPinterestP} from '@fortawesome/free-brands-svg-icons' 
import { faDribbble} from '@fortawesome/free-brands-svg-icons' 

const Page = () =>{
    
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

                    <div className="flexbox1">
                        <div className="item1"><img className="image1" src={Logo2} alt="hi" /></div>
                        <div className="item2"><img className="image1" src={Logo3} alt="hi" /></div>
                        <div className="item2"><img className="image1" src={Logo4} alt="hi" /></div>
                        <div className="item3"><img className="image1" src={Logo5} alt="hi" /></div>
                        <div className="item4"><img className="image1" src={Logo6} alt="hi" /></div>
                        <div className="item5"><img className="image1" src={Logo7} alt="hi" /></div>
                        <div className="item6"><img className="image1" src={Logo8} alt="hi" /></div>
                        <div className="item7"><img className="image1" src={Logo9} alt="hi" /></div>
                      

                    </div>
           

            </>
    );
} 

export default Page