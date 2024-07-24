/* eslint-disable react/prop-types */

import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const Table = ({ columns, data, updateData }) => {
  return (
    <>
      <table>
        <TableHeader columns={columns} />
        <tbody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              row={row}
              columns={columns}
              updateData={updateData}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
