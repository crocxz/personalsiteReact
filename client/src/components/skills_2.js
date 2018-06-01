import React from 'react';
import './landing.css';

export default props => {

    return(
        <section id='skills'>
           <div class="row white box-shadow">
           <div class="side-content"></div>
           <div class="main-content">
             <div class="content-header">
               <a class="anchor" name="skills"></a>
               <h2>Skills</h2>
               
             </div>
             <div class="content-body">
               <ul class="ul-skills">
                 <li class="li-skills">Java</li>
                 <li class="li-skills">JavaScript</li>
                 <li class="li-skills">HTML</li>
                 <li class="li-skills">CSS</li>
                 <li class="li-skills">React</li>
                 <li class="li-skills">Node.js</li>
                 <li class="li-skills">Bootstrap</li>
                 <li class="li-skills">MySQL</li>
                 <br/>
                 
                 <li class="li-skills">C#</li>
                 <li class="li-skills">MSSQL</li>
                 <li class="li-skills">MongoDB</li>
                 <li class="li-skills">C++</li>
                 <li class="li-skills">C</li> 
                 <li class="li-skills">Android</li>
                 <li class="li-skills">jQuery</li>
                 
               </ul>
             </div>
           </div>
           <div class="side-content"></div>
         </div>
        </section>
    );
}