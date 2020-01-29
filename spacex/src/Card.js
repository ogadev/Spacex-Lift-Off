import React from 'react';
import './styles/card.css'
import Time from './TimeLogic'

function Card(props) {

    const newTime = new Time();
    let date;
    if(props){
        date = newTime.getDate(props.date)  
    }

    return(
        <div className="card">
            <div className="card-container">
                <img alt="launches" src={props.img} />            
                <h3 className="launch-name">{props.name}</h3>
                <p>{date}</p>
                <div className="card-links">
                    <a href={props.videoLink}>Video link</a>
                    <a href={props.article}>Article Link</a>
                </div>             
            </div>
        </div>
    )
}

export default Card;