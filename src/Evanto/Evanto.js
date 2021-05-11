import React, { useState } from 'react'
import "./Evanto.css";
import Imagecontain from "./Imagecontain.js"
import Logo1 from "E:/react_practice/development/src/Evanto/images/evantologo.svg";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Logo2 from "E:/react_practice/development/src/Evanto/images/logo.png";
import logo3 from "E:/react_practice/development/src/Evanto/images/banner.jpg";
import logo4 from "E:/react_practice/development/src/Evanto/images/responsive.jpg";
import logo5 from "E:/react_practice/development/src/Evanto/images/mockup.png";
import CardContainer from './CardContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'


const myfunction1 = () =>{
 
    document.documentElement.scrollTop = 0;

}





const Evanto = () => {

    const[visible , setvisible] = useState(false)
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
            <div className="top1">
                    <button id="gotop" className="scrolltop" style={{display: visible ? 'block' : 'none'}}  onClick={myfunction1}><FontAwesomeIcon icon={faAngleUp}/></button>
            </div>
            <div className="navbar1"> 
                <span className="logo"> 
                <img className="img1" src={Logo1}  alt="logo" />
                </span>
            <button className="btn1">Buy now</button>
            </div>
            <div className="back">
                    <div className="image-container">
                        <img className="logo3" src={logo3} alt="hi" />
                        <div className="pos">
                            <div class="flex-container">
                            <div class="flex1">  <img src={Logo2} alt="hi" /> </div>
                            <div class="flex2">
                                    <span className="space">Home</span>
                                    <span className="space">Main Demo</span>
                                    <span className="space">Features</span>
                                
                            </div>
                            <div class="flex3" >
                            <button className="btn2">PURSHASE THEME</button>
                            </div>
                            </div>

                           <div className="heading">
                                <h4 className="h4">Limerick - Most powerful Theme on Market</h4>
                                <h1 className="heading1">Creative Portfolio WordPress Theme</h1>
                                <button className="btn4">EXPLORE DEMOES</button>
                            </div>
                       </div> 
                    </div>

            </div>
            
            <div className="pad">
                <h1 className="center1">Check Out All The Pages</h1>
                <h4 className="center2"> Welcome to the Limerick WordPress Theme</h4>
                <Imagecontain /> 
            </div>
            <CardContainer />
            <div className="foot">
                
                <img src={logo4} alt="hi" className="logo4"/>
                <div className="foots">
                <h1 className="font1">Fully Responsive </h1>
                <h1 className="font1">& Retina Ready</h1>
                </div>
                <img src={logo5} alt="hi" className="logo1" />
            </div>
           
            <div className="footer1">
                <h1>Your Great-Looking Website</h1>
                <h1>Starts Right Here.</h1>
                <button className="btn2">PURSHASE NOW</button>
            </div>

     

        </>
    );
}


export default Evanto;


