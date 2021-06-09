import React from "react"
import "./Page9.css"
import Pageheader from "./Pageheader.js"
import Pagefooter from "./Pagefooter"
import Pageheader2 from "./Pageheader2"
import Gototop from "./Gototop"

/*to learn google maps using api */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
const Page9 = () =>{
    return(
        <>
        <style>@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');</style>
            <Gototop />
            <Pageheader />
            <Pageheader2 Line2="CONTACT US" disp="none"/>
         
            <div className="flexbox9">
                <div className="flex9-1">
                    <div className="cont9">
                    <h1>Our Office</h1>
                    <p>The whale was seized and sold, and his Grace the Duke of Wellington eceived the money. I like to think that my 
                    work is a living, breathing embodiment of my passion for discovery. Here’s some of it</p>
                    <p>Thinking that viewed in some particular lights,</p>
                    <div className="details">
                        <div><FontAwesomeIcon className="checkbox" icon={faCheckSquare} /> Tel: +(123) 456 7890</div>
                        <div><FontAwesomeIcon className="checkbox" icon={faCheckSquare} /> contact@theme.com</div>
                        <div><FontAwesomeIcon className="checkbox" icon={faCheckSquare} /> 620 Eighth Avenue, New York</div>
                        <div><FontAwesomeIcon className="checkbox" icon={faCheckSquare} /> 7030 Incididunt Ut, USA</div>
                    </div>
                    </div>
                </div>
                <div className="flex9-2">
                    
                    <input className="enterdetails" type="text" placeholder="Name"/>
                    <input className="enterdetails" type="text" placeholder="E-Mail" />
    
                    
                    <input className="enterdetails" type="text" placeholder="Phone" />    
                    <input className="enterdetails" type="text" placeholder="Subject" />    
                    
                    
                    <span><input type="textarea" placeholder="My Message" /></span>
                    <button className="btn-style-submit">SEND MESSAGE</button>
                </div>
                
            </div>
            <Pagefooter />
        </> 
    );
}

export default Page9 