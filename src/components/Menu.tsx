import { makeStyles } from "@material-ui/core";
import NavButton from "./NavButton";

const useStyles = makeStyles({
  list: {
    width: '100vw',
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

  return <div className={classes.list}>
    <h1>Tic Tac Toe</h1>
    <NavButton size='large' to='/game'>Game</NavButton>
    <NavButton size='large' to='/options'>Options</NavButton>
    <NavButton size='large' to='/statistics'>Statistics</NavButton>
    <NavButton size='large' to='/info'>Info</NavButton>
  </div>;
}

export default Menu;