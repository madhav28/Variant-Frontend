import AgGridComponent from "../components/AgGridComponent";
import { useEffect, useState } from "react";
import axios from "axios";

const ServicesGrid = () => {
  const colDefs = [
    { headerName: "ID", field: "id", width: 50 },
    { headerName: "Name", field: "name", width: 545 },
    { headerName: "SKU", field: "sku", width: 75 },
    { headerName: "Category", field: "Category", width: 100 },
    { headerName: "Type", field: "type", width: 75 },
    { headerName: "Group", field: "services_group", width: 100 },
    { headerName: "Price", field: "price1", width: 150 },
    { headerName: "Units", field: "units", width: 75 },
    { headerName: "Price Range", field: "price_range", width: 175 },
    { headerName: "Pref. Vendor", field: "pref_vendor", width: 125 },
    { headerName: "Status", field: "status", width: 125 },
    { headerName: "Usage", field: "usage", width: 75 },
    { headerName: "Notes", field: "notes", width: 75 },
  ];
  const [rowData, setRowData] = useState(null);

  useEffect(() => {
    axios
      .get("/services")
      .then((response) => setRowData(response.data.content))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return <AgGridComponent rowData={rowData} colDefs={colDefs} />;
};

export default ServicesGrid;
