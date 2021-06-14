import React from "react"
import "./Page4overlay.css"

const Page4overlay = (props) =>{
    return(
        <>
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
        </style>
            <div className="pos1">
                <div className="centerdiv1"><span className="centerhead"> <span style={{color:props.color1}}>{props.name1}</span> {props.name2}</span></div> 
                <p>Branding design</p>
            </div>
            </> 
    );
}

export default Page4overlay