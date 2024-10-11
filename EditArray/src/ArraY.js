import { useState } from "react";

let newID = 4;

export default function ArraY(){

    const [Inputs,setInputs] = useState("");

    const [element,setelement] = useState([{id:1, name:"phone"},{id:2, name:"pc"},{id:3, name:"laptop"}]);
    const device= element.map((el)  =>{
      return <li key={el.id}>{el.name}<button onClick={()=>{deletbtn(el.id)}}>Delet</button></li>
      }); 

  function handelAdd(){
      setelement([...element,{id:newID,name:Inputs}]);
      newID++;
      setInputs("");
    }
  function deletbtn(id){
    //This is the wrong way ×××××
    // const newelement =[...element];
    // newelement.splice(id-1,1);
    // setelement(newelement);

    const newelement =element.filter((el) => {
      //This is the way to write ✓✓
      // if(el.id === id)
      // return false;
      // return true;

      // This is the best way ✓✓✓✓✓
      return el.id !== id ;
    });
    setelement(newelement);
    
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