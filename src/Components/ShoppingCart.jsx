import { useState } from "react";

export const ShoppingCart = () => {
    const products =[
        {
            id:1,
            name:"Wireless Headphones",
            desc:"High-quality Bluetooth headphones with noise cancellation and 20-hour battery life.",
            url:"https://honeywellconnection.com/in/wp-content/uploads/2024/08/01-8.jpg",
            price:550,
            warrenty:1,
        },
        {
            id:2,
            name:"Smartphone (X100 Pro)",
            desc:"A sleek smartphone with a 6.5-inch AMOLED display, 128GB storage, and a 50MP camera.",
            url:"https://m.media-amazon.com/images/I/71uQJ-blOXL._AC_UF1000,1000_QL80_.jpg"   ,
            price:23000,
            warrenty:1,
        },
        {
            id:3,
            name:"Gaming Laptop (G-Force X15)",
            desc:"A sleek smartphone with a 6.5-inch AMOLED display, 128GB storage, and a 50MP camera.",
            url:"https://en.colorful.cn/en/content/upload/Images/202308/aeadbb28-8cf8-47c7-892a-cde45a17cfb4.png"  ,
            price:55000,
            warrenty:1
        },
        {
            id:4,
            name:"Smartwatch (FitTrack Pro)",
            desc:"A fitness-focused smartwatch with heart rate monitoring and sleep tracking.",
            url:"https://vystahealth.com/wp-content/uploads/2024/08/FitTrack-P2-600x600.jpg"  ,
            price:3500,
            warrenty:1
        },
        {
            id:5,
            name:"Portable Speaker (BoomBass 360)",
            desc:"A fitness-focused smartwatch with heart rate monitoring and sleep tracking.",
            url:"https://www.ubuy.co.in/productimg/?image=aHR0cHM6Ly9pbWFnZXMtY2RuLnVidXkuY28uaWQvNjMzYWI5YzNmODk1NjYwYWVjMWYzZDRkLWVhcmZ1bi11Ym9vbS1ibHVldG9vdGgtc3BlYWtlci5qcGc.jpg"  ,
            price:4300,
            warrenty:1

        },
        {
            id:6,
            name:"LED Smart TV (UltraView 55)",
            desc:"A fitness-focused smartwatch with heart rate monitoring and sleep tracking.",
            url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsviu001M4LmvoLppahF3-VzMejAD_ShrcxQ&s"  ,
            price:30000,
            warrenty:1

        },
        {
            id:7,
            name:"Electric Kettle (QuickBoil 1.5L)",
            desc:"A fitness-focused smartwatch with heart rate monitoring and sleep tracking.",
            url:"https://m.media-amazon.com/images/I/612KPGvnEJL._AC_UF894,1000_QL80_.jpg"  ,
            price:7700,
            warrenty:1

        },
        {
            id:8,
            name:"Running Shoes (AirFlex Pro)",
            desc:"A fitness-focused smartwatch with heart rate monitoring and sleep tracking.",
            url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdAeFKdQETJ-DSceH66gOyqCTVbg5eQ9QQmQ&s"  ,
            price:2200,
            warrenty:1
        },
        {
            id:9,
            name:"Coffee Maker (BrewMaster 500)",
            desc:"A fitness-focused smartwatch with heart rate monitoring and sleep tracking.",
            url:"https://m.media-amazon.com/images/I/61dkxmw1bPL._AC_UF894,1000_QL80_.jpg"  ,
            price:1400,
            warrenty:1

        },
        {
            id:10,
            name:"Backpack (UrbanGear Pro)",
            desc:"A fitness-focused smartwatch with heart rate monitoring and sleep tracking.",
            url:"https://imagesm.plexussquare.in/URBANGEAR/Images/04-12-2021/1638620096307.jpeg"  ,
            price:6500,
            warrenty:1
        },
        {
            id:11,
            name:"Charger Adapter (UrbanGear Pro)",
            desc:"A fitness-focused smartwatch with heart rate monitoring and sleep tracking.",
            url:"https://www.amkette.com/cdn/shop/files/PowerPro_2_PortQC_QC_Car_Charger_with_Multifunction_USB_Cable_hero_image.png?v=1689162294"  ,
            price:500,
            warrenty:1
        },
        {
            id:12,
            name:"Smart Drone (UrbanGear Pro)",
            desc:"A fitness-focused smartwatch with heart rate monitoring and sleep tracking.",
            url:"https://m.media-amazon.com/images/I/51Pd4vyNiaL._AC_UF1000,1000_QL80_.jpg"  ,
            price:1500,
            warrenty:1
        }

    ];
    
    const [flag,setFlag] = useState(true);

    const [cart,setCart] = useState([]);

    // function buttonChange(singleProduct){
    //     setCart((prev)=>(
    //         [...prev,singleProduct]
    //     ));
    //     alert("Product Added Successfully In Your Cart...");
    // }

    function buttonChange(product){
        setCart((prevCart) => {
            const existingProduct = prevCart.find(item => item.id === product.id);

            if (existingProduct) {
                return prevCart.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
        setFlag(true);
        console.log("flag :",flag);
        alert("Product Added Successfully In Your Cart...");

    }

    // const array = cart.map((singleProduct)=>{
    //     return singleProduct.price;
    // })
    // console.log("price__",array);
    // // const sumOfItems=array.reduce((acc,currentValue)=>acc+currentValue,0);

    // let sumOfItems = 0;

    // for (let i = 0; i < array.length; i++) {
    //     sumOfItems = sumOfItems+array[i];
    // }

    console.log("flag :",flag);
    
    function removeFromCart(id) {
        
        setCart((prevCart) =>
            prevCart
                .map(item =>
                    item.id === id ? { ...item, quantity: item.quantity - 1 } : item
                )
                .filter(item => item.quantity > 0)
        );
        // let removedArray = cart.filter((product)=>product.id!==id);
        // setCart(removedArray);
    }

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);


  return (
    <>     
     <h1 className='text-center text-blue-500 text-4xl p-5 sticky top-0 w-full bg-white shadow-md shadow-cyan-500/50'>Shopping Cart</h1>
      <p className="ml-3 mt-3 text-3xl text-blue-500">Product List</p>
      <div id="cart-section" className="wrapper flex w-full flex-wrap justify-center gap-5 p-10">
        {products.map((singleproduct,index)=>{
                
            return<div key={index} className="border border-grey rounded-[20px] shadow-md p-3 w-[300px] flex flex-col justify-between">
                <img src={singleproduct.url} alt="Image not found" className="w-[200px] mx-auto"/><br />
                {/* <p>ID: <span>{singleproduct.id}</span></p> */}
                <p className="font-bold">NAME: <span className="font-medium">{singleproduct.name}</span></p>
                <p className="font-bold">DESC: <span className="font-normal">{singleproduct.desc}</span></p>
                <p className="font-bold">PRICE: <span className="font-normal">{singleproduct.price}</span></p>
                <p className="font-bold">Warrenty: <span className="font-normal">{singleproduct.warrenty}</span></p>
                <button className="w-[230px] border border-black flex flex-col justify-center hover:bg-blue-400 shadow-lg shadow-cyan-500/50" onClick={()=>buttonChange(singleproduct)}>Add To Cart</button>
                <hr className="border-t border-gray-800"/>
            </div>
        })}

        <br /><br /><br />
        
      </div>
      <button className="w-[300px] m-auto border border-black flex flex-col justify-center hover:bg-blue-400 shadow-lg shadow-cyan-500/50
      transition-transform duration-300 ease-in-out transform hover:scale-105 animate-bounce" 
      onClick={() => {
        setFlag(!flag);
        setTimeout(() => {
          window.scrollTo({
            top: document.body.scrollHeight, // Scroll to bottom of the page
            behavior: "smooth",
          });
        }, 300);
      }
      }>View Your Products</button>

        <br /><br />
       <h1 className="font-extrabold text-center">Total Items: {totalItems}</h1>
       <h1 className="font-extrabold text-center">Total Price: {totalPrice}</h1>

       <br/>
       
       <div className="flex w-full flex-wrap justify-center gap-5 ">

        {
            
            (!flag) && cart.length>0?(cart.map((item,index)=>{
                return<div key={index} className="relative border border-grey rounded-[20px] shadow-md p-3 w-[300px] flex flex-col justify-between" >
                    <div>
                    <img src={item.url} alt="" className="w-[200px]" />
                    <p className="font-bold">NAME: <span className="font-medium">{item.name}</span></p>
                    <p className="font-bold">PRICE: <span className="font-normal">{item.price}</span></p> 
                    <p className="font-bold">DESC: <span className="font-normal">{item.desc}</span></p> 
                    <p className="font-bold"> <span className="absolute top-2 right-2 bg-blue-500 text-white px-3 py-1 rounded-full">{item.quantity}</span></p>
                            
                        </div>
                        <div>
                       <button className="w-[230px] border border-black flex flex-col justify-center hover:bg-red-400 shadow-lg shadow-cyan-500/50" onClick={() => removeFromCart(item.id)}>Remove From Cart</button>
                    </div>

                    {/* Add and Remove buttons */}
                    <div className="flex justify-between">
                            <button className="w-[110px] border border-black hover:bg-green-400" onClick={() => buttonChange(item)}>
                                +
                            </button>
                            <button className="w-[110px] border border-black hover:bg-red-400" onClick={() => removeFromCart(item.id)}>
                                -
                            </button>
                        </div>
                    </div>
                    
            })):!flag && cart.length === 0 ? (
                <h2 className="text-center text-4xl font-bold text-gray-500">Cart is Empty</h2>
              ) : null
              }
        </div>
    </>
  );
};
