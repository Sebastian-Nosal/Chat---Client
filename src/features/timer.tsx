import { useEffect, useState } from "react";

export default function Timer()
{
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
        setTime(new Date());
        }, 300);

        return () => clearInterval(interval);
    }, []);

    return (<span className="menu-timer_timer"> {time.toLocaleTimeString()}</span>);
}