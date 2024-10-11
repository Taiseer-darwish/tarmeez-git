
import Header from "./components/header";
import Post from "./components/post";
import ALLptn from "./components/Allbtn";



export default function APP(){
    return <div> 
        <Header/>
    <div style={{display:"flex",justifyContent:"center"}}>
      <div style={{display:"flex",width:"60%"}}>
        <div style={{width:"70%"}}>
         <Post/>
         <Post/>
         <Post/>
         <Post/>
        </div>
        <div style={{width:"30%"}}>
        <ALLptn/>
        </div>
     </div>
    </div>
      
    </div> 
}
