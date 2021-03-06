import React, { useState } from 'react'
import "./Evanto.css";
import Imagecontain from "./Components/Imagecontainer/Imagecontain"
import Logo1 from "E:/react_practice/development/src/Evanto/images/evantologo.svg";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Logo2 from "E:/react_practice/development/src/Evanto/images/logo.png";
import logo5 from "E:/react_practice/development/src/Evanto/images/mockup.png";
import CardContainer from './Components/Cardcontainer/CardContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'



const myfunction1 = () =>{
  document.documentElement.scrollTop = 0;}

const Evanto = () => {

    const[visible , setvisible] = useState(false)
    const toggleVisible = () =>{
        if (document.documentElement.scrollTop > 10) {
            setvisible(true);}
        else {
            setvisible(false);}
    }
window.addEventListener('scroll', toggleVisible);
    return( 
        <>
        <style>@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');</style>
        <button id="gotop" className="scrolltop" style={{display: visible ? 'block' : 'none'}}  onClick={myfunction1}><FontAwesomeIcon icon={faAngleUp}/></button>
            
        <div className="navbar1"> 
            <span className="logo"> 
            <img className="img1" src={Logo1}  alt="logo" />
            </span>
            <button className="btn1">Buy now</button>
        </div>    
          

            <div className="backimg">
                <div class="flex-container">
                    <div class="flex1">  <img className="img2" src={Logo2} alt="hi" /> </div>
                    <div class="flex2">
                            <span className="space">Home</span>
                            <a href="#pad" className="anchor"><span className="space">Main Demo</span></a>
                            <a href="#cardtag" className="anchor"><span className="space">Features</span></a>
                    </div>
                    <div class="flex3" >
                        <button className="btn2">PURSHASE THEME</button>
                    </div>
                </div>

                
                <div className="heading0">
                    <h4 className="h4">Limerick - Most powerful Theme on Market</h4>
                    <h1 className="heading1">Creative Portfolio WordPress Theme</h1>
                    <a href="Page1"><button className="btn4">EXPLORE DEMOES</button></a>
                </div>
            </div>
          
            
            <div className="pad" id="pad">
                <h1 className="center1">Check Out All The Pages</h1>
                <h4 className="center2"> Welcome to the Limerick WordPress Theme</h4>
                <Imagecontain /> 
            </div>


            <div id="cardtag"><CardContainer /></div>
            
            
            <div className="footer2">
                <div className="fontcolor1">
                    <h1 >Fully Responsive </h1>
                    <h1 >& Retina Ready</h1>
                </div>   
                <img src={logo5} alt="hi"  className="imag2"/>
            </div>
           <br></br>
           
            <div className="myfoot">
                <h1>Your Great-Looking Website</h1>
                <h1>Starts Right Here.</h1>
                <button className="btn2">PURSHASE NOW</button>
            </div>

     

        </>
    );
}


export default Evanto;


