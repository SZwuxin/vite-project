import { Link } from "react-router-dom"; 
const Nav = () => {
    return (
        <>
            <div>
                    <Link to="/">
                        Home
                    </Link>
                    <Link to="/games">
                        Games
                    </Link>
                    <Link to="/timeline">
                        Timeline
                    </Link>
            </div>
        </>
    );
};
 
export default Nav;