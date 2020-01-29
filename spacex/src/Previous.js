import React, {useState, useEffect} from 'react';
import Card from './Card';

function Previous(props) {

    const [data, setData] = useState(null);
    const [load, setLoad] = useState(false) 

    const fetchData = async () => {
        const response = await fetch("https://api.spacexdata.com/v3/launches/past");
        const res = await response.json();        
        setData(res)   
        setLoad(true)   
    }   

    useEffect(() => {
        fetchData();
    },[])

    let cards;    
    if(data) {
        cards = data.map(i => {
           return <Card
                key={i.flight_number} 
                img={i.links.mission_patch_small}
                name={i.mission_name} 
                date={i.launch_date_unix}
                article={i.links.article_link}
                videoLink={i.links.video_link}
                />
        })
    }

    return(
        <div className="cards-backgrond">
            <div className="cards-page">
              {load ? cards : <h1 style={{color: "white"}}>Loading...</h1>}    
            </div>
        </div>
    )
}
export default Previous;