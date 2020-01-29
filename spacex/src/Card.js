import React from 'react';
import './styles/card.css'
import Time from './TimeLogic'
import elon from '../src/images/elon.jpg'

function Card(props) {

    const newTime = new Time();
    let date;
    if(props){
        date = newTime.getDate(props.date)  
    }

    let starman = "https://www.youtube.com/watch?v=A0FZIwabctw"
  
    return(
        <div className="card">
            <div className="card-container">
                <img alt="launches" src={props.img ? props.img : elon} />            
                <h3 className="launch-name">{props.name}</h3>
                <p>{date}</p>
                <div className="card-links">
                    <a href={props.videoLink ? props.videoLink : starman}>Video link</a>
                    <a href={props.article}>Article Link</a>
                </div>             
            </div>
        </div>
    )
}

export default Card;