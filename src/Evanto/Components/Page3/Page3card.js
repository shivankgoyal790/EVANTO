import React from "react"
import "./Page3card.css"


const Page3card = (props) =>{
    return(
            
            <div className="page-container2">
                <div className="imageover1"><img src={props.imag} alt="bye" />
                <div className="over1"></div>
                </div>
                <h1>{props.head1}</h1>
                <h3>Portfolio Home</h3>
            </div>
           

   
    )
}

export default Page3card