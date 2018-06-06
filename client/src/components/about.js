import React from 'react';

import about from '../assets/images/about/me.jpg';
import lfzLogo from '../assets/images/about/code.jpg';
import calpolyLogo from '../assets/images/about/ubc.png';
import kingstonLogo from '../assets/images/about/store.svg';


export default props =>{

    return(
        <section id='about'>
        <div className="container">
            <h3 className='white-color'>Bio</h3>
            <hr className='white-color'/>
            <p className='text-faded'>I'm a full-stack software engineer, college-educated in theory, self-taught in skills. I am a student of life, a poet and a wanderer at heart, and a lover of knowledge. Ok fluff aside, I sorta just like tech and learning :)</p>
            <div className='row'>
            <img id="aboutImg" className='col s10 m6 l4 offset-s1 offset-m3 offset-l4 responsive-img' src={about} alt="About me"/>
            </div>
            <div className="text-faded center-align"><em>This is my mug, for lack of better photos</em></div>
            <p className='text-faded'>I'm interested in Software and Web Development, Product, Blockchain, and Entrepreneurship. I'm a jack-of-all-trades, as my natural curiosity and eagerness to step up have guided me to wear many hats through my experiences. Mastering the full-stack is my current mission, mastering the principles of product management will be my next, and entrepreneurship is my lifelong journey.</p>
            
            <h4 className='white-color'>Background</h4>
            <hr className='white-color sub'/>
            <div className="row">
            <div className="col s12 m4">
                <img src={lfzLogo} alt="LearningFuze" className='bgImg responsive-img'/>
            <div className="background-text text-faded">
                Udemy helped me get started in teaching myself modern web frameworks, and from there on and with Google as my guide I forged my own path.  A developer is ultimately shaped by what they are drawn to, and for me that means working with cutting edge technology.
            </div>
        </div>
        <div className="col s12 m4">
            <img src={kingstonLogo} alt="Kingston" className='bgImg responsive-img'/>
            <div className="background-text text-faded">
                Hackathons, entrepreneurial ventures, and involvement with family businesses along with recreational reading on business, start-ups, and philosophy are what shape my sense of business and empathy towards all stakeholders.
            </div>
        </div>
        <div className="col s12 m4">
            <img src={calpolyLogo} alt="Cal Poly" className='bgImg responsive-img'/>
            <div className="background-text text-faded">
               My Bachelor's of Arts in Computer Science plus time studying Biology gives me the Computer Science knowledge fundemental to a Software Engineer, with a background in natural sciences and breadth and perspective from studying the Arts.
            </div>
        </div>
            </div>
            
            <h4 className='white-color'>I'm working on</h4>
            <hr className='white-color'/>
            <div className="text-faded left-align"><em>As of: June 1st 2018</em></div>
            <p className='text-faded'>An IBM HyperLedger project related to the startup idea that I'm working with a teammate from the Bluzelle Decentralized Database Hackathon. Looking to squeeze Vue.js and PostgreSQL into my tech stack as well.  Stay tuned for more!</p>
            <div className='row'>
            </div>
        </div>
        </section>
    );
}