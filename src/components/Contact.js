import React from 'react'
import GoogleMap from './GoogleMaps'
import './materialize.css'
import './index.css'
import { untoggle } from './Navbar'
import { Icon } from '@iconify/react'
export default function Contact (){
    
  

    function handleName(e) {
        let regex = /^[a-zA-Z]+ [a-zA-Z]+$/;
        const name = document.getElementsByClassName('name')[0];
        const nameError = document.getElementsByClassName('name-error')[0];

        if(!regex.test(e.target.value)) {
            name.classList.add('active');
            nameError.textContent = 'Must include first and last name'
            return true
        }
        else {
            name.classList.remove('active');
            nameError.style.display = 'none'
        }
    }
    function handleNum(e) {
        let regex = /^\+?([0-9]{2})\)?[-.]?([0-9]{4})[-.]?([0-9]{4})$/;
        const number = document.getElementsByClassName('number')[0];
        const numError = document.getElementsByClassName('num-error')[0];

        if(!regex.test(e.target.value)) {
            number.classList.add('active');
            numError.textContent = 'Invalid Phone Number Entered';
  
        }
        else {
            number.classList.remove('active');
            numError.style.display = 'none';
        }
    }
    function handleEmail(e) {
        const email = document.getElementsByClassName('email')[0];
        const emailError = document.getElementsByClassName('email-error')[0];

        if(email.validity.valueMissing || email.validity.typeMismatch || email.validity.tooShort) {
            email.classList.add('active');
            emailError.textContent = 'Invalid Email Address Entered';
        }
        else {
            email.classList.remove('active');
            emailError.style.display = 'none';
        }
    }
    function handleSubmit (e) {
        e.preventDefault();
    }
    return (
        <div className='about container'>
            <div className='message'>
                <div className='form-cta'>
               
                <form className='contact-form' onSubmit={handleSubmit}>
                <h5>Send us a message</h5>

                <label>
                    <span>Your name:</span>
                    <input onChange={handleName} type='text' className='name' name='name' required placeholder='Jane Doe' />
                    <div className='name-error'></div>
                </label>
                <label>
                    <span>Phone Number:</span>
                    <input onChange={handleNum} type='number' className='number' name='number' placeholder='+1(234)(456)(7890)' />
                    <div className='num-error'></div>
                </label>
                <label>
                    <span>Email Address:</span>
                    <input onChange={handleEmail} type='email' className='email' minLength='7' name='email' placeholder='abc@example' />
                    <div className='email-error'></div>
                </label>
                <label>
                    <span>Your name:</span>
                    <textarea type='text' className='text' name='text' placeholder='How can we help you today?' />
                </label>
                <button type='submit' formNoValidate className='btns right'><i className='material-icons'>send</i></button>
    </form>
                <div className='our-info'>
                    <h5>Our Contact Information</h5>
                    <br />
                    <p><i className='material-icons'>location_on</i><span>852 Bannatyne Avenue,<br /> Winnipeg, MB. R3E0W5</span></p>
                    <br />
                    <p><i className='material-icons'>local_phone</i><span>+12045158384</span></p>
                    <p><i className='material-icons'>local_post_office</i><span>support@turntablegurus.ca</span></p>
               <div className='icons'>
               <div><Icon icon='akar-icons:facebook-fill' /></div>
               <div><Icon icon='akar-icons:twitter-fill' /></div>
               <div><Icon icon='akar-icons:instagram-fill' /></div>
               <div><Icon icon='akar-icons:youtube-fill' /></div>
               </div>
                
                </div>
                </div>
            </div>
            <div className='maps' >
                <h5>Pay us a visit...</h5>
                <div className='maps-cta'>
            <GoogleMap />
            </div>
            </div>
            <div onClick={() => untoggle()} className='cover'></div>

        </div>
    )
}