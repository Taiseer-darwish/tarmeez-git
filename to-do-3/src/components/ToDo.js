import * as React from "react";
import IfDeelet from "./IfDelete";

// Style
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

// OTHERT import
import { TodoContext } from "../Contexts/TodoContext";
import { useContext } from "react";
import { useState } from "react";

export default function ToDo({ todo }) {
  const [Deelet, setDeelet] = useState("");

  const value = useContext(TodoContext);

  //--ToggoleIcone
  function ToggoleIcone() {
    const UPdatetodos = value.todos.map((el) => {
      if (el.id === todo.id) {
        el.checkIcone = !el.checkIcone;
      }
      return el;
    });
    value.settodos(UPdatetodos);
  }

  //--HandelDelet
  function HandelDelet() {
    setDeelet(<IfDeelet Yes={() => HandelYes(todo.id)} No={HandelNo} />);
  }
  // HandelYes(id)
  function HandelYes() {
    const NewElement = value.todos.filter((e) => e.id !== todo.id);
    value.settodos(NewElement);
    HandelNo();
  }
  // HandelNo()
  function HandelNo() {
    setDeelet("");
  }

//--HandelEdit
  function HandelEdit() {
    const updatedElements = value.todos.map((el) => {
      if (el.id === todo.id) {
        return { ...todo, isEditing: false };
      } else {
        return el;
      }
    });
    value.settodos(updatedElements);
  }
    // // handleInputChange
    // function handleInputChange(id, newValue) {
    //   const updatedElements = value.todos.map((el) => {
    //     if (el.id === id) {
    //       return { ...el, content: newValue };
    //     } else {
    //       return el;
    //     }
    //   });
    //   value.settodos(updatedElements);
    // }

  return (
    <>
      <Card sx={{ minWidth: 275, background: 161618 }} className=" w-full m-5">
        <CardContent className="border-dashed border-2 border-gray-500 rounded-md !p-3">
          <Grid container spacing={0} className=" flex items-center">
            <Grid item xs={1} className="  ">
              <i
                onClick={ToggoleIcone}
                class={
                  todo.checkIcone
                    ? "fa-regular fa-circle-check"
                    : "fa-regular fa-circle"
                }
              ></i>
            </Grid>
            <Grid item xs={9} className=" ">
              {todo.isEditing ? (
                <Typography sx={{ fontSize: 20, color: "white" }}>
                  {todo.content}
                </Typography>
              ) : (
                <input
                type="text"
                value={todo.content}
                onChange={(e) => handleInputChange(todo.id, e.target.value)}
                autoFocus
              />
              )}
            </Grid>
            <Grid item xs={2} className=" flex justify-end">
              <i className="fa-solid fa-pencil" onClick={HandelEdit}></i>
              <i className="fa-solid fa-trash" onClick={HandelDelet}></i>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/*Deelet Page */}
      <div>{Deelet}</div>
      {/*Deelet Page */}
    </>
  );
}
