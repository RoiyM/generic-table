import { useState } from "react";
import generateMockData from "./utils/genData";
import Table from "./components/Table";
import "./App.css";

function App() {
  const { columns, data: initialData } = generateMockData(10);
  const [data, setData] = useState(initialData);

  const handleUpdate = (rowIndex, columnId, value) => {
    setData((prev) =>
      prev.map((row, index) =>
        index === rowIndex ? { ...row, [columnId]: value } : row
      )
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
