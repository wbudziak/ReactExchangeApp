import { createRef, useEffect, useRef, useState } from "react";
import Button from "../Button";

function Test() {
  const keys = [
    {
      id: 1,
      value: "C",
      text: "C",
      type: "reset",
    },
    {
      id: 2,
      value: "switch",
      text: "+/-",
      type: "switch",
    },
    {
      id: 3,
      value: "%",
      text: "%",
      type: "operator",
    },
    {
      id: 4,
      value: "/",
      text: "÷",
      type: "operator",
    },
    {
      id: 5,
      value: 7,
      text: "7",
      type: "number",
    },
    {
      id: 6,
      value: 8,
      text: "8",
      type: "number",
    },
    {
      id: 7,
      value: 9,
      text: "9",
      type: "number",
    },
    {
      id: 8,
      value: "*",
      text: "X",
      type: "operator",
    },
    {
      id: 9,
      value: 4,
      text: "4",
      type: "number",
    },
    {
      id: 10,
      value: 5,
      text: "5",
      type: "number",
    },
    {
      id: 11,
      value: 6,
      text: "6",
      type: "number",
    },
    {
      id: 12,
      value: "-",
      text: "-",
      type: "operator",
    },
    {
      id: 13,
      value: 1,
      text: "1",
      type: "number",
    },
    {
      id: 14,
      value: 2,
      text: "2",
      type: "number",
    },
    {
      id: 15,
      value: 3,
      text: "3",
      type: "number",
    },
    {
      id: 16,
      value: "+",
      text: "+",
      type: "operator",
    },
    {
      id: 17,
      value: 0,
      text: "0",
      type: "number",
    },
    {
      id: 18,
      value: ".",
      text: ".",
      type: "number",
    },
    {
      id: 19,
      value: "=",
      text: "=",
      type: "equal",
    },
  ];

  const [value, setValue] = useState("Wojtek");
  const [flag, setFlag] = useState(true);

  const clickHandler = () => {
    setFlag(!flag);
    setValue(!flag ? "Wojtek" : "Zmieniony wojtek");
  };

  const inputRef = createRef("wojtek");
  const [inputValue, setInputValue] = useState("");

  const inputHandler = (e) => {
    console.log(inputRef.current.value);
    setInputValue(inputRef.current.value);
  };

  return (
    <>
      <p>Hello there</p>
      <Button onClick={clickHandler}>{value}</Button>
      <input
        type={"text"}
        ref={inputRef}
        onChange={inputHandler}
        value={inputValue}
      />
      {keys.map((key) => (
        <p>{key.id}</p>
      ))}
    </>
  );
}
export default Test;
