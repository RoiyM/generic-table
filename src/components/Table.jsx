/* eslint-disable react/prop-types */

import { useState } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import ColumnVisibilityToggle from "./ColumnVisibilityToggle";
import TablePagination from "./TablePagination";

const Table = ({ columns, data, updateData }) => {
  const [hiddenColumns, setHiddenColumns] = useState([]);
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;
  const totalPages = Math.ceil(data.length / rowsPerPage);

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

  const currentPageData = data.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  return (
    <>
      <ColumnVisibilityToggle
        columns={columns}
        hiddenColumns={hiddenColumns}
        toggleHideColumn={toggleHideColumn}
      />
      <table border="full">
        <TableHeader columns={visibleColumns} />
        <tbody>
          {currentPageData.map((row) => (
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
      <TablePagination page={page} totalPages={totalPages} setPage={setPage} />
    </>
  );
};

export default Table;
