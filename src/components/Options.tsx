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

const Settings: React.FC = () => {
  const classes = useStyles();

  return <div className={classes.list}>
    <h2>Options</h2>
    <p>Sound</p>
    <p>Music</p>
    <p>Theme</p>
    <p>Fullscreen</p>
    <NavButton to='/'>Back</NavButton>
  </div>;
};

export default Settings;
