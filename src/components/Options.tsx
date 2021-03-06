import React, { useEffect } from "react";
import { List, makeStyles, Typography } from "@material-ui/core";
import { FullscreenRounded, MusicNoteRounded, VolumeUpRounded } from '@material-ui/icons';
import { useActions, useTypedSelector } from "../hooks";
import NavButton from "./NavButton";
import OptionListItem from "./OptionListItem";
import * as StorageService from "../utils/localStorage";

const useStyles = makeStyles({
  options: {
    width: '100%',
    maxWidth: 360,
  },
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Settings: React.FC = () => {
  const classes = useStyles();
  const { isSound, isMusic, isFullscreen } = useTypedSelector(state => state.options);
  const { toggleSound, toggleMusic, toggleFullscreen } = useActions();

  useEffect(() => {
    StorageService.set('options', {
      isSound,
      isMusic,
      isFullscreen
    })
  }, [isSound, isMusic, isFullscreen])


  return <div className={classes.root}>
    <Typography variant="h4" component={'h2'}>Options</Typography>

    <List className={classes.options}>
      <OptionListItem
        icon={<VolumeUpRounded />}
        checked={isSound}
        onChange={() => toggleSound()}>
        Sound
      </OptionListItem>

      <OptionListItem
        icon={<MusicNoteRounded />}
        checked={isMusic}
        onChange={() => toggleMusic()}>
        Music
      </OptionListItem>

      <OptionListItem
        icon={<FullscreenRounded />}
        checked={isFullscreen}
        onChange={() => toggleFullscreen()}>
        Fullscreen
        </OptionListItem>
    </List>

    <NavButton to='/'>Back</NavButton>
  </div>;
};

export default Settings;
