import { AddToCart, clearAll, removeFromCart } from "../redux/action"
import { useDispatch, useSelector } from 'react-redux';
import { product,searchData } from "../redux/product Action";
import "./main.css"
import React, { useState } from "react";

function Main() {
  const data = useSelector((state) => state.productNewReducer)
  const [inData, setInData] = useState("");
  const [sort, setSort] = useState("");
  const dispatch = useDispatch();
  
  const handleListing = () => {
    if (sort) {
      return dispatch(searchData(sort))
    }
    dispatch(product())
  }
  
  React.useEffect(() => {
    handleListing()
  }, [sort])
  
  const handleChange = (e) => {
    setInData(e.target.value)
  }

  const handleSort = (e) => {
    setSort(e.target.value)
  }

  return (
    <div>
      <div className="input_search">
        <input type="text" placeholder="search here.." value={inData} onChange={(e) => { handleChange(e) }} />
        <select onChange={(e) => { handleSort(e) }} >
          <option value={""}>Sort By</option>
          <option disabled>ID</option>
          <option value={"asc"} >Ascending Order</option>
          <option value={"desc"}>Descending Order</option>
        </select>
      </div>
      <div className="product_div" >
        {data && data.filter(val => {
          if (inData === "") { return val }
          else if (val.title.toLowerCase().includes(inData.toLowerCase())) {
            return val
          }
        }).map((item) => {
          return (
            <div className="product_card" key={item.id}>
              <div className="product_card1" >
                <div className="image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="card_details">
                  <div className="product_title">{item?.title.substring(0, 20)}...</div>
                  <div>Product ID: <span className="produ">{item?.id}</span></div>
                  <div>Price: <span className="produ">${item?.price}</span></div>
                  <div>Category: <span className="produ">{item.category}</span></div>
                  <div className="btn">
                    <button onClick={() => { dispatch(AddToCart(item)) }} >Add to Cart</button>
                  </div>
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
