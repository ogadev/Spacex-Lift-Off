import React from 'react'
import Time from './TimeLogic'
import './styles/style.css'


class Timer extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            missionName: "",
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,         
            nextFlight: 0,
            isLoaded: false,

         }
        this.setTime = this.setTime.bind(this);
        this.startTime = this.startTime.bind(this);
       // this.setTheTime = this.setTheTime.bind(this);


    }
    componentDidMount() {
        fetch("https://api.spacexdata.com/v3/launches/next")
            .then(response => response.json())
            .then(
                (resData) => {
                    this.startTime(resData);        
                });
                    
            // this.myInterval = setInterval(() => {               
            // }, 1000);          
    }
    setTime(data){
        let obj = Time(data)
        this.setState({
            seconds: obj.second,
            minutes: obj.minute,
            hours: obj.hour,
            days: data.day
        });
    }
  
    startTime(data) {
      setInterval(() => {
          console.log("test")
          this.setTime(data);
      }, 1000);
    }

   
    render() {
   

    //     let y = parseInt(this.state.years);
    //     let m = parseInt(this.state.months);
    //     m = m -1;
    //     let d = parseInt(this.state.days);
    //     let h = parseInt(this.state.hours); 
    //     let mi = parseInt(this.state.minutes);
    //     let s = parseInt(this.state.seconds);
        
    //     let countDownDate = new Date(y, m, d, h, mi, s, 0)
    //     let unix = (this.state.tempUnix / (1000*60*60*24)) % 7;
    //     console.log(unix)
        


    // const getDate = () => {
        
    //     let sMonth = ""
    //     switch(m) {
    //         case 0:
    //             sMonth = "January";
    //             break;
    //         case 1:
    //             sMonth = "February";
    //             break;
    //         case 2:
    //             sMonth = "March";
    //             break;
    //         case 3:
    //             sMonth = "April";
    //             break;
    //         case 4:
    //             sMonth = "May";
    //             break;
    //         case 5:
    //             sMonth = "June";
    //             break;
    //         case 6: 
    //             sMonth = "July";
    //             break;
    //         case 7: 
    //             sMonth = "August";
    //             break;
    //         case 8:
    //             sMonth = "September";
    //             break;
    //         case 9: 
    //             sMonth = "October";
    //             break;
    //         case 10:
    //             sMonth = "November";
    //             break;
    //         case 11:
    //             sMonth = "December";
    //             break;
    //         default:
    //             sMonth = "September";
    //     }
    //     return `${sMonth} ${d}, ${y}`

    // }
    
    
    // let currentDate = new Date();
    // let newCountdown = countDownDate - currentDate;

    // this.setState({
    //     days: Math.floor(newCountdown / (1000 * 60 * 60 * 24)),
    //     hours: Math.floor((newCountdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    //     minutes: Math.floor((newCountdown % (1000 * 60 * 60)) / (1000 * 60)),
    //     seconds: Math.floor((newCountdown % (1000 * 60)) / 1000)
    // });

    
    
   
    return (    
            <div className="countdown-container">
                <div className="next-launch">
                    <h2 className="cd-mission-name">{this.state.missionName}</h2>
                    <h2>Date: </h2>
                </div>
                <div className="countdown">
                    <div className="cd-box">
                        <p className="numbers days">{this.state.days}</p>
                        <p className= "strings timeRefSeconds">Days</p>
                    </div>
                    <div className="cd-box">
                        <p className="numbers hours">{this.state.hours < 10 ? `0${this.state.hours}` : this.state.hours}</p>
                        <p className= "strings timeRefSeconds">Hours</p>
                    </div>
                    <div className="cd-box">
                        <p className="numbers minutes">{this.state.minutes < 10 ? `0${this.state.minutes}` : this.state.minutes}</p>
                        <p className= "strings timeRefSeconds">Minutes</p>
                    </div>
                    <div className="cd-box">
                        <p className="numbers seconds">{this.state.seconds < 10 ? `0${this.state.seconds}` : this.state.seconds}</p>
                        <p className= "strings timeRefSeconds">Seconds</p>
                    </div>
                </div>
            </div>
    )
    


    }   

}



export default Timer