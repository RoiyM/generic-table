/* eslint-disable react/prop-types */

const TableHeader = ({ columns }) => {
  return (
    <thead>
      <tr>
        {columns.map((column) =>
          column.width ? (
            <th key={column.id} style={{ width: `${column.width}px` }}>
              {column.title}
            </th>
          ) : (
            <th key={column.id}>{column.title}</th>
          )
        )}
      </tr>
    </thead>
  );
};

export default TableHeader;
