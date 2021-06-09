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
import Logo4 from "./images/news-8.jpg"
import Logo5 from "./images/news-9.jpg"
import Logo6 from "./images/news-10.jpg"
import Logo7 from "./images/about-1.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight, faSearch } from '@fortawesome/free-solid-svg-icons'
import Page8blog from "./Page8blog.js"

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
                <div className="divpad1">
                    <div style={{position:"relative"}}>
                        <input type="text" className="search1" placeholder="Search" /> 
                        <FontAwesomeIcon icon={faSearch} className="searchicon" />
                    </div>
                </div>

                <div className="divpad1">
                    <h2>Categories</h2>
                        
                    <div className="listblog"><FontAwesomeIcon icon={faCaretRight} />&emsp;blog grid view</div>
                    <hr></hr>
                    <div className="listblog"><FontAwesomeIcon icon={faCaretRight} />&emsp;blog list view</div>
                    <hr></hr>
                    <div className="listblog"><FontAwesomeIcon icon={faCaretRight} />&emsp;blog mansonry</div>
                    <hr></hr>
                    <div className="listblog"><FontAwesomeIcon icon={faCaretRight} />&emsp;our blog</div>
                </div>
             
                    <div className="divpad1">
                    <h2>Recent Post</h2>
                    <Page8blog blogimag={Logo4} bloghead="At, Mattis Nulla Sem Magna…."/>
                    <hr className="mrgtop"></hr>
                    <Page8blog blogimag={Logo5} bloghead="Quam At, Mattis Nulla Sem Magna."/>
                    <hr className="mrgtop"></hr>
                    <Page8blog blogimag={Logo6} bloghead="Eros Diam,Finibus Eget Quam At, Mattis Nulla Sem Magna…."/>
                    <hr className="mrgtop"></hr>
                    <Page8blog blogimag={Logo4} bloghead="At, Mattis Nulla Sem Magna…."/>

                    </div>

                    <div className="divpad1">
                        <h2>Archives</h2>
                        
                            <div className="listblog"><FontAwesomeIcon icon={faCaretRight} />August 2020</div>
                    </div>

                    <div className="divpad1">
                            <h2>Popular Tags</h2>
                            <button className="btntag8">Advertising</button>
                            <button className="btntag8">Best</button>
                            <button className="btntag8">Fashion</button>
                            <button className="btntag8">Inspiration</button>
                            <button className="btntag8">Lifestyle</button>
                            <button className="btntag8">Tech</button>
                            <button className="btntag8">Trending</button>
                    </div>

                    <div className="divpad1">
                        <h2>About Us</h2>
                        <div className="aboutus">
                            <img src={Logo7} style={{borderRadius:"50%"}}  alt="hi"/>
                            <p>Breathing e Here’s some of talize on low hanging fruit to identify a ballpark value added activity to beta test. 
                            Override the digital divide with additionalable potentialities.tailers. Objectively seize scalabler</p>
                        <button>READ MORE</button>
                        </div>
                    </div>
                    <div className="divpad1">
                        <h2>Meta Tags</h2>
                     
                        
                            <div className="listblog">
                            <FontAwesomeIcon icon={faCaretRight} />&emsp;Log in</div>
                            <hr style={{color:"#777777"}}></hr>
                            <div className="listblog"><FontAwesomeIcon icon={faCaretRight} />&emsp;Entries RSS</div>
                            <hr></hr>
                            <div className="listblog"><FontAwesomeIcon icon={faCaretRight} />&emsp;Comments RSS</div>
                            <hr ></hr>
                            <div className="listblog"><FontAwesomeIcon icon={faCaretRight} />&emsp;Wordpress.org</div>
                            
                        
                    </div>
                 
                    
            </div>
            </div>
        
            <Pagefooter />
            </>
    );
}

export default Page8