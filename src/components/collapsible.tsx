import { useState } from "react";
import { Button } from "react-bootstrap";
import { FaChevronDown } from "react-icons/fa";
import './collapsible.css'

export const Collapsible = ({date, word, image}: {date:string, word:string, image:[url:string, width:number, height: number]}) => {
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open);
    }
    
    return (
      <div>
        <div className="toggle">
        <p>{date}</p>
        <Button className='button' variant="secondary" onClick={() => toggle()}><FaChevronDown></FaChevronDown></Button>
            </div>
        <p>_____________________________________________________________________________________________________________________</p>

        
        {open &&<div>{word}</div>}
        {open&& <p></p>}
        {open && <div><img src={image[0]} width={image[1]} height={image[2]}></img> </div>}
      </div>
    );
  }