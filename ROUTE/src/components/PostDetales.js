import { useParams } from "react-router-dom";
import { useContext } from "react";
import { PostContext } from "../Contexts/PostsContext";

export default function PostDetales(){
    const Posts = useContext(PostContext);
    const {PostId} = useParams();

    console.log(PostId);
    console.log(Posts);

    const Post = Posts.find((P) =>{
        return P.id === parseInt(PostId);
    });

    console.log(Post);
    return(
        <>
        <h1>Post Detals Page </h1>
        <h1>{Post.title}</h1>
        <p>{Post.body}</p>
        </>
    )
}