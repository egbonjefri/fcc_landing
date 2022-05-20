
import React from 'react';
import './materialize.css'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from './reducers/cartReducer'
import './index.css'
import { untoggle } from './Navbar'


 function Products() {
     const items = useSelector((state) => state.counter.items);
     const dispatch = useDispatch();

   let itemList = items.map(item=>{
        return(<div className='card' key={item.id}>
                <div className='card-image'>
                    <img src={item.img} alt={item.title} />
                    <span className='card-title'>{item.title}</span>
                    <span to='/' className='btn-floating halfway-fab waves-effect waves-light black' onClick={() => dispatch(addToCart(item.id))}><i className='material-icons add-button'>add</i></span>
                </div>
                <div className='card-content'>
                    <p>{item.desc}</p>
                    <p><b>Price: ${item.price}</b></p>
                    <p className='stock'>{(item.stock === 1) ? `${item.stock} item left in stock!` : (item.stock > 1) ? `${item.stock} items left in stock!` : 'Sold out.'}</p>
                </div>
        </div>)
    })
   return (
       <div className='container product-box'>
           <h3 className='center'>A selection of our products...</h3>
           <div className='box'>{itemList}</div>
           <div onClick={() => untoggle()} className='cover'></div>

       </div>
   ) 
}


export default Products