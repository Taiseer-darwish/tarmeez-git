import { useState } from "react";
export default function Form(){

    const [FormInputs,setFormInputs] = useState({Name:"",password:"", Age:"" })
    return <>

  <div className="">
  <form
      onSubmit={(e)=>e.preventDefault()}>

        <label>Name</label>
        <input type="text" 
        value={FormInputs.Name} 
        placeholder="inter your name" 
        onChange={(e)=>setFormInputs({...FormInputs,Name: e.target.value})}/>
        <hr/>

        <label>password</label>
        <input type="text" 
        value={FormInputs.password} 
        placeholder="inter your password" 
        onChange={(e)=>setFormInputs({...FormInputs,password: e.target.value})}/>
        <hr></hr>

        <label>Age</label>
        <input type="text" 
        value={FormInputs.Age} 
        placeholder="inter your Age" 
        onChange={(e)=>setFormInputs({...FormInputs,Age: e.target.value})}/>
        <hr/>

        <button>log in</button>
    </form>
  </div>
    </>
}