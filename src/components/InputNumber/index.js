import { createRef, useEffect, useState } from "react";

function InputNumber(props) {
  const { value } = props;

  const inputRef = createRef();
  const [inputValue, setInputValue] = useState(0);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const inputHandler = () => {
    setInputValue(inputRef.current.value);
    props.valueCallBack(inputRef.current.value);
  };

  return (
    <>
      <input
        min={1}
        onChange={inputHandler}
        ref={inputRef}
        type={"number"}
        value={inputValue}
      />
    </>
  );
}
export default InputNumber;
