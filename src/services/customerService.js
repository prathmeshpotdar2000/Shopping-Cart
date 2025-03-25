
export const addCustomer=async(name,email,customercode) =>{

    console.log("inside the addcustomer");
    
    // const formData = new FormData();
    // formData.append("name",name);
    // formData.append("email",email);
    // formData.append("customerCode",customercode);

    const customerData = {
        name: name,
        email: email,
        customerCode: customercode
    };

    try {
        const response  = await fetch('http://localhost:5146/api/customer',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(customerData)
        });
        const res = await response.json();
        console.log("Response is:",res);
        
    } catch (e) {
        console.log("Error is",e);
        
    }
    
}

export const getCustomer = async () =>{
    try {
        const response = await fetch('http://localhost:5146/api/customer');
        const res =await response.json();
        console.log("Response--->",res);
        return res;
        
        
    } catch (e) {
        console.log("Error is...",e);
        
    }
}

export const getCustomerWithProduct = async()=>{
    try {
        const response = await fetch('http://localhost:5146/api/customer/getCustomersWithProducts');
        const res = await response.json();
        return res;
    } catch (e) {
        console.log("Error is:",e);
        
    }
}

export const assignProductToCustomer = async(customerCode,productCode)=>{

    const data = {
        customerCode : customerCode,
        productCode:productCode

    }
    try {
        const response = await fetch(`http://localhost:5146/api/customer/assign/customer/${customerCode}/toProduct/${productCode}`,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        })
        const res = await response.json();
        console.log("response=",res);
        alert(`${productCode} assign to ${customerCode}`);
        return res;
    } catch (e) {
        console.log("Error is ::",e);
        
    }
}

export const unassignProductFromCustomer = async(customerCode,productCode)=>{
    try {
        const response = await fetch(`http://localhost:5146/api/customer/unassign/customer/${customerCode}/fromProduct/${productCode}`,
            {method:"DELETE"}
        );
        const res =await response.json();
        console.log("Responce is:",res);
        alert(`${productCode} Unassign from ${customerCode}`);
        return res;
    } catch (error) {
        console.log("Error is",error);
        
    }
}