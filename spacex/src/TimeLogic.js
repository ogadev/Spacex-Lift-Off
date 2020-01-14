function Time(obj){
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
        launchDate: dateObj
    };
    return result;
}

export default Time;