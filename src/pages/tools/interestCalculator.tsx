import { useState } from "react";
import { Button } from "react-bootstrap";
import './tools.css'

export const InterestCalculator = () => {
    const [amount, setAmount] = useState(0);  
    const [years, setYears] = useState(0);  
    const [apy, setApy] = useState(0.0); 
    const [compound, setCompound] = useState('daily')
    const [endAmount, setEndAmount] = useState('')
    const [display, setDisplay] = useState(false);
    const calculate = () => {
        if (compound === 'yearly') {
            setEndAmount(calc(amount, apy, 1, years))
        }
        else if (compound === 'quarterly') {
            setEndAmount(calc(amount, apy, 4, years))
        }
        else if (compound === 'monthly') {
            setEndAmount(calc(amount, apy, 12, years))
        }
        else if (compound === 'daily') {
            setEndAmount(calc(amount, apy, 365, years))
        }
        setDisplay(true)
    }
    const calc = (d: number, r:number, n:number, y:number) => {
        return (d*(1+0.01*(r/n))**(n*y)).toFixed(2)
    }
    
    const setA = (e: React.FormEvent<HTMLInputElement>) => {
        setAmount(parseInt((e.target as HTMLTextAreaElement).value))
        setDisplay(false)
    }
    const setY = (e: React.FormEvent<HTMLInputElement>) => {
        setYears(parseInt((e.target as HTMLTextAreaElement).value))
        setDisplay(false)
    }
    const setAPY = (e: React.FormEvent<HTMLInputElement>) => {
        setApy(parseFloat((e.target as HTMLTextAreaElement).value))
        setDisplay(false)
    }
    return (
        <>
        <label className='birthday'> Enter the amount of money at the beginning:  <input className='birthdayInput' name="myInput" pattern="[0-9]*" value={amount} onInput={e => setA(e)}/>  
        </label>
        <label className='birthday'> Enter the amount of years to maturity:  <input className='birthdayInput' name="myInput2" pattern="[0-9]*" value={years} onInput={e => setY(e)}/> </label> 
        <label className='birthday'> Enter the annual percentage yield (APY) of the plan:  <input className='birthdayInput' name="myInput3" value={apy} onInput={e => setAPY(e)}/> % </label> 
        <label className='birthday'> Enter how often the deposit is compounded:  <select name="compound" className='birthdayInput' id="compound" onChange={e => setCompound(e.currentTarget.value)}>
        <option value="daily">Daily</option>
        <option value="monthly">Monthly</option>
        <option value="quarterly">Quarterly</option>
        <option value="yearly">Yearly</option>
        </select> </label> 

        <Button variant="info" onClick={() => {calculate()}}>Submit</Button>
        {display && (
            <p> You will have {endAmount} after {years} years </p>
        )}
    
        </>
    )
}