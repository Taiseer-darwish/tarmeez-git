
import Header from "./components/header";
import Post from "./components/post";
import ALLptn from "./components/Allbtn";



export default function APP(){
    return <div> 
        <Header/>
    <div style={{display:"flex",justifyContent:"center"}}>
      <div style={{display:"flex",width:"60%"}}>
        <div style={{width:"70%"}}>
         <Post Name="20" Content="this hs the first post">
          <p>children</p>
          </Post>
         <Post Name="hello world" Content="this hs the second-post"/>
         <Post Name="Post 3" Content="this hs the post-3"/>
         <Post/>
        </div>
        <div style={{width:"30%"}}>
        <ALLptn/>
        </div>
     </div>
    </div>
      
    </div> 
}
