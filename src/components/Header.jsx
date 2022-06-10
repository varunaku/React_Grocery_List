import React, {useState} from "react";

function Header() {

    setInterval(updateTime, 1000); //runs the updateTime function every second
    const time = new Date().toLocaleTimeString();
    //current time
    const [now, setTime] = useState(time);
    //useState function update will keep updating it, and 'time' is first set equal to 'now'

    function updateTime() {
        const newTime = new Date().toLocaleTimeString();
        //newTime is now the current time
        setTime(newTime);
        //now = newTime //{now}
      } 

    return (<header>
        <h1><pre>{now}</pre></h1>
        <h1>Grocery List</h1>
        </header>
    );
}

export default Header;