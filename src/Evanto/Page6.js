import React from "react"
import "./Page6.css"
import Pageheader from "./Pageheader"
import Pagefooter from "./Pagefooter"
import Pageheader2 from "./Pageheader2"
import Logo1 from "./images/mockup.png"
import Gototop from "./Gototop"


const Page6 = () =>{
    return(
        <>
         <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
        </style>
        <Gototop />
        <Pageheader />
        <Pageheader2 Line2="ABOUT US" disp="none"/>
        <div className="flexbox6">
            <div className="flex6">
                <div className="flex6content">
                    <h1>We Create</h1>
                    <h1>Design & Technology</h1>
                    <hr className="Hrule"></hr>
                    <p> Breathing embodiment of my passion for discovery. 
                    Here’s some of it. Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. 
                    Override the digital divide with additional clickthroughs from DevOps.</p>
                    <h2>MISSION</h2>
                    <p>Fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional</p>
                    <hr></hr>
                    <h2>VISION</h2>
                    <p>Fruit to identify a ballpark value added activity to beta</p>
                    <hr></hr>
                    <h2>VALUE</h2>
                    <p>Fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional</p>
                </div>
            </div>
            <div className="flex6">
                <img src={Logo1} alt="hi" />
            </div>
            <div className="rotatingdiv">
            </div>
        </div>
 
        <Pagefooter />
        </>
    );
}

export default Page6