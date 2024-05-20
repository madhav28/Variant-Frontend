import AgGridComponent from "../components/AgGridComponent";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductsGrid = () => {
  const colDefs = [
    { headerName: "ID", field: "id", width: 50 },
    { headerName: "Item Name", field: "item_name", width: 645 },
    { headerName: "SKU", field: "sku", width: 75 },
    { headerName: "Kind", field: "kind", width: 100 },
    { headerName: "Type", field: "type", width: 75 },
    { headerName: "Category", field: "category", width: 100 },
    { headerName: "Sub Category", field: "sub_category", width: 150 },
    { headerName: "Group", field: "item_group", width: 75 },
    { headerName: "Origin", field: "origin", width: 75 },
    { headerName: "Price Range", field: "price_range", width: 125 },
    { headerName: "Pref. Supplier", field: "pref_supplier", width: 125 },
    { headerName: "Status", field: "status", width: 75 },
    { headerName: "Notes", field: "notes", width: 75 },
  ];
  const [rowData, setRowData] = useState(null);

  useEffect(() => {
    axios
      .get("/inventories")
      .then((response) => setRowData(response.data.content))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return <AgGridComponent rowData={rowData} colDefs={colDefs} />;
};

export default ProductsGrid;
