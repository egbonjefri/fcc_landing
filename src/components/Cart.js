import React from 'react'
import Total from './Total'
import { increment, decrement, removeFromCart } from './reducers/cartReducer'
import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import './materialize.css'
import './index.css'
import { untoggle } from './Navbar'


export default function Cart() {
  const addedItems = useSelector((state) => state.counter.iterateItems)

  const dispatch = useDispatch()

   let x  = addedItems.map(item => {
      return (
        <li className='collection-item avatar cart-collection-item' key={item.id}>
          <div className='item-img'>
            <img src={item.img} alt={item.desc} />
          </div>
          <div className='item-desc'>
            <span className='title'><b>{item.title}</b></span>
            <p>{item.desc}</p>
            <p><b>Price: ${item.price}</b></p>
            <p><b>Quantity: <button onClick={() => dispatch(increment(item.id))} className='add-button'><i className='material-icons icon-remove'>add</i></button>{item.quantity}
            {item.quantity > 1 && 
            <button onClick={() => dispatch(decrement(item.id))} className='add-button'><i className='icon-add material-icons'>remove</i></button>
} 
            </b></p>
            <button onClick={() => dispatch(removeFromCart(item.id))} className='waves-effect waves-light btn pink remove'>Remove</button>
        </div>
        </li>
      )
    })
    
  return(
    <div className='container cart-cont'>
         {addedItems.length > 0 && <div className='cart'>
           <h5 className='ordered center'>You have ordered:</h5>
          <ul className='collection cart-collection'>{x}</ul>
          <Total className='total' />
          </div>
         }
         {addedItems.length === 0 && <p className='center'>Nothing to see here...Please add <Link className='text-dec'to='/products'>products</Link> to your cart.</p>}
         <div onClick={() => untoggle()} className='cover'></div>
         </div> 
  )
}