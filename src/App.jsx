import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FormPage from "./pages/FormPage";
import SuccessPage from "./pages/SuccessPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/siparis">
          <FormPage />
        </Route>
        <Route path="/basarili">
          <SuccessPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
