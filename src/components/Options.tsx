import React from "react";
import { createStyles, List, makeStyles, Theme, Typography } from "@material-ui/core";
import { FullscreenRounded, MusicNoteRounded, PaletteRounded, VolumeUpRounded } from '@material-ui/icons';
import { useActions, useTypedSelector } from "../hooks";
import NavButton from "./NavButton";
import OptionListItem from "./OptionListItem";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    options: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    root: {
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  }),
);

const Settings: React.FC = () => {
  const classes = useStyles();
  const { isSound, isMusic, isFullscreen, isDarkTheme } = useTypedSelector(state => state.options);
  const { toggleSound, toggleMusic, toggleFullscreen, toggleTheme } = useActions();

  return <div className={classes.root}>
    {/* <h2>Options</h2> */}
    <Typography variant="h4">Options</Typography>
    <List className={classes.options}>
      <OptionListItem
        icon={<VolumeUpRounded />}
        checked={isSound}
        onChange={() => toggleSound()}
      >
        Sound (under development)
      </OptionListItem>

      <OptionListItem
        icon={<MusicNoteRounded />}
        checked={isMusic}
        onChange={() => toggleMusic()}
      >
        Music  (under development)
      </OptionListItem>

      <OptionListItem
        icon={<PaletteRounded />}
        checked={isDarkTheme}
        onChange={() => toggleTheme()}
      >
        Dark Mode  (under development)
      </OptionListItem>

      <OptionListItem
        icon={<FullscreenRounded />}
        checked={isFullscreen}
        onChange={() => toggleFullscreen()}
      >
        Fullscreen
        </OptionListItem>
    </List>
    <NavButton to='/'>Back</NavButton>
  </div>;
};

export default Settings;
