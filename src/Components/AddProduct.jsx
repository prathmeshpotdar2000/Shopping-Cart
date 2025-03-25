import { useState } from "react";
import {addProduct} from "../services/productService";
 const AddProduct=()=>{
 const [prodData,setProdData] = useState({productname:"",productcode:""});

 function handleChange(e){
    console.log("inside handelchange");
    
    const {name,value} = e.target;
    console.log("Name=",name);
    console.log("value=",value);
    
    setProdData((prev)=>({
        ...prev,
        [name]:value
    }))
 }

 function handleButton1(e){
    e.preventDefault();
    console.log("Inside handleButton");
    console.log("name=",prodData.productname);
    console.log("code=",prodData.productcode);
    addProduct(prodData.productname,prodData.productcode);
 }
    return(
        <div>
            <h1>Add New Product</h1>
            <center>
            <div>
                <form action="" onSubmit={handleButton1}>
                    <input type="text" name="productname" placeholder="Mobile" required value={prodData.productname} onChange={handleChange} /> <br /><br />
                    <input type="text" name="productcode" placeholder="PROD_1" required value={prodData.productcode} onChange={handleChange} /><br /><br />
                    <button>Add New Product</button>
                </form>
            </div>
            </center>
        </div>
    );
}
export default AddProduct;