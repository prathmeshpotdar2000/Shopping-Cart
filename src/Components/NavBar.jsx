import { FaShoppingCart } from "react-icons/fa";
export const NavBar=()=>{

    function buttonChange(){
        console.log("inside button");
        
    }
    return(
        <div className="flex justify-between">
            <h1></h1>
            <FaShoppingCart className="text-4xl cursor-pointer" onClick={buttonChange}/>
        </div>
    );
}