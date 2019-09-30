import React from 'react'
import './styles/style.css'
import backImage from './images/pic3L.jpg'
import Timer from "./Timer"

console.log(backImage)


class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            error: null,
            isLoaded: false,
            itemsP:[]
        };
    }

    componentDidMount() {
        fetch("https://api.spacexdata.com/v3/launches/next")
            .then(response => response.json())
            .then(
                (resData) => 
                    this.setState({
                         isLoaded: true,
                         itemsP: resData
                     })
            )
    }

    render() {
        //console.log(this.state.itemsP.launch_date_utc)
        

        return (           
            <main>
                <div className="main-container">
                   <div className="transbox">
                    <div className="container">
                        <Timer nextLaunch = {this.state.itemsP} />
                    </div>
                   </div>
                </div>
             </main>
           
        )
    }
}
export default Main
