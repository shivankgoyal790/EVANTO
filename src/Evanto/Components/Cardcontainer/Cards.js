import React from "react"
import "./Cards.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Card = (props) =>{

    return(
        <>
            <div className="card-container">
                    <i className="iconsize"><FontAwesomeIcon icon={props.Myicon} /></i>
                    <h4 className="cardheading4">{props.heading}</h4>
                    <p style={ {color: "#747474" , lineHeight:"30px" }}>{props.para}</p>

            </div>

        </>
    );
}

export default Card