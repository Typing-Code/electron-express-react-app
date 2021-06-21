import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Paper className={classes.paper} style={{ background: '#2196f3', color: 'white' }}>
        <h1>Welcome to Electron Express React LowDB App</h1>
      </Paper>
    </Grid>
  )
}