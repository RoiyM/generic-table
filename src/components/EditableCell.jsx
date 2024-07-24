/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";

const EditableCell = ({
  value: initialValue,
  row: { index },
  column: { id },
  updateData,
  type,
  options,
}) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const onChange = (e) => {
    const newValue = type === "boolean" ? e.target.checked : e.target.value;
    setValue(newValue);
    updateData(index, id, newValue);
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
    return <input type="number" value={value} onChange={onChange} />;
  } else {
    return <input value={value} onChange={onChange} />;
  }
};

export default EditableCell;
