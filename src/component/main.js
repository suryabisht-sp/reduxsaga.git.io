import { AddToCart, clearAll, removeFromCart } from "../redux/action"
import { useDispatch, useSelector } from 'react-redux';
import { product } from "../redux/product Action";
import "./main.css"


function Main() {
const data = useSelector((state)=>state.productNewReducer)
//console.log("data", data)
  const prod = {
      name: "Imobile",
      id:1,
    price: "10000"
  }
  const dispatch = useDispatch();
console.log("DATA", data)
  return (
    <div className="App">
      <div className="wrap" >
      <div className="btn">
          <button onClick={() => { dispatch(AddToCart(prod)) }} >Add to Cart</button>
      </div>
      <div className="btn">
      <button onClick={() => { dispatch(removeFromCart(prod.name)) }} >Del from cart</button>
      </div>
      <div className="btn">
      <button onClick={() => { dispatch(clearAll(prod)) }} >Clear Cart</button>
      </div>
      <div className="btn">
        <button onClick={()=>{dispatch(product())}} >Get Product List</button>
        </div>
      </div>
      <div className="product_div" >
        {data && data.map((item) => {
          return (
            <div className="product_card" key={item.id}>
              <div className="product_card1" >
              <div className="image">
                <img src={item.image} />
              </div>
              <div>
              <div>{item?.title.substring(0, 28)}...</div>
              <div>Price: ${item?.price}</div>
              <div>Category: {item.category}</div>
    </div>
</div>
</div>
          )
})}
      </div>
    </div>
  );
}

export default Main;
