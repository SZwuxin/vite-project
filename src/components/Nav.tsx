import { Link } from "react-router-dom"; 
import './Nav.css';
const Nav = () => {
    return (
        <>
            <div className="navBar">
                    <Link className="link" to="/">
                        Home
                    </Link>
                    <Link className="link" to="/stories">
                        Stories
                    </Link>
                    <Link className="link" to="/articles">
                        Articles
                    </Link>
                    <Link className="link" to="/games">
                        Games
                    </Link>
                    <Link className="link" to="/tools">
                        Tools
                    </Link>
                    <Link className="link" to="/timeline">
                        Timeline
                    </Link>
            </div>
        </>
    );
};
 
export default Nav;