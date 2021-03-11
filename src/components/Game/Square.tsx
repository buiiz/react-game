import { makeStyles, Zoom } from "@material-ui/core";
import { useActions, useTypedSelector } from "../../hooks";
import { PlayerType } from "../../types/game";
import { MdClose as MdCloseIcon, MdRadioButtonUnchecked as MdRadioButtonUncheckedIcon } from 'react-icons/md';

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
    const isNotEmpty = state !== '';
    if (isNotEmpty) {
      return (
        <Zoom in>
          {state === 'X' ? <MdCloseIcon /> : <MdRadioButtonUncheckedIcon />}
        </Zoom>
      )
    }
  }

  const handleClick = () => {
    if (gameState[id] === '') {
      move(id)
    }
  }

  const classes = useStyles();
  return <div className={classes.root} onClick={handleClick}>
    {showIcon()}
  </div>;
}

export default Square;