import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Post } from "../types";

export function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    fetch("http://localhost:4000/posts")
      .then((resp) => resp.json())
      .then((postsFromServer) => setPosts(postsFromServer));
  }, []);

  return (
    <ul className="posts">
      {posts.map((item) => (
        <li key={item.id} className="posts-section">
          <div className="post-details">
            <div className="user-section">
              <img className="profile-photo" src={item.user.photo}></img>
              <h5>{item.user.name}</h5>
            </div>
            <h4>{item.content}</h4>
          </div>
          <Link to={`/post/${item.id}`}>
            <img className="img-post" src={item.image}></img>
          </Link>
        </li>
      ))}
    </ul>
  );
}
