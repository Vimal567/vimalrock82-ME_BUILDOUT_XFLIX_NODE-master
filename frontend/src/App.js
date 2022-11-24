import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import VideoViewPage from "./Components/VideoViewPage";

export const config = {
  endpoint: `http://localhost:8082/v1`,
};

function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/video/:id" component={VideoViewPage} />
        </Switch>
      </React.StrictMode>
      {/* <LandingPage /> */}
    </div>
  );
}

export default App;