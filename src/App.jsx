import { useState } from "react";
import generateMockData from "./utils/genData";
import Table from "./components/Table";
import "./App.css";

function App() {
  const { columns, data: initialData } = generateMockData(10);
  const [data, setData] = useState(initialData);

  const handleUpdate = (rowId, columnId, value) => {
    setData((prev) =>
      prev.map((row) => {
        if (row.id === rowId) {
          return { ...row, [columnId]: value };
        } else {
          return row;
        }
      })
    );
  };

  return (
    <div>
      <h1>Users Table</h1>
      <Table columns={columns} data={data} updateData={handleUpdate} />
    </div>
  );
}

export default App;
