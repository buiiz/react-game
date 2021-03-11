import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import NavButton from './NavButton';
import { CardMedia, Link, List, ListItem, ListItemText } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    minWidth: 275,
    maxWidth: 500,
  },
  title: {
    marginBottom: 8,
  },
  media: {
    objectFit: 'contain',
  },
  year: {
    marginTop: 8,
    marginBottom: -16,
  },
  list: {
    margin: 0,
    padding: 0,
  }
});

const Info: React.FC = () => {
  const classes = useStyles();
  const hotkeys = [
    { value: "ctrl + alt + n", description: 'new game' },
    { value: "ctrl + alt + k", description: 'toggle music' },
    { value: "ctrl + alt + s", description: 'toggle sounds' },
    { value: "ctrl + alt + f", description: 'toggle fullscreen' },
  ]

  return <div className={classes.root}>
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        component="img"
        alt="rsschool"
        height="140"
        image="https://rs.school/images/rs_school_js.svg"
        title="rsschool"
      />
      <CardContent>
        <Typography variant="h4" component="h2" className={classes.title}>Info</Typography>
        <Typography variant="body2" component="p">
          Created by Buiiz for <Link href='https://rs.school/js/'>&quot;RS School&quot;</Link>
        </Typography>
        <br />
        <Typography variant="h6" component="h3" className={classes.title}>Hot Keys:</Typography>
        <List dense={true} className={classes.list}>
          {hotkeys.map(item => (
            <ListItem key={item.value}>
              <ListItemText
                primary={item.value}
                secondary={item.description}
              />
            </ListItem>
          )
          )}
        </List>
        <Typography variant="body2" component="p" color="textSecondary" className={classes.year}>2021</Typography>
      </CardContent>
      <CardActions>
        <Button href="https://github.com/buiiz">GitHub</Button>
        <NavButton to='/'>Back</NavButton>
      </CardActions>
    </Card>
  </div>;
};

export default Info;