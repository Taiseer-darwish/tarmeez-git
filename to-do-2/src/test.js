import { useState } from "react";
import IfDeelet from "./components/IfDelete";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";

//Card
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
//import Box from "@mui/material/Box";

//Container
import Container from "@mui/material/Container";

//-Button
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

let NewId = 1;

export default function Test() {
  const [input, setinput] = useState("");
  const [elements, setelements] = useState([
    {
      id: 0,
      content: "",
      isEditing: false,
      EditIcone: true,
      checkIcone: false,
    },
  ]);
  const [Deelet, setDeelet] = useState("");

  const device = elements.map((el) => {
    return (
      <div className=" flex justify-between p-2 my-3 border-dashed border-2 border-gray-500 rounded-md">
        <div className="flex items-center">
          {el.checkIcone ? (
            <i
              class="fa-regular fa-circle-check"
              onClick={() => Icon(el.id)}
            ></i>
          ) : (
            <i class="fa-regular fa-circle" onClick={() => Icon(el.id)}></i>
          )}
          <li key={el.id}>
            {"(" + el.id + ")"}
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

  // HandelAdd()
  function HandelAdd() {
    setelements([
      ...elements,
      { id: NewId, content: input, isEditing: false, EditIcone: true },
    ]);
    NewId++;
    setinput("");
  }

  // HandelEdit(id)
  function HandelEdit(id) {
    const updatedElements = elements.map((el) => {
      if (el.id === id) {
        return { ...el, isEditing: true, EditIcone: false, checkIcone: false };
      } else {
        return el;
      }
    });
    setelements(updatedElements);
  }

  function Icon(id) {
    const updatedElements = elements.map((el) => {
      if (el.id === id) {
        return { ...el, checkIcone: !el.checkIcone };
      } else {
        return el;
      }
    });
    setelements(updatedElements);
  }

  // handleInputChange(id, newValue)
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

  // handleSave(id)
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

  //HandelDelete(id)
  function HandelDelete(id) {
    setDeelet(<IfDeelet Yes={() => HandelYes(id)} No={HandelNo} />);
  }

  // HandelYes(id)
  function HandelYes(id) {
    const NewElement = elements.filter((e) => e.id !== id);
    setelements(NewElement);
    HandelNo();
  }

  // HandelNo()
  function HandelNo() {
    setDeelet("");
  }

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" className=" p-5 text-white bg-[#161618]">
        <Card
          sx={{
            minWidth: 275,
            background: "transparent",
            boxShadow: "none",
            marginTop: "30px",
            color: "white",
          }}
        >
          <CardContent>
            {/*TEXT */}
            <h1 className=" text-center text-5xl my-7 text-teal-800 font-bold">
              To-Do App
            </h1>

            {/*The-Input & Button */}
            <div className="The-Input flex justify-between items-center mb-7 border-solid border-2 border-teal-700 rounded-sm bg-zinc-900">
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

            {/*The-Output */}
            <div className="The-Output !text-zinc-50 flex flex-col justify-center items-center w-full bg-zinc-900  p-5 rounded- border-solid border-2 border-teal-700 ">
              {/*<Buttons */}
              <Stack spacing={1} direction="row">
                <Button
                  variant="outlined"
                  className=" !text-[#bebebe] !border-gray-400 !font-bold  "
                >
                  Done (0)
                </Button>
                <Button variant="outlined" color="error">
                  Not Complet (0)
                </Button>
              </Stack>

              {/*device */}
              <div className="w-full ">{device}</div>
            </div>

            {/*Deelet Page */}
            <div>{Deelet}</div>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
