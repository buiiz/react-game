import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useTypedSelector } from "./hooks";
import { setFullscreen } from "./utils/fullscreen";
import Board from "./components/Board";
import Info from "./components/Info";
import Menu from "./components/Menu";
import Options from "./components/Options";
import Statistics from "./components/Statistics";

const App = () => {
  const { isDarkTheme, isFullscreen } = useTypedSelector(state => state.options);
  const theme = createMuiTheme({
    palette: { type: isDarkTheme ? 'dark' : 'light', }
  });

  useEffect(() => {
    setFullscreen(isFullscreen)
  }, [isFullscreen])

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Menu} />
            <Route path="/game" component={Board} />
            <Route path="/info" component={Info} />
            <Route path="/options" component={Options} />
            <Route path="/statistics" component={Statistics} />
            <Redirect to="/" />
          </Switch>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
