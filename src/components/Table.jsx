/* eslint-disable react/prop-types */

import { useState } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import ColumnVisibilityToggle from "./ColumnVisibilityToggle";

const Table = ({ columns, data, updateData }) => {
  const [hiddenColumns, setHiddenColumns] = useState([]);

  const toggleHideColumn = (columnId) => {
    setHiddenColumns((prev) =>
      prev.includes(columnId)
        ? prev.filter((id) => id !== columnId)
        : [...prev, columnId]
    );
  };

  const visibleColumns = columns.filter(
    (column) => !hiddenColumns.includes(column.id)
  );

  return (
    <>
      <ColumnVisibilityToggle
        columns={columns}
        hiddenColumns={hiddenColumns}
        toggleHideColumn={toggleHideColumn}
      />
      <table>
        <TableHeader columns={visibleColumns} />
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <TableRow
                row={row}
                columns={visibleColumns}
                updateData={updateData}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
