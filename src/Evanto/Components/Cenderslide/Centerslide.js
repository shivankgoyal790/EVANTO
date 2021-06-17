import React from "react"
import "./Centerslide.css"
import Pageheader from "../Pageheader1/Pageheader"
import Pageheader2 from "../Pageheader2/Pageheader2"
import Pagefooter from "../Pagefooter/Pagefooter"
const Centerslide = ()=>{
    return(
        <>
        <Pageheader />
        <Pageheader2 Line2="CENTER SLIDE" disp="none"/>
        <div className="gallery-container">
            <div className="gallery">

            </div>
        </div>
        <div className="info__container">
            <h1>We Create</h1>
            <h1>Design & Technology</h1>
            <hr className="Hrule" />
            <br></br>
            <p>
            Breathing embodiment of my passion for discovery. Here’s some of it. Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. 
            Override the digital divide with additionalPhosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric "outside the box" thinking. 
            Completely pursue scalable customer service through sustainable potentialities.Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower fully researched growth strategies and interoperable internal or "organic" sources.
            </p>
            <br></br>
            <div className="info3_container">
            <div className="info5">
                <h2>CLIENT:</h2>
                <p>Themefy Agency</p>
            </div>
            
            <div className="info5">
                <h2>CLIENT:</h2>
                <p>Themefy Agency</p>
            </div>
            
            <div className="info5">
                <h2>CLIENT:</h2>
                <p>Themefy Agency</p>
            </div>
            
            <div className="info5">
                <h2>CLIENT:</h2>
                <p>Themefy Agency</p>
            </div>           
            </div>
        </div>
        <Pagefooter />
        </>
    );
}

export default Centerslide; 