import { useState } from "react";
import { Button } from "react-bootstrap";
import './tools.css'

export const DiceRoller = () => {
    const [dice, setDice] = useState('');  
    const [roll, setRoll] = useState('');  
    const [result, setResult] = useState(0);
    const [display, setDisplay] = useState(false);
    const getRandomInt = (max:number) => {
        return Math.floor(Math.random() * max);
    }
    const calculateDice = (dice: string) => {
        let res: number = 0;
        const ro = []
        if (dice.includes('+')) {
            const sp: string[] = dice.split('+');
            console.log(sp)
            const [before, after] = sp[0].split('d');
            for (let i: number = 0; i < parseInt(before); i++) {
                const rand: number = getRandomInt(parseInt(after))+1;
                res += rand;
                ro.push(rand)
            }
            res += parseInt(sp[1]);
        } else if (dice.includes('-')) {
            const sp: string[] = dice.split('-');
            const [before, after] = sp[0].split('d');
            for (let i: number = 0; i < parseInt(before); i++) {
                const rand: number = getRandomInt(parseInt(after))+1;
                res += rand;
                ro.push(rand)
            }
            res -= parseInt(sp[1]);
        } else {
            const [before, after] = dice.split('d');
            for (let i: number = 0; i < parseInt(before); i++) {
                const rand: number = getRandomInt(parseInt(after))+1;
                res += rand;
                ro.push(rand)
            }
        }
        setResult(res)
        setRoll(ro.toString())
        setDisplay(true)
    }
    
    const setD = (e: React.FormEvent<HTMLInputElement>) => {
        setDice((e.target as HTMLTextAreaElement).value)
        setDisplay(false)
    }
    return (
        <>
        <label className='birthday'> Enter the dice roll to calculate, for example: 12d6+3 <input className='birthdayInput' name="diceroll" value={dice} onInput={e => setD(e)}/>  </label>
        <Button variant="info" onClick={() => {calculateDice(dice)}}>Submit</Button>
        {display && (
            <p> The dice rolled {roll}, with the final result of {result} </p>
        )}
    
        </>
    )
}