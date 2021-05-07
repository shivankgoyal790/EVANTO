 import React from "react";
 import "./Imageflex.css";
 const Imageflex = (props) =>{

    return(
        <>
        <div className="contain">
            <div className="header">
                <span className="cir"></span>
                <span className="cir"></span>
                <span className="cir"></span>
                <div className="rec"></div>
            </div>
            <img src={props.img} alt="hi" className="demo1"/>
            <p className="caption">{props.caption}</p>
        </div>
       
        </>
    );
 }

 export default Imageflex;