import React from 'react';

import linkedinLogo from '../assets/images/footer/linkedin.jpg';
import githubLogo from '../assets/images/footer/github.png';

export default props =>{
    return(
        <section className="footer">
          <div className="container">
            <div className="row">
              <div className="col s12">
                <h3>Let's Connect!</h3>
                <hr className="sub"/>
                <p className="text-faded contact dark">You'll find whatever you need to reach me here.</p>
                
                <div className="row footerRow">
                  <div className="footer-links">
                    <a className="" target="_blank" href="https://github.com/crocxz"><img id="github-logo" src={githubLogo} alt="Github" /><br/>Github</a>
                  </div>
                <div className="footer-links">
                    <a className="" target="_blank" href="https://drive.google.com/open?id=1c1AA64veOKO7uE4nHxqCFX9MSkMnnSTA"><i className="medium material-icons">description</i><br/>Resume</a>
                </div>
                <div className="footer-links">
                    <a target="_blank" href="https://www.linkedin.com/in/williamwlxu"><img id="linkedin-logo" src={linkedinLogo} alt="LinkedIn" /><br/>LinkedIn</a>
                </div>

                </div>

              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2018 William Xu
            <div className="right">Powered by React, MaterializeCss, and <span><i class="fa fa-heart" style={{color : 'red'}}></i></span></div> 
            </div>
          </div>
        </section>
    );
}