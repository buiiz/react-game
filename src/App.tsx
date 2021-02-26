import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Board from "./components/Board";
import Info from "./components/Info";
import Menu from "./components/Menu";
import Settings from "./components/Settings";
import Statistics from "./components/Statistics";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Menu} />
          <Route path="/game" component={Board} />
          <Route path="/info" component={Info} />
          <Route path="/settings" component={Settings} />
          <Route path="/statistics" component={Statistics} />
          <Redirect to="/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
