import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import { TaskCard } from "./Task";
import {Button} from "./Button";
import {Counter} from "./Counter";
import {Mensaje} from "./Mensaje";
const root = ReactDOM.createRoot(document.getElementById("root"));
// npx create-react-app myAplicacion
root.render(
    <>
        <TaskCard flag={false}/>
        <Button nombre="Aceptar"/>
        <input onChange={function(e){
            console.log(e.target.value)
        }}/>
        <Counter/>
        <Mensaje/>
    </>
);
