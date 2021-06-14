import React from "react"
import "./Pageheader2.css"

const Pageheader2 = (props) =>{
    return(
        <>
         <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
        </style>
        <div className="header2">
            <div className="headpos">
            <h3 className="line1">{props.Line1}</h3>
            <div style={{width:"100%" , textAlign:"center"}}>
            <span className="line2" style={{position:"relative"}}>{props.Line2}
            <span className="backcircle"></span>
            </span>
            </div>
            <p className="line3">{props.Line3}</p>    
            <button className="btn-style-two" style={{display:props.disp}}>READ MORE+</button>
            </div>
    </div>
    </>

    );
}

export default Pageheader2