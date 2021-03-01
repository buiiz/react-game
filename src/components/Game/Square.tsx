import { makeStyles, Zoom } from "@material-ui/core";
import { useActions, useTypedSelector } from "../../hooks";
import { PlayerType } from "../../types/game";
import { FaTimes } from 'react-icons/fa';
import { BiCircle } from 'react-icons/bi';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 'min(15vw, 15vh)',
    minWidth: 'min(15vw, 15vh)',
    fontSize: 'min(12vw, 12vh)',
    background: "white",
    boxShadow: '0 0 0 -5px lightblue',
    '&:hover': {
      cursor: "pointer",
    },
  },
});

export interface SquareProps {
  state: PlayerType,
  id: number,
}

const Square: React.FC<SquareProps> = ({ state, id }) => {
  const { move } = useActions();
  const { gameState } = useTypedSelector(state => state.game);

  const showIcon = () => {
    if (state === 'x') {
      return <Zoom in><FaTimes /></Zoom>
    } else if (state === 'o') {
      return <Zoom in><BiCircle /></Zoom>
    } else {
      return null
    }
  }

  const handleClick = () => {
    if (gameState[id] === null) {
      move(id)
    }
  }

  const classes = useStyles();
  return <div className={classes.root} onClick={handleClick}>
    {showIcon()}
  </div>;
}

export default Square;