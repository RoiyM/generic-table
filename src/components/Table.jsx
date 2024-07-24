/* eslint-disable react/prop-types */

import Cell from "./Cell";

export default function Table({ columns, rows, onModification }) {
  const handleChange = (change) => {
    onModification(change);
  };

  return (
    <table border={1}>
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.id}>{col.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.id}>
            {columns.map((col) => (
              <Cell
                key={row.id + col.id}
                data={row[col.id]}
                type={col.type}
                onChange={handleChange}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
