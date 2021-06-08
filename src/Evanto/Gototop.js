import React, { useState } from "react"
import "./Gototop.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faAngleDoubleUp}  from "@fortawesome/free-solid-svg-icons"
const Gototop = () =>{

    const myfunction1 = () =>{
        document.documentElement.scrollTop = 0;
    }

    const [visible,setvisible] = useState(false);
    const toggleVisible = () =>{
        if (document.documentElement.scrollTop > 10) {
            setvisible(true);}
        else {
        setvisible(false);}
    }
    window.addEventListener('scroll', toggleVisible);

    return(
            <button className="gotobtn" style={{display : visible ? "block" : "none"}} onClick={myfunction1}>
                <FontAwesomeIcon icon={faAngleDoubleUp} /></button>
)
}

export default Gototop