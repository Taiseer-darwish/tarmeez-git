import { useState } from "react";
import IfDeelet from "./components/IfDelete";
let NewId =1;
export default function Test() {
  const [input, setinput] = useState("");
  const [elements, setelements] = useState([{ id: 0, content: "" }]);
  const [Deelet, setDeelet] = useState("");


  const device = elements.map((el) => {
    return (
      <li key={el.id}>
        {el.content}
        <i className="fa-solid fa-pencil" onClick={()=>HandelEdit(el.id)}></i>
        <i className="fa-solid fa-trash" onClick={()=>HandelDelete(el.id)}></i>
      </li>
    );
  });

  function HandelAdd() {
    setelements([...elements, { id: NewId , content: input }]);
    NewId++;
    setinput("");
  }
  function HandelEdit(id){

  }
  function HandelDelete(id){
    setDeelet(<IfDeelet Yes={()=>HandelYes(id)} No={HandelNo}/>)
  }
  function HandelYes(id){
    const NewElement=elements.filter((e) =>{
      return (e.id !== id)
    });
    setelements(NewElement);
    HandelNo();
  }
  function HandelNo(){
    setDeelet("")
  }

  return (
    <body>
      <section className=" w-full bg-[#161618] h-screen flex justify-center items-center text-white">
        <div className=" content w-[80%] bg-zinc-900 text-center p-5 rounded-lg  border-solid border-2 border-teal-700">
          <div className=" flex justify-between items-center border-solid border-2 border-teal-700  bg-zinc-900">
            <input
              className=" w-[100%] bg-transparent p-2 "
              type="text"
              placeholder="Add Your Task"
              value={input}
              onChange={(e) => {
                setinput(e.target.value);
              }}
            />
            <div>
              <i
                className=" fa-solid fa-plus font-bold text-2xl p-2 text-teal-700 "
                onClick={HandelAdd}
              ></i>
            </div>
          </div>
          <div>{device}</div>
        </div>
      </section>
      <div>{Deelet}</div>
    </body>
  );
}
//<i class="fa-regular fa-circle-check"></i>
//<i class="fa-regular fa-circle"></i>
