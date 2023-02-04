import Home from "./Home";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./create";
import BlogDetails from "./BlogDetail";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/create">
          <Create />
        </Route>
        <Route exact path="/create/:id">
          <BlogDetails/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
