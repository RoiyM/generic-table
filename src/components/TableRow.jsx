/* eslint-disable react/prop-types */

import EditableCell from "./EditableCell";

const TableRow = ({ row, columns, updateData }) => {
  return (
    <tr>
      {columns.map((column) => (
        <td key={column.id}>
          <EditableCell
            value={row[column.id]}
            row={row.id}
            column={column.id}
            updateData={updateData}
            type={column.type}
            options={column.options || []}
          />
        </td>
      ))}
    </tr>
  );
};

export default TableRow;
