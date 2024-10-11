import { useState } from "react";
export default function ArraY(){

    const [Inputs,setInputs] = useState("");
    // const element =["phone","pc","laptop"];
   // const device= element.map((el)  =>{
    // return <li>{el}</li>
    // }); 
    const [element,setelement] = useState(["phone","pc","laptop"]);
    const device= element.map((el)  =>{
      return <li>{el}</li>
      }); 
  function handelAdd(){
      setelement([...element,Inputs]);
      setInputs("");
    }
    return <>

      <div className="">
           {device}
         <div>
         <input type="text" 
          value={Inputs} 
          onChange={(e)=>{setInputs(e.target.value)}}/>
          <hr/>
          <button onClick={handelAdd}>log in</button>
          </div>
     </div>
    </>
}