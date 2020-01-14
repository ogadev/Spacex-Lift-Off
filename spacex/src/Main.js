import React from 'react'
import './styles/style.css'
import Timer from "./Timer"


function Main(){   

    return (           
        <main>
            <div className="main-container">
                <div className="transbox">
                <div className="timer-container">
                    <Timer />
                </div>
                </div>
            </div>
        </main>    
    )
    
}
export default Main
