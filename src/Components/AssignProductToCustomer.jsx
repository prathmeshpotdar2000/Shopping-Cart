import { useState } from "react";
import { assignProductToCustomer } from "../services/customerService";

export const AssignProductToCustomer=()=>{

    const [rowData,setRowData] = useState({customerCode:"",productCode:""});


    function handleChange(e){
       
       const {name,value} = e.target;
       console.log("Name=",name);
       console.log("value=",value);

       setRowData((prev)=>({
            ...prev,
            [name]:value
       }))
       
    }
    async function handleButton(e){
        e.preventDefault();
        console.log("In handle button...");
        console.log("customercode=",rowData.customerCode);
        console.log("productcode=",rowData.productCode);
        assignProductToCustomer(rowData.customerCode,rowData.productCode);
        
    }
    return(

        <div>

            <h1>Assign Product From Customer</h1>

            <center>

            <form action="" onSubmit={handleButton}>
                <label htmlFor="">CUST_Code : </label>
                <input type="text" placeholder="CUST_1" name="customerCode" onChange={handleChange} value={rowData.customerCode} required/><br /><br />
                <label htmlFor="">PROD_Code : </label>
                <input type="text" placeholder="PROD_1" name="productCode" onChange={handleChange} value={rowData.productCode} required/><br /><br />
                <button >Assign Product</button>
            </form>

            </center>
        </div>
    );
}