import { useState } from "react";
let newID = 4;
export default function ArraY() {
  const [Inputs, setInputs] = useState("");

  const [element, setelement] = useState([
    { id: 1, name: "phone" },
    { id: 2, name: "pc" },
    { id: 3, name: "laptop" },
  ]);
  const device = element.map((el) => {
    return (
      <li key={el.id}>
        {el.name}
        <button
          onClick={() => {
            deletbtn(el.id);
          }}
        >
          Delet
        </button>
        <button
          onClick={() => {
            Edittbtn(el.id);
          }}
        >
          Edit
        </button>
      </li>
    );
  });
  function handelAdd() {
    setelement([...element, { id: newID, name: Inputs }]);
    newID++;
    setInputs("");
  }
  function deletbtn(id) {
    const newelement = element.filter((el) => {
      return el.id !== id;
    });
    setelement(newelement);
  }
  function Edittbtn(id) {
    const newelement = element.map((el) => {
      if (el.id === id) {
        let theElementEdited = { ...element, name: el.name + " 23" };
        return theElementEdited;
      } else {
        return el;
      }
    });
    setelement(newelement);
  }
  return (
    <>
      <div className="">
        {device}
        <div>
          <input
            type="text"
            value={Inputs}
            onChange={(e) => {
              setInputs(e.target.value);
            }}
          />
          <hr />
          <button onClick={handelAdd}>log in</button>
        </div>
      </div>
    </>
  );
}
