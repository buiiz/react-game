import { useEffect } from "react";
import { useHistory } from "react-router";
import { Redirect, Route, Switch } from "react-router-dom";
import { useActions } from "./hooks";
import Game from "./components/Game";
import History from "./components/History";
import Info from "./components/Info";
import Menu from "./components/Menu";
import Options from "./components/Options";
import { useMusic, useTypedSelector } from './hooks';
import { setFullscreen } from "./utils/fullscreen";

const App = () => {
  const history = useHistory();
  const { toggleFullscreen, toggleMusic, newGame, toggleSound } = useActions();
  const { isFullscreen, isMusic } = useTypedSelector(state => state.options);
  const { toggle } = useMusic('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3');

  useEffect(() => {
    isMusic ? toggle(true) : toggle(false);
  }, [isMusic]);

  useEffect(() => {
    setFullscreen(isFullscreen);
  }, [isFullscreen])

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.ctrlKey && e.altKey) {
      switch (e.code) {
        case 'KeyF':
          toggleFullscreen();
          break;
        case 'KeyK':
          toggleMusic();
          break;
        case 'KeyS':
          toggleSound();
          break;
        case 'KeyR':
          newGame();
          history.push("/game");
          break;
        default:
          break;
      }
    }
  }

  useEffect(() => {
    document.addEventListener('keyup', handleKeyUp, false);
    return () => {
      document.removeEventListener('keyup', handleKeyUp, false);
    };
  }, [])

  return (
    <Switch>
      <Route exact path="/">
        <Menu />
      </Route>
      <Route path="/game" >
        <Game />
      </Route>
      <Route path="/info" >
        <Info />
      </Route>
      <Route path="/options">
        <Options />
      </Route>
      <Route path="/history">
        <History />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
