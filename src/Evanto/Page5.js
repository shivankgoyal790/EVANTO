import React from "react"
import "./Page5.css"
import Pageheader from "./Pageheader.js"
import Pagefooter from "./Pagefooter.js"
import Logo1 from "./images/50.jpg"
import Logo2 from "./images/51.jpg"
import Logo3 from "./images/52.jpg"
import Logo4 from "./images/53.jpg"
const Page5 = () =>{

    return(
        <>
        <Pageheader />
        <div className="flexbox5">
            <div className="flex5"><img src={Logo1} alt="hi" /></div>
            <div className="flex5"><img src={Logo2} alt="hi" /></div>
            <div className="flex5"><img src={Logo3} alt="hi" /></div>
            <div className="flex5"><img src={Logo4} alt="hi" /></div>

        </div>
        <Pagefooter />
    </>
    )
}

export default Page5