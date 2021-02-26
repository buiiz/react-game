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
    <NavButton to='/game' text='Game' />
    <NavButton to='/settings' text='Settings' />
    <NavButton to='/statistics' text='Statistics' />
    <NavButton to='/info' text='Info' />
  </div>;
}

export default Menu;