import React from 'react';

function TimeDisplay(props) {
    let time = props.time;
    return (
        <p>{time < 10 ? `0${time}` : time}</p>
    )
}
export default TimeDisplay;