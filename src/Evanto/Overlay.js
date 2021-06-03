import React from "react"
import "./Overlay.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Overlay = (props) =>{
    return(
<div className="pos">
<img className="image1" src={props.imglink} alt="hi"/>
<span className="left">asd</span>
<span className="right">asd</span>
<span className="left1"><span className="icon1"><FontAwesomeIcon icon={props.icons1} /></span></span>
<span className="right1"><span className="icon2"><FontAwesomeIcon icon={props.icons2} /></span></span>

</div>
    );
}

export default Overlay