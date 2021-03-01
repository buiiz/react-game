import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import NavButton from './NavButton';
import { HistoryItemType } from "../types/game";
import { useTypedSelector } from '../hooks';

const useStyles = makeStyles({
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
    padding: '1rem',
    boxSizing: 'border-box',
  },
  table: {
    maxWidth: 650,
  },
});

const History: React.FC = () => {
  const classes = useStyles();
  const { history } = useTypedSelector(state => state.game);


  return <div className={classes.root}>
    <Typography variant="h4" component={'h2'}>History</Typography>

    <TableContainer component={Paper} className={classes.table}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Winner</TableCell>
            <TableCell align="right">Moves</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[...history].reverse().map((row: HistoryItemType, id: number) => (
            <TableRow key={id}>
              <TableCell component="th" scope="row">
                {
                  [
                    new Date(row.date).getHours(),
                    new Date(row.date).getMinutes(),
                  ].join(':')
                  + ' ' +
                  [
                    new Date(row.date).getDate(),
                    new Date(row.date).getMonth(),
                    new Date(row.date).getFullYear(),
                  ].join('.')
                }
              </TableCell>
              <TableCell align="right">{row.winner}</TableCell>
              <TableCell align="right">{row.moves}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <NavButton to='/'>Back</NavButton>
  </div>;
};

export default History;