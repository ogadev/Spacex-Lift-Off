import React from 'react'
import './styles/style.css'
import Timer from "./Timer"
import Upcoming from './Upcoming'
import Previous from './Previous'
import About from './About'
import Footer from "./Footer"

import {Switch, Route, Router} from "react-router-dom"
import Time from './TimeLogic'

function Main(){   

    return (           
        <main>
            <div className="main-container">
                <div className="transbox ">
                <div className="timer-container">
                    <Timer />
                     {/* if you move this it will automatically brake and idk why :( */}
                    
                
                </div>
                </div>
            </div>
          
        </main>    
    )
    
}
export default Main
