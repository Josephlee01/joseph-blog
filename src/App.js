import { useState, useEffect } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Create from "./components/Create";
import BlogDetails from "./components/BlogDetails";
import NotFound from "./components/NotFound";
import Auth from "./components/Auth";
import { auth } from "./fbase";
import { onAuthStateChanged } from "@firebase/auth";

function App() {
  const [userInfo, setUserInfo] = useState("");
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserInfo({
          displayName: user.displayName,
          uid: user.uid,
        });
      } else {
        setUserInfo(null);
      }
    });
  }, []);

  const isLoggedIn = Boolean(userInfo);
  return (
    <Router>
      <div className="App">
        <Navbar isLoggedIn={isLoggedIn} userInfo={userInfo} />
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            {isLoggedIn ? (
              <Route path="/create" >
                <Create userInfo={userInfo} />
              </Route>
            ) : (
              <Route path="/auth">
                <Auth />
              </Route>
            )}
            <Route path="/blogs/:id">
              <BlogDetails />
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
