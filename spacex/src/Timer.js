import React from 'react'
import './styles/style.css'
import { tsConstructorType } from '@babel/types';

class Timer extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,

            // date: {
            //     year: String(this.props.nextLaunch.launch_date_utc).slice(0,4),
            //     month: String(this.props.nextLaunch.launch_date_utc).slice(5,7),
            //     day: String(this.props.nextLaunch.launch_date_utc).slice(8,10),
            //     hour: String(this.props.nextLaunch.launch_date_utc).slice(11,13),
            //     minutes: String(this.props.nextLaunch.launch_date_utc).slice(14,16),
            //     seconds: String(this.props.nextLaunch.launch_date_utc).slice(17,19)
            // }

        };
    }

    

    // componentDidMount() {
    //     this.timerID = setInterval(
    //         () => this.tick(), 1000);
    // }

    // componentWillUnmount() {
    //     clearInterval(this.timerID)
    // }

    

   
    render() {

        console.log(this.state.days) 


    // let countdowDate = new Date(parseInt(year), parseInt(month), parseInt(day), parseInt(hour), parseInt(minutes), parseInt(seconds), 0);
    // console.log("countdown date " + countdowDate);
    
    
    // var currentDate = new Date();
    // console.log("today's date " + currentDate);

    // var newCountdown = countdowDate - currentDate;

    // var daysT = Math.floor(newCountdown / (1000 * 60 * 60 * 24));
    // var hoursT = Math.floor((newCountdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    // var minutesT = Math.floor((newCountdown % (1000 * 60 * 60)) / (1000 * 60));
    // var secondsT = Math.floor((newCountdown % (1000 * 60)) / 1000);

   
    return (    
            <div className="countdown-container">
                <div className="next-launch">
                    <h2 className="cd-mission-name">Mission-name</h2>
                    <h2>Date  44:44:44</h2>
                </div>
                <div className="countdown">
                    <div className="cd-box">
                        <p className="numbers days">00</p>
                        <p className= "strings timeRefSeconds">Days</p>
                    </div>
                    <div className="cd-box">
                        <p className="numbers hours">00</p>
                        <p className= "strings timeRefSeconds">Hours</p>
                    </div>
                    <div className="cd-box">
                        <p className="numbers minutes">00</p>
                        <p className= "strings timeRefSeconds">Minutes</p>
                    </div>
                    <div className="cd-box">
                        <p className="numbers seconds">00</p>
                        <p className= "strings timeRefSeconds">Seconds</p>
                    </div>
                </div>
            </div>
    )
    

    
}
}



export default Timer