import { useState } from "react";
import generateMockData from "./utils/genData";
import Table from "./components/Table";
import "./App.css";

function App() {
  const [data, setData] = useState(generateMockData());

  return (
    <div>
      <h1>Users Table</h1>
      <Table columns={data.columns} rows={data.data} onModification={setData} />
    </div>
  );
}

export default App;
