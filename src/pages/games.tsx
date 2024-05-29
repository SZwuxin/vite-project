import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import bagel from '/bagel.jpg'
import quickDraw from '/quickdraw.jpg'
import './tools.css';


export const GamePage = () => {
    return (
      <>
        <h2>All game from this page is taken and modified from Al Sweigart from the <a target='_blank'
            rel='noopener noreferrer' href="https://inventwithpython.com/bigbookpython/">book </a> </h2>
            <div className='card'>
        <Card>
          <Card.Body>
            <Card.Title className='cardTitle'>Number guesser</Card.Title>
            <Card.Img src={bagel} className='cardimg' />

            <Card.Text className='cardText'>
              Guess a number in 10 tries!
            </Card.Text>
            <button ><Link className="toollink" to="/games/numberGuesser">
            Number guesser
                    </Link></button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title className='cardTitle'>Quick draw</Card.Title>
            <Card.Img src={quickDraw} className='cardimg' />

            <Card.Text className='cardText'>
              Are you the quickest draw in the west?
            </Card.Text>
            <button ><Link className="toollink" to="/games/quickDraw">
            Quick draw
                    </Link></button>
          </Card.Body>
        </Card>
        </div>
      </>
    );
  };
  