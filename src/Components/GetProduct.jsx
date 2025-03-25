import {  useEffect, useState } from "react";
import { AgGridReact } from "@ag-grid-community/react"; 
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { ModuleRegistry } from "@ag-grid-community/core";
import { getProduct } from "../services/productService";

// ✅ Register modules (VERY IMPORTANT)
ModuleRegistry.registerModules([ClientSideRowModelModule]);
export const GetProduct=()=>{

    const [prod,setProd] = useState([]); 

    useEffect(()=>{
        // async function getData(){
        //   setProd(await getProduct());
        // }
        // getData();
        handleButton();
    },[]);

    async function handleButton(){
        const products =await getProduct();
        console.log("products are--->",products);
        setProd(products);
    }
    const columnDefs = [
        { headerName: "Product Name", field: "productName", sortable: true, filter: true },
        { headerName: "Product Code", field: "productCode", sortable: true, filter: true },
      ];
    return(
        <div>
            <h1>Get All Products</h1>
            <button onClick={handleButton}>Get All Products</button>
            <div className="ag-theme-alpine w-full max-w-4xl h-96 shadow-lg rounded-lg">
                    <AgGridReact
                      rowData={prod}
                      columnDefs={columnDefs}
                      pagination={true}
                      paginationPageSize={5}
                      domLayout="autoHeight"
                    />
                  </div>
        </div>
    );
}