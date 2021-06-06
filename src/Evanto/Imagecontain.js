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
                <div className="flexbox"><a href="Page1"> <Imageflex  caption="CREATIVE HOME" img={logo4}/></a></div>
                <div className="flexbox"><Imageflex  caption="DESIGNER HOME" img={logo5}/></div> 
                <div className="flexbox"><Imageflex  caption="PORTFOLIO HOME" img={logo6}/></div>
                <div className="flexbox"><Imageflex  caption="PARALLAX HOME" img={logo7}/></div>
                <div className="flexbox"><Imageflex  caption="CAROUSEL HOME" img={logo8}/></div>
                <div className="flexbox"><Imageflex  caption="ABOUT US" img={logo9}/></div>
                <div className="flexbox"><Imageflex  caption="PORTFOLIO" img={logo10}/></div>
                <div className="flexbox"><Imageflex  caption="BLOG" img={logo11}/></div>
                <div className="flexbox"><Imageflex  caption="CONTACT" img={logo12}/></div>
                </div>
            </>
    );
}

export default Imagecontain;