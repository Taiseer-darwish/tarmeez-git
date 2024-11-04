import { Link } from "react-router-dom";
import { useContext } from "react";
import { PostContext } from "../Contexts/PostsContext";

export default function PostList() {
    const Posts =  useContext(PostContext)
    let PostData = Posts.map((post) => {
    return (
    <Link key={post.id} to={`/Post/${post.id}`}>
      <div>
        <h1>{post.title}</h1>
      </div>
    </Link>
    );
  });
  return <>{PostData}</>;
}
