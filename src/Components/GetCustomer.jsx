import { useEffect, useState } from "react";
import { getCustomer } from "../services/customerService";
import { AgGridReact } from "@ag-grid-community/react"; 
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { ModuleRegistry } from "@ag-grid-community/core";

// ✅ Register modules (VERY IMPORTANT)
ModuleRegistry.registerModules([ClientSideRowModelModule]);

export const GetCustomer = () => {

    const [rowData,setRowData] = useState([]);

    useEffect( ()=>{
        // const Cust = getCustomer();
        // setRowData(Cust);
        // getCustomer(setRowData);

        async function getData(params) {
            const data = await getCustomer();
            setRowData(data);
        }
        getData();
    },[]);
   async function handleButton(){
        console.log("button clicked");
        const Customers = await getCustomer();
        console.log("getCust---",Customers);
        
        setRowData(Customers);
        console.log("rodata--->",rowData);
    }
  const columnDefs = [
    { headerName: "Name", field: "name", sortable: true, filter: true },
    { headerName: "Email", field: "email", sortable: true, filter: true },
    {headerName: "Customer Code",field: "customerCode",sortable: true,filter: true}
  ];

  return (
    <div>
        <button onClick={handleButton}>Get All Customers</button>
      <div className="ag-theme-alpine w-full max-w-4xl h-96 shadow-lg rounded-lg">
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          pagination={true}
          paginationPageSize={5}
          domLayout="autoHeight"
        />
      </div>
    </div>
  );
};
