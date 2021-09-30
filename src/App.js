import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Create from "./components/Create";
import BlogDetails from "./components/BlogDetails";
import NotFound from "./components/NotFound";
import Auth from "./components/Auth";
import { useState } from "react/cjs/react.development";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <Router>
      <div className="App">
        <Navbar isLoggedIn={Boolean(isLoggedIn)} />
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="/auth">
              <Auth />
              </Route>
            <Route path="*">
              <NotFound />
            </Route>
            <Redirect from="*" to="/" />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
