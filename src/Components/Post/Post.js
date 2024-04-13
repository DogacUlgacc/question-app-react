  import React, { useState } from "react";
  import { styled } from '@mui/material/styles';
  import Card from '@mui/material/Card';
  import CardHeader from '@mui/material/CardHeader';
  import CardContent from '@mui/material/CardContent';
  import CardActions from '@mui/material/CardActions';
  import Collapse from '@mui/material/Collapse';
  import Avatar from '@mui/material/Avatar';
  import IconButton from '@mui/material/IconButton';
  import Typography from '@mui/material/Typography';
  import { red } from '@mui/material/colors';
  import FavoriteIcon from '@mui/icons-material/Favorite';
  import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
  import Button from '@mui/material/Button';
  import { Link } from "react-router-dom";
  import "./Post.css";

  
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  function Post(props) {
    const { title, text ,userName, userId} = props;
    const [expanded, setExpanded] = useState(false);
   
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    const [like,setLike] = useState(false);
    const handleLike = () => {
      setLike(!like);
    }
    

    return (
      <div  className="postContainer">
        <Card  sx={{ maxWidth: 325 }}>
          <CardHeader
            avatar={
              <Button className="buttonContainer" color="inherit" component={Link} to={{ pathname: '/users/' + userId }}>
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  {userName.charAt(0).toUpperCase()}
                </Avatar> 
              </Button>
            }
            title=  {title}
            subheader=""/>
        
          <CardContent>
            <Typography variant="body2" color="text.secondary">
            {text}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton onClick={handleLike} aria-label="add to favorites">
              <FavoriteIcon style={like ? {color:"red" }  : null} />
            </IconButton>
            <IconButton aria-label="share">
  
            </IconButton>
              <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <div> BURAYA EXPANDED EDİLMİŞ TEXT GELECEK</div>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }

  export default Post;
