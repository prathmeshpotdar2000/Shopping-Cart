import React, { useState } from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "./App.css";
import AddCustomer from "./Components/AddCustomer";
import AddProduct from "./Components/AddProduct";
import { GetProduct } from "./Components/GetProduct";
import { GetCustomerWithProduct } from "./Components/GetCustomerWithProduct";
import { AssignProductToCustomer } from "./Components/AssignProductToCustomer";
import { UnassignProductFromCustomer } from "./Components/UnassignProductFromCustomer";
import { ShoppingCart } from "./Components/ShoppingCart";
import { NavBar } from "./Components/NavBar";

function App() {
    // const [rawData,setRawData] = useState({username:"",password:""});
    return (
        <div className="app">
           
           <div>
            {/* <h1>helloooo</h1> */}
            {/* <input type="text" name="username" placeholder="Username" value={rawData.username} onChange={handleChange}/><br></br> */}

           </div>

            {/* <AddCustomer/> */}
            {/* <AddProduct/> */}
            {/* <GetProduct/> */}
            {/* <GetCustomerWithProduct/> */}
            {/* <AssignProductToCustomer/> */}
            {/* <UnassignProductFromCustomer/> */}
            {/* <NavBar/> */}
            <ShoppingCart/>
        </div>
    );
}

export default App;
