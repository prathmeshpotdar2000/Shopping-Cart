export const addProduct =async(productname,productcode)=>{
   const data ={
        productname:productname,
        productcode:productcode
    }
    try {
        const response = await fetch('http://localhost:5146/api/product',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        });
        const res = await response.json;
        console.log("responce--->",res);
        return res;
    } catch (error) {
        console.log("Error is",error);
    }
}

export const getProduct = async()=>{
    try {
        const response =await fetch('http://localhost:5146/api/product');
        const res = await response.json();
        console.log("Response is--->",res);
        return res;
    } catch (e) {
        console.log("Error is",e);
        
    }
}
