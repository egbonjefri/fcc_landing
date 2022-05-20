import React from 'react';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import './materialize.css'
import './index.css'

export function untoggle () {
    const toggle = document.getElementsByClassName('toggle')[0];
    const menu = document.getElementsByClassName('menu')[0];
    const cover = document.getElementsByClassName('cover')[0];
    toggle.classList.remove('btn-active');
    menu.classList.remove('menu-active');
    menu.classList.remove('animate');
    cover.classList.remove('covering');
}

 const Navbar = ()=>{
    const value = useSelector((state) => state.counter.value);
    function toggleBtn () {
        const toggle = document.getElementsByClassName('toggle')[0];
        const menu = document.getElementsByClassName('menu')[0];
        const cover = document.getElementsByClassName('cover')[0];
        toggle.classList.toggle('btn-active');
        menu.classList.toggle('menu-active');
        menu.classList.add('animate');
        cover.classList.toggle('covering');
}

    return(
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" onClick={() => untoggle()} className="brand-logo">TurnTableGurus</Link>
                    <div className='toggle' onClick={() => toggleBtn()}>
                        <div className='one'></div>
                        <div className='two'></div>
                        <div className='three'></div>
                        </div>
                    <div className='menu' onClick={() => untoggle()}>
                        <ul className='menu-list'>
                            <li><Link to='/'>HOME</Link></li>
                            <li><Link to='/products'>PRODUCTS</Link></li>
                            <li><Link to='/contact'>CONTACT US</Link></li>
                        </ul>
                        </div>
                    <ul className="right">
                        <li><Link to='/contact'><span className='contact'>Contact Us</span></Link></li>
                        <li><Link to="/products"><span className='product'>Products</span></Link></li>
                        {value > 0 && <div className='banner'><span>{value}</span></div>}
                        <li onClick={() => untoggle()}><Link to="/cart"><i className="material-icons cart-icon">shopping_cart</i></Link></li>
                    
                    </ul>
                </div>
            </nav>  
    )
}

export default Navbar;