import { useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useAudio } from './hooks';
import { useTypedSelector } from "./hooks";
import { setFullscreen } from "./utils/fullscreen";
import Board from "./components/Board";
import Info from "./components/Info";
import Menu from "./components/Menu";
import Options from "./components/Options";
import Statistics from "./components/Statistics";

const App = () => {
  const { isFullscreen, isMusic } = useTypedSelector(state => state.options);
  const { toggle } = useAudio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3', true);

  useEffect(() => {
    isMusic ? toggle(true) : toggle(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMusic]);

  useEffect(() => {
    setFullscreen(isFullscreen)
  }, [isFullscreen])

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Menu} />
        <Route path="/game" component={Board} />
        <Route path="/info" component={Info} />
        <Route path="/options" component={Options} />
        <Route path="/statistics" component={Statistics} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
