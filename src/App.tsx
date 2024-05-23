import Nav from "./components/Nav";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/main";
import {GamePage} from "./pages/games.tsx";
import {ToolPage} from "./pages/tools.tsx";
import {StoryPage} from "./pages/story.tsx";
import {ArticlePage} from "./pages/article.tsx";
import {TimeLine} from "./pages/timeline";
import { FactorFinder } from "./pages/tools/factorFinder";
import { BirthdayParadox } from "./pages/tools/birthdayParadox.tsx";
import { DiceRoller } from "./pages/tools/diceRoller.tsx";
 
function App() {
    return (
        <Router>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/games" element={<GamePage />} />
                <Route path="/tools" element={<ToolPage />} />
                <Route path="/stories" element={<StoryPage />} />
                <Route path="/articles" element={<ArticlePage />} />
                <Route path="/timeline" element = {<TimeLine/>} />
                <Route path="/tools/factorFinder" element = {<FactorFinder />}/>
                <Route path="/tools/birthdayParadox" element = {<BirthdayParadox />}/>
                <Route path="/tools/diceRoller" element = {<DiceRoller />}/>

            </Routes>
        </Router>
    );
}
 
export default App;