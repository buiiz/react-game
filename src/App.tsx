import { useEffect } from "react";
import { useHistory } from "react-router";
import { Redirect, Route, Switch } from "react-router-dom";
import { useActions } from "./hooks";
import Game from "./components/Game";
import History from "./components/History";
import Info from "./components/Info";
import Menu from "./components/Menu";
import Options from "./components/Options";
import { useAudio, useTypedSelector } from './hooks';
import { setFullscreen } from "./utils/fullscreen";

const App = () => {
  const history = useHistory();
  const { toggleFullscreen, toggleMusic, newGame, toggleSound } = useActions();
  const { isFullscreen, isMusic } = useTypedSelector(state => state.options);
  const { toggle } = useAudio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3', true);

  useEffect(() => {
    isMusic ? toggle(true) : toggle(false);
  }, [isMusic]);

  useEffect(() => {
    setFullscreen(isFullscreen);
  }, [isFullscreen])

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.ctrlKey && e.altKey && e.key === 'f') {
      toggleFullscreen();
    }
    if (e.ctrlKey && e.altKey && e.key === 'k') {
      toggleMusic();
    }
    if (e.ctrlKey && e.altKey && e.key === 's') {
      toggleSound();
    }
    if (e.ctrlKey && e.altKey && e.key === 'n') {
      newGame();
      history.push("/game");
    }
  }

  useEffect(() => {
    document.addEventListener('keyup', handleKeyUp, false);
    return () => {
      document.addEventListener('keyup', handleKeyUp, false);
    };
  }, [])

  return (
    <Switch>
      <Route exact path="/" component={Menu} />
      <Route path="/game" component={Game} />
      <Route path="/info" component={Info} />
      <Route path="/options" component={Options} />
      <Route path="/history" component={History} />
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
