import React from "react"
import "./Page8card.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faTags } from '@fortawesome/free-solid-svg-icons'
import { faComments} from '@fortawesome/free-solid-svg-icons'

const Page8card = (props) =>{
    return(

        <>
          <style>@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');</style>
            <div className="main_card">
                <div className="imagcont">
                    <img src={props.blogimg} alt="hi" />
                    <div className="over-img">August 8, 2020</div>
                </div>
                <div className="iconcont">
                <span className="bottomicons"><FontAwesomeIcon className="marginleft" icon={faUser} />admin</span>
                <span className="bottomicons"><FontAwesomeIcon className="marginleft" icon={faTags} />Our Blog</span>
                <span className="bottomicons"><FontAwesomeIcon className="marginleft" icon={faComments} />Comments</span>
               
                </div>
                <hr className="horizontal"></hr> 
               <div className="blog">
                    <h2>{props.h2}</h2>
                    <p style={{color:"#555"}}>Breathing embodiment of my passion for discovery. Here’s some of it. Capitalize on low hanging fruit to identify
                    a ballpark value added activity to beta test. Override the digital divide with additional Phosfluorescently engage
                    worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric 
                    “outside the box” thinking. Completely pursue scalable customer service through</p>
                    <button className="btn8">SEE MORE &#8594;</button>
                </div>
            </div>
        </>
    );
}

export default Page8card