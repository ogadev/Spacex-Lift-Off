import React from 'react';
import './styles/style.css';


function TimeDisplay(props) {
    let time = props.time;
    return (
        <p className="numbers">{time < 10 ? `0${time}` : time}</p>
    )
}
export default TimeDisplay;