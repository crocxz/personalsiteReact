import React from 'react';

export default props =>{

    return(
    <div className="card col m6 s12 l4">
        <div className="card-image waves-effect waves-block waves-light">
            <img className="activator work-img" src={props.src} alt={props.alt}/>
        </div>
        <div className="card-content">
            <span className="card-title activator">{props.title}<i className="material-icons right">add</i></span>
            <a className="waves-effect waves-light btn"><i className="material-icons right">developer_mode</i> code</a>
            <a className="waves-effect waves-light btn"><i className="material-icons right">present_to_all</i> demo</a>        
        </div>

        <div className="card-reveal">
            <span className="card-title card-open">{props.title}<i className="material-icons right">close</i></span>
            <p>{props.info}</p>
            <a className="waves-effect waves-light btn"><i className="material-icons right">developer_mode</i> code</a>
            <a className="waves-effect waves-light btn"><i className="material-icons right">present_to_all</i> demo</a>  
        </div>
    </div>
    );
}