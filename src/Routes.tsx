import { BrowserRouter as Router, Route } from 'react-router-dom';
import { GamePage } from './pages/games';
import Main from "./pages/main"

export const Routes = () => {
  return (
    <Router>
        <Route path="/">
          <Main />
        </Route>
        <Route path="/games">
          <GamePage />
        </Route>
    </Router>
  );
};
