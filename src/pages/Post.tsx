import { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import { Post, User } from "../types";

export function Post() {
    const [post, setPost] = useState<Post | null>(null);
    const [user, setUser] = useState<User | null>(null);
    const params = useParams();

    useEffect(() => {
        fetch(`http://localhost:4000/posts/${params.itemId}`)
          .then((resp) => resp.json())
          .then((data) => setPost(data));
      }, []);
    

      useEffect(() => {
        fetch(`http://localhost:4000/users/1`)
          .then((resp) => resp.json())
          .then((data) => setUser(data));
      }, []);

      return (
        <div className="post">
          <div className="user-details">
            <img src={post?.user.photo}></img>
            <h3>{post?.user.name}</h3>
          </div>
          <div className="post-details">
            <h2>{post?.user.name}</h2>
            <img src={post?.image} />
            <p>{post?.content}</p>
            <div className="likes-section">
              <button
                onClick={() => {
                  fetch(`http://localhost:4000/likes`, {
                    method: "POST",
                    headers: {
                      "content-type": "application/json",
                    },
                    body: JSON.stringify({
                      userId: user?.id,
                      postId: post?.id,
                    }),
                  });
                }}
              >
                LIKE
              </button>
              <h3>{post?.likes.length} likes</h3>
            </div>
            <div className="comment-section">
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  let newComment = {
                    postId: post?.id,
                    userId: 1,
                    comment: event.target.content.value,
                  };
                  fetch("http://localhost:4000/comments", {
                    method: "POST",
                    headers: {
                      "content-type": "application/json",
                    },
                    body: JSON.stringify(newComment),
                  })
                    .then((resp) => resp.json())
                    .then((data) => setPost(data));
    
                  event.target.reset();
                }}
              >
                <input name="comment" placeholder="enter your comment..."></input>
                <button>Submit</button>
              </form>
              <ul className="all-comments">
                Comments
                {post.comments.reverse().map((comment) => (
                  <li className="comments-li">
                    <img src={comment.user.image}></img>
                    <h4>{comment.user.name}</h4>
                    <h4 className="comment-h4">{comment.comment}</h4>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      );
    }