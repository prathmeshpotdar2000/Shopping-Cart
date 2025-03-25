import React from "react";
import { useState } from "react";
import { addCustomer } from "../services/customerService";
import { GetCustomer } from "./GetCustomer";

const AddCustomer=()=>{
const [custData,setCustomer] = useState({name:"",email:"",customerCode:""});

function handleChange(e){
    console.log("Inside");
    const {name,value} = e.target;

    console.log("Name",name);
    console.log("value",value);

    setCustomer((prev)=>({
        ...prev,
        [name]:value
    }))
}

function handleButton(e){
    e.preventDefault();

    console.log("name",custData.name);
    console.log(custData.email);
    console.log(custData.customerCode);
    addCustomer(custData.name,custData.email,custData.customerCode);
    
}
    return(
        <div>
            <h1>Add Customer</h1>
            <center>
            <div>
                <form action="" onSubmit={handleButton}>
                <input type="text" name="name" placeholder="Prathmesh Potdar" required value={custData.name} onChange={handleChange} /> <br /> <br />
                <input type="text" name="email" placeholder="prathmeshpotdar@gmail.com" required value={custData.email} onChange={handleChange}/><br /> <br />
                <input type="text" name="customerCode" placeholder="CUST_1" required value={custData.customerCode} onChange={handleChange} /><br /><br />
                <button>Add Customer</button>
                </form>
            </div>
            </center>
            <h1>Get All Customers</h1>
            <center>
            <div>
                <GetCustomer/>
            </div>
            </center>
        </div>
    );
}
export default AddCustomer;