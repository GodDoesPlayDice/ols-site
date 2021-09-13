import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import LinkButton from "../components/LinkButton";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MyAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Ordinary Least Squares
          </Typography>
          <LinkButton
            to='/games'
          >
            Games
          </LinkButton>
          <LinkButton
            to='/about'
          >
            About us
          </LinkButton>
          <LinkButton
            to='/support'
          >
            Support
          </LinkButton>
          <LinkButton
            to='/privacy'
          >
            Privacy policy
          </LinkButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
