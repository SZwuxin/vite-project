import Nav from "./components/Nav";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/main";
import {GamePage} from "./pages/games";
import {TimeLine} from "./pages/timeline";
 
function App() {
    return (
        <Router>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/games" element={<GamePage />} />
                <Route path="/timeline" element = {<TimeLine/>} />
            </Routes>
        </Router>
    );
}
 
export default App;