import React from 'react'

import './styles/style.css';
function Footer() {
    return(
        <footer>
            <div className="footer-div">
                <p className="footer-p">
                    Photos used in this site are from <a href="https://www.flickr.com/photos/spacex/"> Flickr.</a> All 
                    rights maintained by the respective owners. This site was made only for educational purposes using <a href="https://reactjs.org/">React</a> and 
                    the <a href="https://github.com/r-spacex/SpaceX-API">Spacex API</a> <br/> <a href="https://github.com/ogadev/Spacex-Lift-Off">Github Reposotory</a> 
                </p>
               
            </div>
        </footer>
    )
}
export default Footer;