import { useDispatch } from "react-redux";
import { addToCart, emptyCart, removeToCart } from "./redux/action";
import Header from "./components/Main";

function App() {
  const dispatch = useDispatch();
  const product = {
    name: "i Phone",
    category: "mobile",
    price: 10000,
    color: "red",
  };
  return (
    <>
        <Header/>
        <button onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
        <button onClick={() => dispatch(removeToCart(product))}>Remove To Cart</button>
        <button onClick={() => dispatch(emptyCart())}>EMPTY_CART</button>
        <button onClick={() => dispatch(emptyCart())}>CALL_PRODUCT_LIST</button>



   </>
  );
}

export default App;
