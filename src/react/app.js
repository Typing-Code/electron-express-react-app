import React, { useState, useEffect } from 'react';
import Header from './components/header/header';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import PostAddIcon from '@material-ui/icons/PostAdd';
import FilterNoneIcon from '@material-ui/icons/FilterNone';
import TextField from '@material-ui/core/TextField';

const axios = require('axios');

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function App(props) {

  const classes = useStyles();

  const [posts, setPosts] = useState([{}]);
  const [title, setTitle] = useState(null);

  const handleAddPost = async (e) => {
    e.preventDefault()
    await axios.post('http://localhost:3000/addpost', { title: title })
      .then(function (response) {
        loadPosts()
      })
      .catch(function (error) {
        alert('Add post ERROR' + error.message)
      });
  }

  const handleDeletePost = async (e, id) => {
    e.preventDefault()
    await axios.delete('http://localhost:3000/deletepost/' + id)
      .then(function (response) {
        loadPosts()
      })
      .catch(function (error) {
        alert('Delete post ERROR' + error.message)
      });
  }

  const loadPosts = async () => {
    await axios.get('http://localhost:3000/getposts')
      .then(function (response) {
        console.log(response.data)
        setPosts(response.data)
      })
      .catch(function (error) {
        alert('Load posts ERROR' + error.message)
      });
  }

  useEffect(() => {
    loadPosts()
  }, []);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Header />
        <Grid item xs={12} >
          <Paper className={classes.paper} style={{ display: 'flex', justifyContent: 'center' }}>
            <TextField id="standard-basic" label="Post title" onChange={(e) => { setTitle(e.target.value) }} />
            <Button size="small" onClick={(e) => { handleAddPost(e) }} variant="contained"><PostAddIcon /> Add post</Button>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h6" >
              Posts list
              </Typography>
            <div >
              <List >
                {
                  posts.map((post, index) => {
                    return <ListItem key={'post' + index}>
                      <ListItemAvatar>
                        <Avatar>
                          <FilterNoneIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={post.title}
                      />
                      <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete" onClick={(e) => { handleDeletePost(e, post.id) }}>
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  })
                }
              </List>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}