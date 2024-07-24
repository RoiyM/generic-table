/* eslint-disable react/prop-types */
import { useState } from "react";

const ColumnVisibilityToggle = ({
  columns,
  hiddenColumns,
  toggleHideColumn,
}) => {
  const [visibility, setVisibility] = useState(false);
  return (
    <div>
      <button onClick={() => setVisibility(!visibility)}>Filter Columns</button>

      {visibility &&
        columns.map((column) => (
          <div key={column.id}>
            <label>
              <input
                type="checkbox"
                checked={!hiddenColumns.includes(column.id)}
                onChange={() => toggleHideColumn(column.id)}
              />
              {column.title}
            </label>
          </div>
        ))}
    </div>
  );
};

export default ColumnVisibilityToggle;
