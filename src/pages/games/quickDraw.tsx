import { useState } from "react";
import './games.css'

export const QuickDraw = () => {
    const [success, setSuccess] = useState(false);
    const [appearTime, setAppearTime] = useState(0)
    const [display, setDisplay] = useState(false)
    const currentDate = new Date();

    const getRandomInt = (max:number) => {
        return Math.floor(Math.random() * max);
    }
    const quickDraw = () => {
        const timestamp = currentDate.getTime();
        if (timestamp - appearTime <= 1200) {
            setSuccess(true)
        }
        setDisplay(true)

    }
    const start = () => {
        const time = getRandomInt(3000)+2000
        setTimeout(function(){
            const timestamp = currentDate.getTime() + time;
            setAppearTime(timestamp)
        }, time);
    }
    const restart = () => {
        setSuccess(false)
        setDisplay(false)
        setAppearTime(0)
    }

    return (
        <>
        <h2> Click on the Draw button as fast as you can after it appears! start when you are ready</h2>

        {!display && <button className='button' onClick={() => {start()}}>Ready</button>}

        {appearTime != 0 && !display && (<button  className='button' onClick={() => {quickDraw()}}>Draw</button>)}
        {display && success &&  (
            <>
            <h2 className='success'> Big iron on his hip!!!!</h2>
            <img src={'/bigiron.jpg'} width={750} height={550}></img> 
            <button className='button' onClick={() => {restart()}}>Retry</button>
            </>
        )}
        {display && !success && (
            <>
            <h2  className='fail'> you are not quick enough! </h2>
            <img src={'/tooslow.jpg'} width={750} height={550}></img> 
            <button className='button' onClick={() => {restart()}}>Retry</button>
            </>
        )}
        
    
        </>
    )
}