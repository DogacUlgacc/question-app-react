import React, { useEffect, useState } from "react";

function Comment() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [commentList, setCommentList] = useState([]);

   

    useEffect(() => {
        fetch("/comment")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setCommentList(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, [])

    if (error) {
        return <div>HATA!!</div>;
    } else if (!isLoaded) {
        return <div>Loading</div>;
    } else {
        return (
            <ul>
                {commentList.map(comment => (
                    <li key={comment.id}>{comment.text}</li>
                ))}
            </ul>
        );
    }
}

export default Comment;
