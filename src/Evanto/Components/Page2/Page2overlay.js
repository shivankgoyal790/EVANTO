import React from "react"
import "./Page2overlay.css"

const Page2overlay = (props) =>{

    return(
    <div className="pos">
    <img className="image1" src={props.photo} alt="hi"/>
    <div className="page2over">
        <div className="overlaytext">

            <h2>
            <p style={{position:"relative"}}>
            CREATIVE PORTFOLIO
            <div style={{position:"absolute", zIndex:"-1" ,left:"25%" , backgroundColor:"#ffe991" ,top:"-10px", borderRadius:"50%",padding:"20px 20px"}} ></div>
            </p>
            </h2>
            <p>Designer Home</p>
        </div>
    </div>
    </div>
    );
}

export default Page2overlay
