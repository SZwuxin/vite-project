import { useState } from "react";
import './games.css'

export const NumberGuesser = () => {
    const [tries, setTries] = useState(0);  
    const [num, setNum] = useState(0);
    const [success, setSuccess] = useState(false);
    const [result, setResult] = useState('')
    const getRandomInt = (max:number) => {
        return Math.floor(Math.random() * max);
    }
    const [actualNum] = useState( getRandomInt(900)+100)
    const guessNumber = () => {
        if (num === actualNum) {
            setSuccess(true);
            return;
        }
        let res = ''
        setResult(res)
        setTries(tries+1)
        const stNum = num.toString()
        const stActual = actualNum.toString()
        console.log(stNum, stActual)
        for (let i = 0; i<3; i++) {
            console.log(stNum[i], stActual[i])
            if (stNum[i] === stActual[i]) {
                res += 'Fermi '
            }
            else if (stActual.includes(stNum[i])) {
                res += 'Pico '
            }
        }
        if (res === '') {
            res += 'Bagel'
        }
        setResult(res)
        
    }
    const restart = () => {
        setSuccess(false)
        setNum(0)
        setTries(0)
        setResult('')
    }
    
    const setN = (e: React.FormEvent<HTMLInputElement>) => {
        setNum(parseInt((e.target as HTMLTextAreaElement).value))
    }

    return (
        <>
        <h2> Bagels, a deductive logic game. </h2>
    <p>I am thinking of a 3-digit number. Try to guess what it is.<br></br>
    Here are some clues:</p>
    <ul>
        <li>Pico: One digit is correct but in the wrong position.</li>
        <li>Fermi: One digit is correct and in the right position.</li>
        <li>Bagels: No digit is correct.</li>
      </ul>
      
      <p> Note that guessing 444 when the actual number is 489 will show 'Fermi Pico Pico' because the second and third 4 is still the correct digit. </p>
        <p>I have thought up a number. You have 10 guesses to get it.</p>
        <label className='birthday'> Guess the number between 100 to 999:  <input className='birthdayInput' name="myInput" pattern="[0-9]*" value={num} onInput={e => setN(e)}/>  
        </label>
        {!success && (tries <= 10) && (
            <>
            <button className='button' onClick={() => {guessNumber()}}>Guess</button>
            {result !== '' && (
                <>
                <p> You have {10-tries} guesses left! </p>
                <p>{result}</p>
                </>
            )}
            </>
        )}
        
        {success && (
            <>
            <p className='success'> You have currectly guessed the number! It is {num} and you guessed it in {tries} tries. </p>
            <button className='button' onClick={() => {restart()}}>Retry</button>
            </>
        )}
        {!success && (tries > 10) && (
            <>
            <p  className='fail'> You failed to guess the number, it is {actualNum}. </p>
            <button className='button' onClick={() => {restart()}}>Retry</button>
            </>
        )}
        
    
        </>
    )
}