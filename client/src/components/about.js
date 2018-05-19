import React from 'react';

import about from '../assets/images/about/creative.png';
import lfzLogo from '../assets/images/about/lfz-logo.png';
import calpolyLogo from '../assets/images/about/cp-logo.png';
import kingstonLogo from '../assets/images/about/kingston-logo.png';


export default props =>{

    return(
        <section id='about'>
        <div className="container">
            <h3 className='white-color'>Bio</h3>
            <hr className='white-color'/>
            <p className='text-faded'>I'm a full-stack software engineer, college-educated in theory, self-taught in skills. I am a student of life, a poet and a wanderer at heart, and a lover of knowledge.</p>
            <div className='row'>
            <img id="aboutImg" className='col s10 m6 l4 offset-s1 offset-m3 offset-l4 responsive-img' src={about} alt="About me"/>
            </div>
            <div className="text-faded center-align"><em>"Where there's a will, there's a way."</em></div>
            <p className='text-faded'>I'm interested in Development, Product, Blockchain, and Entrepreneurship. I'm a jack-of-all-trades, as my natural curiosity and willingness to step up have guided me to wear many hats through my experiences. Mastering the full-stack is my current mission.</p>
            
            <h4 className='white-color'>Background</h4>
            <hr className='white-color sub'/>
            <div className="row">
            <div className="col s12 m4">
                <img src={lfzLogo} alt="LearningFuze" className='bgImg responsive-img'/>
            <div className="background-text text-faded">
                Udemy helped me get started in teaching myself modern web frameworks, from there on and with Google as my guide I forged my own path
            </div>
        </div>
        <div className="col s12 m4">
            <img src={kingstonLogo} alt="Kingston" className='bgImg responsive-img'/>
            <div className="background-text text-faded">
                Numerous hackathon attendances, entrepreneurial ventures, and involvement with family businesses along with many, many hours of reading on business, start-up, and philosophy define my keen business sense.
            </div>
        </div>
        <div className="col s12 m4">
            <img src={calpolyLogo} alt="Cal Poly" className='bgImg responsive-img'/>
            <div className="background-text text-faded">
               My Bachelor's of Arts in Computer Science plus time studying Biology gives me the Computer Science knowledge fundemental to a Software Engineer, with a background in natural sciences and breadth and perspective from studying the Arts.
            </div>
        </div>
            </div>
            
        </div>
        </section>
    );
}