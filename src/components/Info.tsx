import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import NavButton from './NavButton';
import { CardMedia, Link } from '@material-ui/core';

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
  }
});

const Info: React.FC = () => {
  const classes = useStyles();

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
          Created by Buiiz for <Link href='https://rs.school/js/'>"RS School"</Link>
        </Typography>
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