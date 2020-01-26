import React from 'react';
import Time from './TimeLogic';
import TimeDisplay from './TimeDisplay'
import './styles/style.css';

class Timer extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            missionName: "",
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,         
            launchDate: "",
            isLoaded: false,
        };
        this.setTime = this.setTime.bind(this);
        this.startTime = this.startTime.bind(this);
    }
    componentDidMount() {
        fetch("https://api.spacexdata.com/v3/launches/next")
            .then(response => response.json())
            .then(
                (resData) => {
                    let obj = Time(resData)
                    this.setState({
                        launchDate: obj.launchDate,
                        missionName: obj.missionName
                    })
                    this.startTime(resData);     
                });
    }
    setTime(data){
        let obj = Time(data)
     
        this.setState({
            seconds: obj.second,
            minutes: obj.minute,
            hours: obj.hour,
            days: obj.day,
            launchDate: obj.launchDate
            
        });
    }
  
    startTime(data) {
      setInterval(() => {
          
          this.setTime(data);
      }, 1000);
    }
    
    render() {
        return (    
            <div className="countdown-container">
                <div className="next-launch ">
                    <h2 className="cd-mission-name">{this.state.missionName} takes off in:</h2>
                </div>
                <div className="countdown">
                    <div className="cd-box">
                        <p className="numbers days">{this.state.days} </p>
                        <p className= "strings timeRefSeconds">Days</p>
                    </div>
                    <div className="cd-box">
                        <p className="numbers hours"> <TimeDisplay time={this.state.hours} /> </p>
                        <p className= "strings timeRefSeconds">Hours</p>
                    </div>
                    <div className="cd-box">
                        <p className="numbers minutes"><TimeDisplay time={this.state.minutes} /></p>
                        <p className= "strings timeRefSeconds">Minutes</p>
                    </div>
                    <div className="cd-box">
                        <p className="numbers seconds"><TimeDisplay time={this.state.seconds} /></p>
                        <p className= "strings timeRefSeconds">Seconds</p>
                    </div>
                </div>
            </div>
        )
    }   

}



export default Timer