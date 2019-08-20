import React, { useState, useRef, useEffect } from 'react';

import convertor from '../model/convertor';
import './Form.css';

const Form = () => {
  const [inputValue, setInputValue] = useState(1234);
  const [romanValue, setRomanValue] = useState(convertor(inputValue));
  const inputEl = useRef(null);

  useEffect(() => {
    inputEl.current.focus();
  }, [])

  const onInputValueChange = e => {
    const n = Number(e.target.value);
    if (n === 69) {
      setInputValue(e.target.value);
      setRomanValue('Naughty little fellow');
    }
    else if (n || e.target.value === "") {
      setInputValue(e.target.value);
      setRomanValue(convertor(Number(n)));
    }
  }

  return (
    <div id="Form">
      <h1><u>Roman Convertor</u></h1>
      <input
        ref= {inputEl}
        value = {inputValue}
        onChange = {onInputValueChange}
        placeholder = "Enter a number"
      />
      <p style={{color: "black"}}>&darr;</p>
      <br />
      <p><span>{romanValue}</span></p>
    </div>
  )
}

export default Form;
