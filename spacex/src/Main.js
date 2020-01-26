import React from 'react'
import './styles/style.css'
import Timer from "./Timer"
import Footer from "./Footer"

function Main(){   

    return (           
        <main>
            <div className="main-container">
                <div className="transbox ">
                <div className="timer-container">
                     {/* if you move this it will automatically brake and idk why :( */}
                    <Timer />
                </div>
                </div>
            </div>
            <Footer />
        </main>    
    )
    
}
export default Main
