import { useState } from "react";
import { Button } from "react-bootstrap";
import './tools.css'

export const BirthdayParadox = () => {
    const [people, setPeople] = useState(0);  
    const [run, setRun] = useState(0);  
    const [percent, setPercent] = useState('');
    const [display, setDisplay] = useState(false);
    const getRandomInt = (max:number) => {
        return Math.floor(Math.random() * max);
    }
    const solveParadox = (people: number, amount:number) => {
        let sameBirthday = 0
        
        for (let i = 0; i<amount; i++) {
            const s = new Set()
            for (let j = 0; j < people; j++) {
                const r = getRandomInt(365)+1
                if (s.has(r)) {
                    sameBirthday+=1
                    break;
                } 
                else {
                    s.add(r)
                }
            }
        } 
        const same = sameBirthday/amount*100
        setPercent(same.toFixed(2))
        setDisplay(true)
    }
    
    const setP = (e: React.FormEvent<HTMLInputElement>) => {
        setPeople(parseInt((e.target as HTMLTextAreaElement).value))
        setDisplay(false)
    }
    const setB = (e: React.FormEvent<HTMLInputElement>) => {
        setRun(parseInt((e.target as HTMLTextAreaElement).value))
        setDisplay(false)
    }
    return (
        <>
        <label className='birthday'> Enter the amount of people you wish to simulate:  <input className='birthdayInput' name="myInput" pattern="[0-9]*" value={people} onInput={e => setP(e)}/>  
        </label>
        <label className='birthday'> Enter the amount of runs you wish to simulate:  <input className='birthdayInput' name="myInput" pattern="[0-9]*" value={run} onInput={e => setB(e)}/> </label> 
        <Button variant="info" onClick={() => {solveParadox(people, run)}}>Submit</Button>
        {display && (
            <p> After {run} runs, a total of {percent} % of runs have people with the same birthday </p>
        )}
    
        </>
    )
}