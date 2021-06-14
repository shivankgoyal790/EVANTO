 import React from "react";
 import "./Imageflex.css";
 import Logo1 from "../../images/page-shape.jpg"
 const Imageflex = (props) =>{

    return(
        <>
        <div className="contain">
            <img src={Logo1} alt="hi" className="imagheader"/>
            <div style={{position:"relative"}}>
            <img src={props.img} alt="hi" className="demo1"/>
            <p className="caption">{props.caption}</p>
            </div>
        </div>
       
        </>
    );
 }

 export default Imageflex;