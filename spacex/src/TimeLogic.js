class Time {

    getDate(data){
        const dateObj = new Date(data * 1000);
        var month = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"][dateObj.getMonth()];
        var day = dateObj.getUTCDate();
        var year = dateObj.getFullYear();
        var dateString = `${month} ${day}, ${year}`
        return dateString;
    }

    getTimer(obj){
        const currentDate = new Date();
        const dateObj = new Date(obj.launch_date_unix * 1000);
        const milLeft = dateObj - currentDate;
        const days = Math.floor((milLeft/(1000 * 60 * 60 * 24)));
        const hours = Math.floor(((milLeft/(1000 * 60 * 60)) % 24));
        const minutes = Math.floor(((milLeft/(1000 * 60)) % 60));
        const seconds = Math.floor((milLeft/(1000) % 60));

        const result = {
            day: days,
            hour: hours,
            minute: minutes,
            second: seconds,
            missionName: obj.mission_name,
        };
        return result;
    }    

    getPreviousCard(data) {
     
        // return data[0]["launch_year"]
    }
    
}

export default Time;