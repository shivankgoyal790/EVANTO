import React from "react"
import Gototop from "./Gototop"
import "./Page8.css"
import Page8card from "./Page8card"
import Pagefooter from "./Pagefooter"
import Pageheader from "./Pageheader"
import Pageheader2 from "./Pageheader2"
import Logo1 from "./images/news-1.jpg"
import Logo2 from "./images/8-2.jpg"
import Logo3 from "./images/8-3.jpg"
const Page8 = () =>{
    return(
            <>
            <style>@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');</style>
            <Gototop />
            <Pageheader />
            <Pageheader2 Line2="OUR BLOG" disp="none"/>
            <div className="flexbox8">
            <div className="flex8-1">
            <Page8card h2="At, mattis nulla sem magna…." blogimg={Logo1}/>
            <Page8card h2="Quam at, mattis nulla sem magna." blogimg={Logo2} />
            <Page8card h2="Eros diam,finibus eget quam at, mattis nulla sem magna…." blogimg={Logo3} />
            <Page8card h2="At, mattis nulla sem magna…." blogimg={Logo1}/>

            </div>
            <div className="flex8-2">
                    
            </div>
            </div>
        
            <Pagefooter />
            </>
    );
}

export default Page8