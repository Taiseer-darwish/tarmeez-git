import { useParams } from "react-router-dom";
import { useContext } from "react";
import { PostContext } from "../Contexts/PostsContext";

export default function PostDetales(){
    const Posts = useContext(PostContext);
    const {PostId} = useParams();

    console.log(PostId);
    console.log(Posts);

    const Post = Posts.find((P) =>{
        return P.id === PostId
    });

    console.log(Post);
    return(
        <>
      
        </>
    )
}