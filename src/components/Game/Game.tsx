import { Box, Fade, makeStyles, Modal, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useActions, useAudio, useTypedSelector } from "../../hooks";
import { checkWin } from "../../utils/checkWin";
import NavButton from "../NavButton";
import Board from "./Board";
import * as StorageService from "../../utils/localStorage";
import { PlayerType } from "../../types/game";
import { moveO } from "../../utils/ai";

const useStyles = makeStyles({
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: 'white',
    border: '2px solid #000',
    boxShadow: '0 0 5 0 black',
    padding: '2rem'
  },
});

const Game: React.FC = () => {
  const classes = useStyles();
  const { newGame, closeGame, newHistoryRecord, move } = useActions();
  const { moves, gameState, currentPlayer, history } = useTypedSelector(state => state.game);
  const { isSound } = useTypedSelector(state => state.options);
  const [winner, setWinner] = useState<PlayerType>('')
  const [open, setOpen] = useState(false)
  const { toggle } = useAudio('https://www.fesliyanstudios.com/play-mp3/7757');

  const handleGameEnd = (winner: PlayerType) => {
    newHistoryRecord({
      date: new Date(),
      winner,
      moves,
    })
  }

  useEffect(() => {
    const isGameStarted = gameState.includes('X') || gameState.includes('O');
    if (isSound && isGameStarted) {
      toggle(true)
    } else {
      toggle(false)
    }
  }, [gameState, isSound]);

  useEffect(() => {
    StorageService.set('game', {
      moves,
      gameState,
      currentPlayer
    })
  }, [moves, gameState, currentPlayer])

  useEffect(() => {
    if (currentPlayer === 'O') {
      const id = moveO(gameState) - 1;
      setTimeout(() => move(id), 300)
    }
  }, [currentPlayer, gameState])

  useEffect(() => {
    StorageService.set('history', history)
  }, [history])

  useEffect(() => {
    const winner = checkWin(gameState);

    if (winner) {
      handleGameEnd(winner)
      setWinner(winner);
      setOpen(true);
    }
  }, [gameState])

  const handleNewGame = () => {
    setWinner('');
    setOpen(false)
    newGame();
  }

  const showWinnerMessage = () => {
    switch (winner) {
      case 'X':
        return <Typography variant="h3">You won</Typography>
      case 'O':
        return <Typography variant="h3">You lose</Typography>
      case 'draw':
        return <Typography variant="h3">Draw</Typography>
      default:
        break;
    }
  }

  return <div className={classes.root}>
    <Box>Moves: {moves}</Box>
    <Board />
    <NavButton to='/'>Back</NavButton>

    <Modal
      open={open}
      className={classes.modal}
      aria-labelledby="simple-modal-title"
    >
      <Fade in={open}>
        <div className={classes.paper}>
          {showWinnerMessage()}
          <NavButton to='/game' onClick={handleNewGame}>New Game</NavButton>
          <NavButton to='/' onClick={closeGame}>Back</NavButton>
        </div>
      </Fade>
    </Modal>
  </div>;
}

export default Game;