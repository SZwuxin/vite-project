import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom"; 
import factorFinder from '/factorFinder.jpg'
import birthday from '/birthday.jpg'
import dice from '/dice.jpg'
import './tools.css';

export const ToolPage = () => {
    return (
      <>
        <h2>All tool from this page is taken and modified from Al Sweigart from the <a target='_blank'
            rel='noopener noreferrer' href="https://inventwithpython.com/bigbookpython/">book </a> </h2>
        <div className='card'>
        <Card>
          <Card.Body>
            <Card.Title className='cardTitle'>Factor finder</Card.Title>
            <Card.Img src={factorFinder} className='cardimg' />

            <Card.Text className='cardText'>
              Find the factor of any integer!
            </Card.Text>
            <button ><Link className="toollink" to="/tools/factorFinder">
            Factor finder
                    </Link></button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title className='cardTitle'>Birthday faradox</Card.Title>
            <Card.Img src={birthday} className='cardimg' />

            <Card.Text className='cardText'>
              See the birthday paradox in action!
            </Card.Text>
            <button ><Link className="toollink" to="/tools/birthdayParadox">
            Birthday paradox
                    </Link></button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title className='cardTitle'>Dice roller</Card.Title>
            <Card.Img src={dice} className='cardimg' />

            <Card.Text className='cardText'>
              Roll the dice using dnd notation!
            </Card.Text>
            <button ><Link className="toollink" to="/tools/diceRoller">
            Dice roller
                    </Link></button>
          </Card.Body>
        </Card>
        </div>
      </>
    );
  };
  