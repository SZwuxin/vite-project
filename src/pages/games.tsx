import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import bagel from '/bagel.jpg'

export const GamePage = () => {
    return (
      <>
        <h2>All game from this page is taken and modified from Al Sweigart from the <a target='_blank'
            rel='noopener noreferrer' href="https://inventwithpython.com/bigbookpython/">book </a> </h2>
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
      </>
    );
  };
  