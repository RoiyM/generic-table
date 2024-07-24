/* eslint-disable react/prop-types */

import { useState } from "react";
import Input from "./Input";

const EditableCell = ({ value, row, column, updateData, type, options }) => {
  const [isEdited, setIsEdited] = useState(false);

  const onChange = (e) => {
    let newValue;
    if (type === "string" || type === "number") {
      newValue = e;
      setIsEdited(false);
    } else if (type === "boolean") {
      newValue = e.target.checked;
    } else {
      newValue = e.target.value;
    }
    updateData(row, column, newValue);
  };

  if (type === "boolean") {
    return <input type="checkbox" checked={value} onChange={onChange} />;
  } else if (type === "selection") {
    return (
      <select value={value} onChange={onChange}>
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
