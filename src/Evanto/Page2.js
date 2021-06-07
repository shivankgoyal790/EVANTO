import React from "react"
import "./Page2.css"
import Pageheader from "E:/react_practice/development/src/Evanto/Pageheader.js"
import Pagefooter from "E:/react_practice/development/src/Evanto/Pagefooter.js"
import Logo1 from "E:/react_practice/development/src/Evanto/images/15-1.jpg";
import Logo2 from "E:/react_practice/development/src/Evanto/images/16-1.jpg";
import Logo3 from "E:/react_practice/development/src/Evanto/images/5-1.jpg";
import Logo4 from "E:/react_practice/development/src/Evanto/images/18.jpg";
import Logo5 from "E:/react_practice/development/src/Evanto/images/19.jpg";
import Logo6 from "E:/react_practice/development/src/Evanto/images/20.jpg";
import Logo7 from "E:/react_practice/development/src/Evanto/images/21.jpg";
import Logo8 from "E:/react_practice/development/src/Evanto/images/22.jpg";
import Logo9 from "E:/react_practice/development/src/Evanto/images/23.jpg";
import Logo10 from "E:/react_practice/development/src/Evanto/images/24.jpg";
import Logo11 from "E:/react_practice/development/src/Evanto/images/25.jpg";
import Logo12 from "E:/react_practice/development/src/Evanto/images/6-1.jpg";
import Logo13 from "E:/react_practice/development/src/Evanto/images/27.jpg";
import Logo14 from "E:/react_practice/development/src/Evanto/images/28-2.jpg";
import Logo15 from "E:/react_practice/development/src/Evanto/images/29-2.jpg";
import Page2overlay from "./Page2overlay";
import Pageheader2 from "./Pageheader2";
import Gototop from "./Gototop";
const Page2 = () =>{
    return(
        <>
            <Gototop />
            <Pageheader />
            <Pageheader2 Line1="Welcome To Limerick" Line2="DESIGN YOUR MIND" Line3="I like to think that my work is a living, breathing embodiment
             of my passion for discovery. Here’s some of it." disp="inline"/>
            <div className="grid-container2">
                <div className="item1"><Page2overlay photo={Logo1} /></div>
                <div className="item2"><Page2overlay photo={Logo2} /></div>
                <div className="item3"><Page2overlay photo={Logo3} /> </div>
                <div className="item4"><Page2overlay photo={Logo4} /></div>
                <div className="item5"><Page2overlay photo={Logo5} /></div>
                <div className="item6"><Page2overlay photo={Logo6} /></div>
                <div className="item7"><Page2overlay photo={Logo7} /></div>
                <div className="item8"><Page2overlay photo={Logo8} /></div>
                <div className="item9"><Page2overlay photo={Logo9} /> </div>
                <div className="item10"><Page2overlay photo={Logo10} /></div>
                <div className="item-11"><Page2overlay photo={Logo11} /></div>
                <div className="item-12"><Page2overlay photo={Logo12} /></div>
                <div className="item-13"><Page2overlay photo={Logo13} /></div>
                <div className="item-14"><Page2overlay photo={Logo14} /></div>
                <div className="item-15"><Page2overlay photo={Logo15} /> </div>
           
            </div>
            <Pagefooter />
        </>

    );
}

export default Page2;