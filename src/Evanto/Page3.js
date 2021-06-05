import React from "react"
import "./Page3.css"
import Pageheader from "./Pageheader"
import Pagefooter from "./Pagefooter"
import Page3card from "./Page3card"
import Logo1 from "./images/16-1.jpg"
import Logo2 from "./images/3-2(1).jpg"
import Logo3 from "./images/3-3.jpg"
import Logo4 from "./images/3-4.jpg"
import Logo5 from "./images/3-5.jpg"
import Logo6 from "./images/19.jpg"
import Logo7 from "./images/28-2.jpg"
import Logo8 from "./images/3-8.jpg"
import Logo9 from "./images/22.jpg"
import Logo10 from "./images/3-10.jpg"
import Logo11 from "./images/3-11.jpg"
import Logo12 from "./images/3-12.jpg"
import Logo13 from "./images/3-13.jpg"
import Logo14 from "./images/3-14.jpg"
import Logo15 from "./images/25.jpg"
import Logo16 from "./images/6-1.jpg"
import Logo17 from "./images/3-17.jpg"
import Logo18 from "./images/3-18.jpg"
import Logo19 from "./images/3-20.jpg"
import Logo20 from "./images/3-21.jpg"
import "./Page2.css"
import Pageheader2 from "./Pageheader2"


const Page3 = () =>{
    return(
            <>
             <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
        </style>
            <Pageheader />
            <Pageheader2 Line1="Welcome To Limerick" Line2="SHOWCASE YOUR SKILL" Line3="I like to think that my work is a 
            living, breathing embodiment of my passion for discovery. Here’s some of it." disp="none"/>
            <div className="page-container">    
            <Page3card imag={Logo1} head1="Contemporary Art"/>
            <Page3card imag={Logo2} head1="Man Drawing"/>
            <Page3card imag={Logo3} head1="Minimal Pattern"/>
            <Page3card imag={Logo4} head1="Summer Climate"/>
            <Page3card imag={Logo5} head1="Photography Style"/>
            <Page3card imag={Logo6} head1="Cup Of Coffe"/>
            <Page3card imag={Logo7} head1="Indesign Art"/>
            <Page3card imag={Logo8} head1="Fashion Vogue"/>
            <Page3card imag={Logo9} head1="Table With Cup"/>
            <Page3card imag={Logo10} head1="Contemporary Art"/>
            <Page3card imag={Logo11} head1="Full Security"/>
            <Page3card imag={Logo12} head1="Fashion Photography"/>
            <Page3card imag={Logo13} head1="Contemporary Art"/>
            <Page3card imag={Logo14} head1="Cool Design"/>
            <Page3card imag={Logo15} head1="Art & Writing"/>
            <Page3card imag={Logo16} head1="Contemporary Art"/>
            <Page3card imag={Logo17} head1="Wall Frame"/>
            <Page3card imag={Logo18} head1="Blog Talk"/>
            <Page3card imag={Logo19} head1="Red Budder"/>
            <Page3card imag={Logo20} head1="Discount Offer"/>
            </div>
            <Pagefooter />
            </>
    );
}

export default Page3