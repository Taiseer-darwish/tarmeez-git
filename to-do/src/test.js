import { useState } from "react";
import IfDeelet from "./components/IfDelete";
let NewId = 1;

export default function Test() {
  const [input, setinput] = useState("");
  const [elements, setelements] = useState([
    { id: 0, content: "", isEditing: false, EditIcone: true },
  ]);
  const [Deelet, setDeelet] = useState("");

  const device = elements.map((el) => {
    return (
      <div className=" flex justify-between p-2 my-3 border-dashed border-2 border-gray-500 rounded-md">
        <div>
          <li key={el.id}>
            {el.isEditing ? (
              <input
                type="text"
                value={el.content}
                onChange={(e) => handleInputChange(el.id, e.target.value)}
                autoFocus
              />
            ) : (
              <>{el.content}</>
            )}
          </li>
        </div>

        <div>
          {el.EditIcone ? (
            <i
              className="fa-solid fa-pencil"
              onClick={() => HandelEdit(el.id)}
            ></i>
          ) : (
            <i
              class="fa-regular fa-circle-check"
              onClick={() => handleSave(el.id)}
            ></i>
          )}
          <i
            className="fa-solid fa-trash"
            onClick={() => HandelDelete(el.id)}
          ></i>
        </div>
      </div>
    );
  });

  function HandelAdd() {
    setelements([
      ...elements,
      { id: NewId, content: input, isEditing: false, EditIcone: true },
    ]);
    NewId++;
    setinput("");
  }

  function HandelEdit(id) {
    const updatedElements = elements.map((el) => {
      if (el.id === id) {
        return { ...el, isEditing: true, EditIcone: false };
      } else {
        return el;
      }
    });
    setelements(updatedElements);
  }

  function handleInputChange(id, newValue) {
    const updatedElements = elements.map((el) => {
      if (el.id === id) {
        return { ...el, content: newValue };
      } else {
        return el;
      }
    });
    setelements(updatedElements);
  }

  function handleSave(id) {
    const updatedElements = elements.map((el) => {
      if (el.id === id) {
        return { ...el, isEditing: false, EditIcone: true };
      } else {
        return el;
      }
    });
    setelements(updatedElements);
  }

  function HandelDelete(id) {
    setDeelet(<IfDeelet Yes={() => HandelYes(id)} No={HandelNo} />);
  }

  function HandelYes(id) {
    const NewElement = elements.filter((e) => e.id !== id);
    setelements(NewElement);
    HandelNo();
  }

  function HandelNo() {
    setDeelet("");
  }

  return (
    <body>
      <section className="w-full bg-[#161618] h-screen p-5 text-white">
        <div className="parent w-[80%] mt-20 m-auto">
          <div className="flex justify-between items-center mb-7 border-solid border-2 border-teal-700 rounded-sm bg-zinc-900">
            <input
              className="w-[100%] bg-transparent p-2"
              type="text"
              placeholder="Add Your Task"
              value={input}
              onChange={(e) => {
                setinput(e.target.value);
              }}
              autoFocus
            />
            <div>
              <i
                className="fa-solid fa-plus font-bold text-2xl p-2 text-teal-700"
                onClick={HandelAdd}
              ></i>
            </div>
          </div>
          <div className="content bg-zinc-900  p-5 rounded- border-solid border-2 border-teal-700">
            <div>{device}</div>
          </div>
        </div>
      </section>
      <div>{Deelet}</div>
    </body>
  );
}
