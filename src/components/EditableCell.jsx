/* eslint-disable react/prop-types */

import { useState } from "react";
import Input from "./Input";

const EditableCell = ({ value, row, column, updateData, type, options }) => {
  const [isEdited, setIsEdited] = useState(false);
  const onChange = (newValue) => {
    if (type === "string" || type === "number") {
      setIsEdited(false);
    }
    updateData(row, column, newValue);
  };

  if (type === "boolean") {
    return (
      <input
        type="checkbox"
        checked={value}
        onChange={(e) => onChange(e.target.checked)}
      />
    );
  } else if (type === "selection") {
    return (
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  } else if (type === "number") {
    return isEdited ? (
      <Input
        value={value}
        onSave={onChange}
        onCancel={() => setIsEdited(false)}
        type={type}
      />
    ) : (
      <span onClick={() => setIsEdited(true)}>{value}</span>
    );
  } else {
    return isEdited ? (
      <Input
        value={value}
        onSave={onChange}
        onCancel={() => setIsEdited(false)}
      />
    ) : (
      <span onClick={() => setIsEdited(true)}>{value}</span>
    );
  }
};

export default EditableCell;
