import { Box, makeStyles, Typography } from "@material-ui/core";
import { useActions, useTypedSelector } from "../hooks";
import NavButton from "./NavButton";

const useStyles = makeStyles({
  list: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem'
  },
});

const Menu: React.FC = () => {
  const classes = useStyles();
  const { newGame } = useActions();
  const { gameState } = useTypedSelector(state => state.game);

  return <Box className={classes.list}>
    <Typography variant="h3" component={'h1'}>Tic Tac Toe</Typography>

    <NavButton size='large' to='/game' onClick={newGame}>New Game</NavButton>
    {gameState.length > 0 ? <NavButton size='large' to='/game'>Continue</NavButton> : null}
    <NavButton size='large' to='/options'>Options</NavButton>
    <NavButton size='large' to='/history'>History</NavButton>
    <NavButton size='large' to='/info'>Info</NavButton>
  </Box>;
}

export default Menu;