// Theme
import type { ColDef } from "ag-grid-community";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
// Core CSS
import { AgGridReact } from "ag-grid-react";
import { useEffect, useState } from "react";

ModuleRegistry.registerModules([AllCommunityModule]);

// Row Data Interface
interface IRow {
  mission: string;
  company: string;
  location: string;
  date: string; // or Date if you plan to convert the string to a Date object
  time: string;
  rocket: string;
  price: number;
  successful: boolean;
}

// Create new GridExample component
const GridExample = () => {
  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState<IRow[]>([]);

  // Column Definitions: Defines & controls grid columns.
  const [colDefs, setColDefs] = useState<ColDef<IRow>[]>([
    { field: "mission", headerName: "Mission", width: 200,filter: true },
    { field: "company", headerName: "Company", width: 150 },
    { field: "location", headerName: "Location", width: 300 },
    { field: "date", headerName: "Date", width: 120 },
    { field: "time", headerName: "Time", width: 120 },
    { field: "rocket", headerName: "Rocket", width: 180 },
    {
      field: "price",
      headerName: "Priceeee",
      width: 150,
      valueFormatter: (params) => `£${params.value.toLocaleString()}`,
      cellRenderer:({ value }:{value:number}) => (
        <span className="bg-sky-400">{value}</span>
    )
    },
    {
      field: "successful",
      headerName: "Successful",
      width: 120,
      cellRenderer: "missionResultRenderer",
    }, // Assuming you have a custom renderer for the "successful" field
  ]);

  useEffect(() => {
    // Inner async function to fetch data
    const fetchData = async () => {
      const result = await fetch(
        "https://www.ag-grid.com/example-assets/space-mission-data.json"
      );
      const data: IRow[] = await result.json(); // Type the fetched data
      setRowData(data); // Set the row data
    };
    fetchData(); // Call the async function inside the useEffect
  }, []); // Empty dependency array to run once on mount

  // Container: Defines the grid's theme & dimensions.
  return (
    <div className="w-auto min-w-[550px] md:w-[750px] lg:w-[850px] md:h-[450px] sm:h-[350px] h-[350px]">
      <AgGridReact rowData={rowData} columnDefs={colDefs} defaultColDef={{filter:true}} pagination={true}/>
    </div>
  );
};

export default GridExample;
