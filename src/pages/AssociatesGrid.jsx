import AgGridComponent from "../components/AgGridComponent";
import { useEffect, useState } from "react";
import axios from "axios";

const AssociatesGrid = () => {
  const colDefs = [
    { headerName: "ID", field: "id" },
    { headerName: "Name", field: "name" },
    { headerName: "Description", field: "description" },
    { headerName: "Products Having", field: "products_having" },
    { headerName: "Used In", field: "used_in" },
    { headerName: "Last Used", field: "last_used" },
  ];
  const [rowData, setRowData] = useState(null);

  useEffect(() => {
    axios
      .get("/associates")
      .then((response) => setRowData(response.data.content))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return <AgGridComponent rowData={rowData} colDefs={colDefs} />;
};

export default AssociatesGrid;
