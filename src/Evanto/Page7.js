import React, { useState } from "react"
import "./Page7.css"
import Pageheader from "./Pageheader"
import Pagefooter from "./Pagefooter"
import Pageheader2 from "./Pageheader2"
import Logo1 from "./images/71.jpg"
import Logo2 from "./images/7-2.jpg"
import Logo3 from "./images/7-3.jpg"
import Gototop from "./Gototop"


const Page7 = () =>{
    
    const [pos1 , setpos1] = useState("info");
    const setmypos = () =>{
        if(document.documentElement.clientWidth > 1150){
        if(document.documentElement.scrollTop < 480)
        setpos1("info")
        else if(document.documentElement.scrollTop > 480 && document.documentElement.scrollTop < 1790)
            setpos1("info2");
        else if(document.documentElement.scrollTop > 1790)
            setpos1("info3");    
        }
    }

    window.addEventListener("scroll" , setmypos);
    return(
        <>
         <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
        </style>
        <Gototop />
        <Pageheader />
        <Pageheader2 Line2="LEFT SIDEBAR" disp="none"/>
        <div className="flexbox7">
            <div className="flex7-1">
                <div className={pos1}>
                        <h1 className="hed1">We Create</h1>
                        <h1 className="hed1">Design & Technology</h1>
                        <hr className="Hrule"></hr>
                        <p className="p11"> Breathing embodiment of my passion for discovery. 
                        Here’s some of it. Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. 
                        Override the digital divide with additional clickthroughs from DevOps.</p>
                        <h3 className="hed3">CLIENT:</h3>
                        <p>Themefy Agency </p>
                        <hr></hr>
                        <h3 className="hed3">DATE:</h3>
                        <p>26-July-2019</p>
                        <hr></hr>
                        <h3 className="hed3">CATEGORY:</h3>
                        <p>Design Arts Entertainment</p>
                        <hr></hr>
                        <h3 className="hed3">FOLLOW US:</h3>
                        <p>Facebook &emsp; Twitter &emsp; Linkedin</p>
                </div>
            </div>
            <div className="flex7-2">
                    <img src={Logo1} alt="hi" />
                    <img src={Logo2} alt="hi" />
                    <img src={Logo3} alt="hi" />

            </div>
        </div>
        <Pagefooter/>
       </> 
        );
}

export default Page7