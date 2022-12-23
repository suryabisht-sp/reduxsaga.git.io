import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import "./cart.css"
import { AddToCart, clearAll, removeFromCart } from '../redux/action'

const Cart = () => {
  const dispatch = useDispatch();
  const cartdata = useSelector((state) => state.cartData)
  let amount1 = cartdata?.length && cartdata.map((item) => item.price).reduce((prev, next) => prev + next)  
  let amount = Math.round(amount1);
  let taxes = Math.round(amount * .18)
  let dis = Math.round(amount / 10)
  let total = ((amount + taxes) - dis).toFixed(2)
  
  return (
    <div>
      <div className="btn">
        <button onClick={() => { dispatch(clearAll()) }} >Clear Cart</button>
      </div>
      <Link to="/">  <div className="btn"><button>Back</button></div></Link>
      {cartdata.length >= 1 ?
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price ($)</th>
                <th>QTY</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {cartdata.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>
                      <div className='image_div'>
                        <img src={item.image} alt={item.title} /> {" "}
                        <span style={{ padding: "12px" }}>{item.title.substring(0, 20)}</span>
                        <div className="div_btn">
                          <button onClick={() => { dispatch(removeFromCart(item.id)) }} >Del</button>
                        </div>
                      </div>
                    </td>
                    <td>{item.price}</td>
                    <td>-</td>
                    <td>{item.category}</td>
                  </tr>)
              })}
            </tbody>
          </table>
          <div>
            <div>Amount : $<span>{amount}</span></div>
            <div>Taxes 18% : $<span>{taxes} </span></div>
            <div>Discount 10% : $<span>{dis}</span></div>
            <div>Total Amount : $<span>{total}</span></div>
          </div>
        </div>
        :
        <div><h1>Please add something to cart</h1></div>}
    </div>
  )
}

export default Cart