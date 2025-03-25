import React from "react";
import { useState } from "react";
import { getCustomerWithProduct } from "../services/customerService";
import { AgGridReact } from "@ag-grid-community/react";

export const GetCustomerWithProduct=()=>{

    const [rowData,setRowData] = useState([]);

    async function handleButton(){
        console.log("inside the handleButton and fetching data...");
        
        const custData = await getCustomerWithProduct();
        console.log("CustData:",custData);
        setRowData(custData);
    }
    const columnDef=[
       { headerName:"Customer Name", field:"customerName", sortable:true,filter:true},
       {headerName:"Email", field:"email", sortable:true,filter:true},
       {headerName:"Customer Code", field:"customerCode", sortable:true,filter:true},
       {
        headerName:"Products",
        field:"products",
        
        // valueGetter: (params) => 
            
        //     params.data.products.length > 0 
        //         ? params.data.products.map(p => `${p.productName} (${p.productCode})`).join(", ") 
        //         : "No Products Assigned",
        // sortable: true

        valueGetter: (params) => {
            let result = "";
            let products = params.data.products; // Extract the products array
            console.log("products are:",products);
            
            if (products.length > 0) {
                for (let i = 0; i < products.length; i++) {
                    result += products[i].productName + " (" + products[i].productCode + ")";
                    if (i < products.length - 1) {
                        result += ", "; // Add a comma between products
                    }
                }
            } else {
                result = "No Products Assigned";
            }
            return result;
        }
        
      }  
    ];

    return(
        <div>
            <h1>Get Customer With Product</h1>
            <button onClick={handleButton}>Get Customer With React</button>

            <div className="ag-theme-alpine w-full max-w-4xl h-96 shadow-lg rounded-lg">
            <AgGridReact
                rowData={rowData}
                columnDefs={columnDef}
                pagination={true}
                paginationPageSize={5}
                domLayout="autoHeight"

            />
            </div>

        </div>
    );
}