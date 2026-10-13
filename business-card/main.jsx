import React from "react";
import { createRoot } from "react-dom/client";
import facebook from "photos/Facebook.png";
import instagram from "photos/Instagram.png";
import twitter from "photos/Twitter.png";
import github from "photos/Github.png";
import profile from "photos/profile.png";
import email from "photos/icon.png";
import linkedin from "photos/linkedin.png";
const root = createRoot(document.getElementById("root"));

function Info(){
   return (
    <main className="main">
        <img src={profile} alt="profile" className="profile"></img>
            <p className="name">Laura Smith</p>
            <p className="job">Frontend Developer</p>
            <p className="website">laurasmith.website</p>
            <div className="buttons">
                  <button className="email"><img src={email} alt="email" className="email-icon"></img>Email</button>
                  <button className="linkedin"><img src={linkedin} alt="linkedin" className="linkedin-icon"></img>LinkedIn</button>
         </div>

   </main>
   )
}

function Middle(){
    return(
         <section className="middle">
            <p className="about">About</p>
            <p className="about-text">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            <p className="interests">Interests</p>
            <p className="interests-text">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
         </section>
    )
}

function Footer(){
    return(
     <section className="footer">
        <img className="icon" src={facebook} alt="face"></img>
        <img className="icon" src={instagram} alt="face"></img>
        <img className="icon" src={twitter} alt="face"></img>
        <img className="icon" src={github} alt="face"></img>
    </section>
    )
}

root.render(
    <section className="card">
        <Info /> 
        <Middle />
        <Footer />
    </section>               
)
