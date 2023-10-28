import React, { useState } from 'react';

export default function TextAreaWithAutoInsert() {
  const [value, setValue] = useState('');
  const [prevChar, setPrevChar] = useState('');

  const handleChange = (e) => {
    const inputValue = e.target.value;

    // Get the last character from the input value
    const lastChar = inputValue.slice(-1);

    // Check for two consecutive greater than symbols
    if (prevChar === '>' && lastChar === '\n') {
      const cursorPosition = e.target.selectionStart;
      const newValue =
        inputValue.slice(0, cursorPosition) + 'Greater Phoenix Awarded EDA Tech Hub Strategy Development Grant' + inputValue.slice(cursorPosition);

      setValue(newValue);

    } else {
      setValue(inputValue);
      setPrevChar(lastChar);
    }
  };

  return (
    <textarea
      value={value}
      className='w-48'
      onChange={handleChange}
      rows="5"
      cols="50"
    />
  );
}