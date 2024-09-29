import { CiShoppingCart } from "react-icons/ci";
import { useSelector } from "react-redux";

const Header = () =>{
    const noOfCart = useSelector((state)=>state.cartData)
    console.log("noOfCart=>",noOfCart);
    return(
        <div style={{background:"blue", color:"white", padding:"40px"}}>
            <span>{noOfCart.length}</span>
            <CiShoppingCart />
        </div>
    )
}
export default Header


