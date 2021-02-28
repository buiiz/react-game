import { Box, makeStyles, Typography } from "@material-ui/core";
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

  return <Box className={classes.list}>
    <Typography variant="h3" component={'h1'}>Tic Tac Toe</Typography>

    <NavButton size='large' to='/game'>Game</NavButton>
    <NavButton size='large' to='/options'>Options</NavButton>
    <NavButton size='large' to='/statistics'>Statistics</NavButton>
    <NavButton size='large' to='/info'>Info</NavButton>
  </Box>;
}

export default Menu;