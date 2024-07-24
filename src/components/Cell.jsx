/* eslint-disable react/prop-types */

export default function Cell({ key, data, type }) {
  switch (type) {
    case "string":
      return <td key={key}>{data}</td>;
    case "number":
      return <td key={key}>{data}</td>;
    case "boolean":
      return (
        <td key={key}>
          <input type="checkbox" checked={data} />
        </td>
      );
    case "date":
      return <td key={key}>{data.toLocaleString()}</td>;
    case "selection":
      return <td key={key}>{data}</td>;

    default:
      return <td key={key}>{String(data)}</td>;
  }
}
