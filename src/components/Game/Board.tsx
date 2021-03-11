import { makeStyles } from "@material-ui/core";
import { useTypedSelector } from "../../hooks";
import Square from "./Square";

const useStyles = makeStyles({
  root: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'repeat(3, 1fr)',
    borderRadius: '3px',
    overflow: 'hidden',
    boxShadow: '0 0 10px 0 cadetblue',
    background: 'cadetblue',
    gap: '2px'
  }
});

const Board: React.FC = () => {
  const classes = useStyles();
  const { gameState } = useTypedSelector(state => state.game);

  return <div className={classes.root}>
    {gameState.map((item, id) => {
      return <Square
        key={id}
        id={id}
        state={item}
      />
    })}
  </div>
};

export default Board;