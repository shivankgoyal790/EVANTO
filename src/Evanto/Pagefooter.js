import React from "react"
import "./Pagefooter.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from '@fortawesome/free-brands-svg-icons' 
import { faFacebookF } from '@fortawesome/free-brands-svg-icons' 
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons' 
import { faPinterestP} from '@fortawesome/free-brands-svg-icons' 
import { faDribbble} from '@fortawesome/free-brands-svg-icons'
import Logo1 from "E:/react_practice/development/src/Evanto/images/logo.png";

const Pagefooter = () =>{

return(
<div className="foot">
<img className="footimage" src={Logo1} alt="hi" />
<br />
<p>© Copyright 2020 Limerick. All Rights Reserved</p>
<div>
        
        <span className="icons"><FontAwesomeIcon icon={faFacebookF} /></span>
        <span className="icons"><FontAwesomeIcon icon={faTwitter} /></span>
        <span className="icons"><FontAwesomeIcon icon={faGooglePlusG} /></span>
        <span className="icons"><FontAwesomeIcon icon={faPinterestP} /></span>
        <span className="icons"><FontAwesomeIcon icon={faDribbble} /></span>
    </div>
</div>
);
}

export default Pagefooter