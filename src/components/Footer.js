import React from 'react'
import './materialize.css'
import './index.css'
export default function Footer () {
    return (
        <footer className='page-footer'>
            <div className='footer-copyright'>
                <div className='container'>
            <a href='/' className='black-text text-lighten-4 left'> © 2022 TurnTable Gurus</a>
            <a  href='/'className='black-text text-lighten-4 right'>Terms</a>
            <a  href='/'className='black-text text-lighten-4 right'>Privacy</a>
            </div>
            </div>
        </footer>
    )
}