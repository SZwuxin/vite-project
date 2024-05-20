import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom"; 
import factorFinder from '../assets/factorFinder.jpg'
import './tools.css';

export const ToolPage = () => {
    return (
      <>
        <h2>All tool from this page is taken and modified from Al Sweigart from the <a target='_blank'
            rel='noopener noreferrer' href="https://inventwithpython.com/bigbookpython/">book </a> </h2>
        <div className='card'>
        <Card>
          <Card.Body>
            <Card.Title>Factor Finder</Card.Title>
            <Card.Img src={factorFinder} className='cardimg' />

            <Card.Text>
              Find the factor of any integer!
            </Card.Text>
            <Button variant="primary"><Link className="link" to="/tools/factorFinder">
            Factor Finder
                    </Link></Button>
          </Card.Body>
        </Card>
        </div>
      </>
    );
  };
  