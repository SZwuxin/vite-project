import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
export const FactorFinder = () => {
    const [num, setNum] = useState(1);  
    const [factor, setFactor] = useState('')  
    const [display, setDisplay] = useState(false)
    function factorFinder(num: number) {
        const allFactors = [];
        if (num === 0) {
            return []
        }
        else if (num === 1) {
            allFactors.push(1);
        }
        else {
            for (let i = 1; i < Math.sqrt(num); i++) {
                if (num % i === 0) {
                    allFactors.push(i);
                    allFactors.push(num / i);
                }
            }
        }
        allFactors.sort(function(a, b) {
            return a - b;
          })

        setFactor(allFactors.toString())
        setDisplay(true)
        // return allFactors;
    }
    const set = (e: React.FormEvent<HTMLInputElement>) => {
        setNum(parseInt((e.target as HTMLTextAreaElement).value))
        setDisplay(false)
    }
    
    return (
        <>
          
          <label>
          Enter an integer greater than 0: <input name="myInput" pattern="[0-9]*" value={num} onInput={e => set(e)}/> 
      </label>
      <Button variant="info" onClick={() => {factorFinder(num)}}>Submit</Button>
      {display && (
         <p> factor for the number {num} is {factor} </p>
      )}
        
        </>
    

    );
};