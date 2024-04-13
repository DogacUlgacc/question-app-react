import React from "react";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Link } from "react-router-dom";
import "./Post.css";
import { useState } from 'react';


function PostForm(props) {
  const { userName, userId,refreshPosts} = props;
  const [text,setText] = useState("");
  const [title,setTitle] = useState("");
  const[isSent,setIsSent] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault(); 
    savePost();
    refreshPosts();
    setIsSent(true);
    setText("");
    setTitle("");
} 
  const handleTitle = (value) => {
    setTitle(value);
    setIsSent(false);
  }
  const handleText = (value) => {
    setText(value);
    setIsSent(false)
  }

  const savePost = () => {
    fetch("/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: title,
          userId: userId,
          text: text
        }), 
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(data => {
        console.log("Post saved successfully:", data);

    })
    .catch(error => {
        console.error("There was a problem saving the post:", error);
    });
};


  return (
    <div  className="postContainer">
      <Card  sx={{ maxWidth: 800 }}>
         <CardHeader
          avatar={
            <Button className="buttonContainer" color="inherit" component={Link} to={{ pathname: '/users/' + userId }}>
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                {userName.charAt(0).toUpperCase()}
              </Avatar>
            </Button>
          }
          title={
          <OutlinedInput
          id ="outlined-adorment-amount"
          multiline
          placeholder="Title"
          inputProps={{maxLength : 25}}
          fullWidth
          value = {title}
          onChange={ (input ) => handleTitle (input.target.value)}
          >
            
          </OutlinedInput>}
          subheader=""/>
      
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          <OutlinedInput
          id ="outlined-adorment-amount"
          multiline
          value = {text}

          placeholder="Text"
          onChange={ (input) => handleText (input.target.value)}
          inputProps={{maxLength : 255}}
          endAdornment= {
            <InputAdornment position ="end">
                <Button 
                variant="contained"
                onClick={handleSubmit}
                >Post</Button>
            </InputAdornment>
          }>
          </OutlinedInput>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default PostForm;
