/* eslint-disable react/prop-types */

import { useState } from "react";

const Input = ({ onSave, onCancel, value: initialValue, type }) => {
  const [value, setValue] = useState(initialValue);
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">✅</button>
      <button type="reset" onClick={onCancel}>
        ❌
      </button>
    </form>
  );
};

export default Input;
