
import Header from "./components/header";
import Post from "./components/post";
import ALLptn from "./components/Allbtn";
import {Data} from "../src/Data";
console.log(Data);



export default function APP(){

  const showData=Data.map((el)=><Post key={el.id}  name={el.name} Conten={el.Conten} />)
    return <div> 
        <Header/>
    <div style={{display:"flex",justifyContent:"center"}}>
      <div style={{display:"flex",width:"60%"}}>
        <div style={{width:"70%"}}>
        {showData}
        </div>
        <div style={{width:"30%"}}>
        <ALLptn/>
        </div>
     </div>
    </div>
      
    </div> 
}
