import React from 'react';
import { shipping } from './reducers/cartReducer'
import './index.css'

import { useSelector, useDispatch } from 'react-redux'

export default function Total() {
    const total = useSelector((state) => state.counter.total);

    const dispatch = useDispatch();
    
    return (
        <div className='container total'>
            <div className='collection'>
                <div className='collection-item'>
                    <label>
                        <input onChange={(e) => 
                            dispatch(shipping(e.target.checked))} type='checkbox' />
                        <span>Add Shipping(+$20)</span>
                    </label>
                </div>
                <div className='collection-item'>
                    <b>Total:${total}</b>
                </div>
            </div>
            <div className='checkout'>
                <button className='waves-effect waves-light btn'>Checkout</button>

            </div>
        </div>
    )
}