import React from 'react'
import GoogleMap from './GoogleMaps'
import './materialize.css'
import './index.css'

export default function Contact (){
    return (
        <div className='about container'>
            <div className='message'>
                <div className='form-cta'>
                <form className='contact-form'>
                <h5>Send us a message</h5>

                <label>
                    <span>Your name:</span>
                    <input type='text' className='name' name='name' placeholder='Jane Doe' />
                </label>
                <label>
                    <span>Phone Number:</span>
                    <input type='number' className='number' name='number' placeholder='+1(234)(456)(7890)' />
                </label>
                <label>
                    <span>Email Address:</span>
                    <input type='email' className='email' name='email' placeholder='abc@example' />
                </label>
                <label>
                    <span>Your name:</span>
                    <textarea type='text' className='text' name='text' placeholder='How can we help you today?' />
                </label>
                <i className='material-icons right'>send</i>
                </form>
                <div className='our-info'>
                    <h5>Our Contact Information</h5>
                    <br />
                    <p><i className='material-icons'>location_on</i><span>852 Bannatyne Avenue,<br /> Winnipeg, MB. R3E0W5</span></p>
                    <br />
                    <p><i className='material-icons'>local_phone</i><span>+12045158384</span></p>
                    <br />
                    <p><i className='material-icons'>local_post_office</i><span>support@turntablegurus.ca</span></p>
                </div>
                </div>
            </div>
            <div className='maps' >
                <h5>Pay us a visit...</h5>
                <div className='maps-cta'>
            <GoogleMap />
            </div>
            </div>
            <div className='cover'></div>

        </div>
    )
}