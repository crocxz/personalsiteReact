import React from 'react';
import splash from '../assets/images/landing/splash.png';
import './landing.css';

export default props =>{
    return(
        <div class="jumbotron">
        <div class="jumbotron-text">
          <h1>Will Xu</h1>
          <p>Dev && Prod</p>
          <p>let's make big things happen.</p>
        </div>
        <div class="jumbotron-social">
          <ul class="ul-social">
            <li class="li-social-links">
              <a class="social" href="https://github.com/crocxz" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>
            </li>
            <li class="li-social-links">
              <a class="social" href="https://linkedin.com/in/williamwlxu" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
            </li>
           
          </ul>
        </div>
        <div id="down-arrow">
          <span><a href="#about"><i class="fa fa-chevron-down fa-2x" aria-hidden="true"></i></a></span>
        </div>
      </div>
    );
}