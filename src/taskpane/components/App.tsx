import React, { VFC } from "react";
import Progress from "./Progress";
import { HashRouter, Route, Switch, Link } from "react-router-dom";

type AppProps = {
  title: string;
  isOfficeInitialized: boolean;
};

const Home: VFC = () => {
  return <h2>Home</h2>;
};

const About: VFC = () => {
  return <h2>About</h2>;
};

const Users: VFC = () => {
  return <h2>Users</h2>;
};

const App = (props: AppProps) => {
  const { title, isOfficeInitialized } = props;

  return (
    <>
      {isOfficeInitialized ? (
        <HashRouter>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/users">Users</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/users">
                <Users />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </HashRouter>
      ) : (
        <Progress
          title={title}
          logo={require("./../../../assets/logo-filled.png")}
          message="Please sideload your addin to see app body."
        />
      )}
    </>
  );
};

export default App;
