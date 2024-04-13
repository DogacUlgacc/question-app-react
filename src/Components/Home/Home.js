import React, { useEffect, useState } from "react";
import Post from "../Post/Post.js";
import Container from '@mui/material/Container';
import "./Home.css"
import PostForm from "../Post/PostForm.js";
    
function Home(){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [postList, setPostList] = useState([]);

    const refreshPosts = ( ) =>  {
        fetch("/posts")
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setPostList(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        );
    }

    useEffect(() => {
      refreshPosts();
    }, [postList])

    if (error) {
        return <div>HATA!!</div>;
    } else if (!isLoaded) {
        return <div>Loading</div>;
    } else {
        return (

           <Container maxWidth="sm">
                <div>
                    <PostForm
                    userId = {1} userName= {"post.userName"} refreshPosts ={refreshPosts}
                    />
                    {postList.map(post => ( 
                    <Post  userId = {post.userId} userName= {post.userName} title ={post.title}  text ={post.text} />))}
                </div>
           </Container>
        );
    }

}

export default Home;
