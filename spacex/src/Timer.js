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
            isLoaded: false,
            launchDate: ''
        };
        this.theMTimer = 0;
        this.setTime = this.setTime.bind(this);
        this.startTime = this.startTime.bind(this);
    }
    componentDidMount() {
        fetch("https://api.spacexdata.com/v3/launches/next")
            .then(response => response.json())
            .then(
                (resData) => {
                    const NewTime = new Time();
                    let obj = NewTime.getTimer(resData)
                    this.setState({
                        launchDate: obj.launchDate,
                        missionName: obj.missionName
                    })
                    this.startTime(resData);     
                });
    }
    setTime(data){
        const NewTime = new Time();
        let obj = NewTime.getTimer(data)
     
        this.setState({
            seconds: obj.second,
            minutes: obj.minute,
            hours: obj.hour,
            days: obj.day, 
            isLoaded: true  
        });
    }
  
    startTime(data) {
      this.theMTimer = setInterval(() => {
          
          this.setTime(data);
      }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.theMTimer)
    }
  
    
    render() {
        return (    
            <div className="countdown-container">
                <div className="next-launch ">
                    <h2 className="cd-mission-name">{this.state.missionName}:</h2>
                </div>
                <div className="countdown">
                    <div className="cd-box">
                        <p className="numbers days">{this.state.days} </p>
                        <p className= "strings timeRefSeconds">Days</p>
                    </div>
                    <div className="cd-box">
                        <div className="numbers hours"> <TimeDisplay time={this.state.hours} /> </div>
                        <div className= "strings timeRefSeconds">Hours</div>
                    </div>
                    <div className="cd-box">
                        <div className="numbers minutes"><TimeDisplay time={this.state.minutes} /></div>
                        <div className= "strings timeRefSeconds">Minutes</div>
                    </div>
                    <div className="cd-box">
                        <div className="numbers seconds"><TimeDisplay time={this.state.seconds} /></div>
                        <div className= "strings timeRefSeconds">Seconds</div>
                    </div>
                </div>
            </div>
        )
    }   

}



export default Timer