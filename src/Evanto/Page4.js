import React, { useState } from "react"
import "./Page4.css"
import Pageheader from "./Pageheader"
import Pagefooter from "./Pagefooter"
import Page4overlay from "./Page4overlay"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleUp}  from "@fortawesome/free-solid-svg-icons"

const Page4 = () =>{
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

        <>
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
        </style>
            <div>
                <div className="scrolltotop">
                    <span className="gotobtn" style={{display : visible ? "block" : "none"}} onClick={myfunction1}>
                    <FontAwesomeIcon icon={faAngleUp} /></span>
                </div>
                <Pageheader />
                <div className="parallax1"><Page4overlay name1="CREATIVE" name2="DESIGN" color1="#ed4f4e"/> </div>
                <div className="parallax2"><Page4overlay name1="MODERN" name2="DESIGN" color1="#eef091"/></div>
                <div className="parallax3"><Page4overlay name1="BRANDING" name2="COLLECTION" color1="#0166d5"/></div>
                <div className="parallax4"><Page4overlay name1="CUP OF" name2= "COFEE" color1="#56db91" /></div>
                <div className="parallax5"><Page4overlay name1="MINIMAL" name2= "DESIGN" color1="#ec5eb2"/></div>
                <div className="parallax6"><Page4overlay name1="RESTRAUNT" name2= "COLLECTION" color1="#84418e"/></div>
                <Pagefooter />
            </div>
            </>
    );
}

export default Page4