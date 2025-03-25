import { useState } from "react";
import { unassignProductFromCustomer } from "../services/customerService";

export const UnassignProductFromCustomer=()=>{

    const [rawData,setRowData] = useState({customerCode:"",productCode:""});

    function handleChange(e){
        const {name,value} = e.target;

        setRowData((prev)=>({
            ...prev,
            [name]:value
        }));
    }

    async function handleButton(e) {
        e.preventDefault();
        console.log("customercode=",rawData.customerCode);
        console.log("productcode=",rawData.productCode);
        unassignProductFromCustomer(rawData.customerCode,rawData.productCode);
        
        
    }
    
    return(
        <div>
            <h1>Unassign Product From Customer</h1>
            <center>
            <form action="" onSubmit={handleButton}>
            <label htmlFor="">CUST_Code : </label> 
            <input type="text" name="customerCode" value={rawData.customerCode} onChange={handleChange} required/><br /><br />
            <label htmlFor="">PROD_Code : </label>
            <input type="text" name="productCode" value={rawData.productCode} onChange={handleChange} required /><br /><br />
            <button>Unassign Product</button>
            </form>
            </center>
        </div>
    );
}