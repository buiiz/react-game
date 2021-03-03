import { Box, Fade, makeStyles, Modal } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useActions, useTypedSelector } from "../../hooks";
import { checkDraw, checkWin } from "../../utils/checkWin";
import NavButton from "../NavButton";
import Board from "./Board";
import * as localStorage from "../../utils/localStorage";
import { PlayerType } from "../../types/game";


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
  const { newGame, closeGame, newHistoryRecord } = useActions();
  const { moves, gameState, currentPlayer, history } = useTypedSelector(state => state.game);
  const [winner, setWinner] = useState<PlayerType>(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    localStorage.set('game', {
      moves,
      gameState,
      currentPlayer
    })
  })

  useEffect(() => {
    localStorage.set('history', history)
  }, [history])

  useEffect(() => {
    const handleGameEnd = (winner: PlayerType) => {
      newHistoryRecord({
        date: new Date(),
        winner,
        moves,
      })
    }

    const winner = checkWin(gameState);
    const draw = checkDraw(gameState);

    if (winner) {
      handleGameEnd(winner)
      setWinner(winner);
      setOpen(true);
    } else if (draw) {
      handleGameEnd('draw')
      setWinner('draw');
      setOpen(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameState])

  const handleNewGame = () => {
    setWinner(null);
    setOpen(false)
    newGame();
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
          {winner === 'x' ? <h2 id="transition-modal-title">You won</h2> : null}
          {winner === 'o' ? <h2 id="transition-modal-title">You lose</h2> : null}
          {winner === 'draw' ? <h2 id="transition-modal-title">Draw</h2> : null}
          <NavButton to='/game' onClick={handleNewGame}>New Game</NavButton>
          <NavButton to='/' onClick={closeGame}>Back</NavButton>
        </div>
      </Fade>
    </Modal>
  </div>;
}

export default Game;