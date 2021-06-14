import React from "react"
import "./Page8blog.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faClock } from '@fortawesome/free-solid-svg-icons'

const Page8blog = (props) =>{

    return (
<>

<div>
    <style>@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');</style>
    <div style={{float:"left" , width:"80%" }}>
        <div className="comments">{props.bloghead}</div>
        <div className="time"><FontAwesomeIcon icon={faClock} /> August 8, 2020</div>
    </div>
    
    <div style={{width:"20%"  , float:"right" }}>
        <img src={props.blogimag} alt="hi" style={{width:"100%" , minHeight:"100%", objectFit:"cover"}}/>
    </div>
    <div style={{clear:"both"}}></div>
</div>

</>

    );
}
export default Page8blog