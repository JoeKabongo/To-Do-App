import React from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import TodayIcon from '@material-ui/icons/Today';
import AddIcon from '@material-ui/icons/Add';
import ClassIcon from '@material-ui/icons/Class';
import { Link } from 'react-router-dom';
import useStyles from './style';

export default function TypographyMenu() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <MenuList>
        <MenuItem>
          <Typography variant="h3">To-Do</Typography>
        </MenuItem>

        <MenuItem Link="/" className={classes.item}>
          <ListItemIcon>
            <HomeIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">All Tasks</Typography>
        </MenuItem>
        <MenuItem Link="/" className={classes.item}>
          <ListItemIcon>
            <TodayIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit"> Today </Typography>
        </MenuItem>
        <MenuItem className={classes.item}>
          <ListItemIcon>
            <ClassIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">School</Typography>
        </MenuItem>
        <MenuItem className={classes.item}>
          <ListItemIcon>
            <ClassIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
            Shopping
          </Typography>
        </MenuItem>
        <MenuItem className={classes.item}>
          <ListItemIcon>
            <AddIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
            Add Category
          </Typography>
        </MenuItem>
        <MenuItem className={classes.item}>
          <ListItemIcon>
            <AddIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
            Add Task
          </Typography>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
