import React from "react";
import { createRoot } from "react-dom/client";
const name = "Himaja";
const age = 20;
const greeting = "Hello, my name is " + name + " and I am " + age + " years old";
createRoot(document.getElementById("root")).render(
  <div>
    <h1>JSX Render App</h1>
    <p>{greeting}</p>
    <p>Name: {name}</p>
    <p>Age: {age}</p>
  </div>
);