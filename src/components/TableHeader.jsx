/* eslint-disable react/prop-types */

const TableHeader = ({ columns }) => {
  return (
    <thead>
      <tr>
        {columns.map((column) => {
          const style = column.width ? { width: column.width } : null;
          return (
            <th key={column.id} style={style}>
              {column.title}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHeader;
