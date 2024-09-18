import {Provider, useDispatch} from "react-redux";
import Store from "./redux/store";

function App() {
  const dispatch = useDispatch();
  const product = {
    name: 'i Phone',
    category: 'mobile',
    price: 10000,
    color: 'red'
  }
 return <Provider store={Store}>
    <button onClick={()=>dispatch(product)}>test</button>
</Provider>
}

export default App;
