import React from "react"
import "./Card-container.css"
import Card from "./Cards"
import { faFileWord } from '@fortawesome/free-solid-svg-icons'
import { faGem } from '@fortawesome/free-solid-svg-icons'
import { faClock} from '@fortawesome/free-solid-svg-icons'
import { faRocket } from '@fortawesome/free-solid-svg-icons'
import { faPenFancy } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faHeadset } from '@fortawesome/free-solid-svg-icons'
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
const CardContainer = () =>{
    return(
            <div className="container1">
                <div className="flex-box1"><Card Myicon={faFileWord} para="This Theme comes with necessary features 
                for your online presence like portfolio, blog page etc." heading="18+ Pages ." /></div>
                <div className="flex-box1"><Card Myicon={faGem} para="Limerick is 100% responsive, each and every element are fully responsive. 
                Weather you're looking at mobile, tablet and desktop devices." heading="Retina Ready ."/></div>
                <div className="flex-box1"><Card Myicon={faClock} para="We're the team with always hear from your needs. 
                So, Limerick will always be the first line for your needs as an updates." heading="Timely Updates ."/></div>
                <div className="flex-box1"><Card Myicon={faRocket} para="Limerick Theme it is developed specifically for all types of creative 
                Portfolio" heading="High Performance ."/></div>
                <div className="flex-box1"><Card Myicon={faPenFancy} para="Limerick supports google fonts and all type of css font properties.
                 It also support custom font class properties." heading="Custom Typography ."/></div>
                <div className="flex-box1"><Card Myicon={faGlobe} para="Limerick is ready for translation support. This will help you to get all content
                 in Limerick in your language easily." heading="Translation Ready ."/></div>
                <div className="flex-box1"><Card Myicon={faVolumeUp} para="Theme perfectly supports search engine algorithms. Well structured 
                code ensures smooth experience" heading="Fully SEO Optimized ."/></div>
                <div className="flex-box1"><Card Myicon={faHeadset} para="Get a high quality support service with us, We have 
                dedicated support team waiting for your ticket." heading="Friendly Support ."/></div>
                <div className="flex-box1"><Card Myicon={faHeart} para="We have a huge number of layouts that are easy to edit.
                 You can edit each and every sections of Limerick Theme." heading="Highly Customizable ."/></div>
            </div>

    );
}

export default CardContainer;