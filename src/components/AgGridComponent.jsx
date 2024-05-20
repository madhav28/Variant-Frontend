import { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

const AgGridComponent = (props) => {
  return (
    <div className="ag-theme-quartz" style={{ width: 1750, height: 750 }}>
      <AgGridReact rowData={props.rowData} columnDefs={props.colDefs} />
    </div>
  );
};

export default AgGridComponent;
