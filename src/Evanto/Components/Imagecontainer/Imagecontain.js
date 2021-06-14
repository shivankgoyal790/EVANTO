import React from "react"
import Imageflex from "./Imageflex"
import "./Imagecontain.css"
import logo4 from "E:/react_practice/development/src/Evanto/images/demo-1.jpg";
import logo5 from "E:/react_practice/development/src/Evanto/images/demo-2.jpg";
import logo6 from "E:/react_practice/development/src/Evanto/images/demo-3.jpg";
import logo7 from "E:/react_practice/development/src/Evanto/images/demo-4.jpg";
import logo8 from "E:/react_practice/development/src/Evanto/images/demo-5.jpg";
import logo9 from "E:/react_practice/development/src/Evanto/images/demo-6.jpg";
import logo10 from "E:/react_practice/development/src/Evanto/images/demo-7.jpg";
import logo11 from "E:/react_practice/development/src/Evanto/images/demo-8.jpg";
import logo12 from "E:/react_practice/development/src/Evanto/images/demo-9.jpg";

const Imagecontain = () =>{
 
    return(
            <>
              <div className="flex-container1">
                <div className="flexbox"><a style={{color:"black"}} href="Page1"> <Imageflex  caption="CREATIVE HOME" img={logo4}/></a></div>
                <div className="flexbox"><a style={{color:"black"}} href="Page2"><Imageflex  caption="DESIGNER HOME" img={logo5}/></a></div> 
                <div className="flexbox"><a style={{color:"black"}} href="Page3"><Imageflex  caption="PORTFOLIO HOME" img={logo6}/></a></div>
                <div className="flexbox"><a style={{color:"black"}} href="Page4"><Imageflex  caption="PARALLAX HOME" img={logo7}/></a></div>
                <div className="flexbox"><a style={{color:"black"}} href="Page5"><Imageflex  caption="CAROUSEL HOME" img={logo8}/></a></div>
                <div className="flexbox"><a style={{color:"black"}} href="Page6"><Imageflex  caption="ABOUT US" img={logo9}/></a></div>
                <div className="flexbox"><a style={{color:"black"}} href="Page7"><Imageflex  caption="PORTFOLIO" img={logo10}/></a></div>
                <div className="flexbox"><a style={{color:"black"}} href="Page8"><Imageflex  caption="BLOG" img={logo11}/></a></div>
                <div className="flexbox"><a style={{color:"black"}} href="Page9"><Imageflex  caption="CONTACT" img={logo12}/></a></div>
                </div>
            </>
    );
}

export default Imagecontain;