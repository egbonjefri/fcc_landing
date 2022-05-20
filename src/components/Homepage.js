import React from 'react';
import './materialize.css'
import './index.css'
import Specifications from './Specifications'
import { untoggle } from './Navbar'
export default function Homepage() {

    function caller(e) {
        const emailError = document.getElementsByClassName('error')[0];
        const successIcon = document.getElementsByClassName('success-icon')[0];
        const failureIcon = document.getElementsByClassName('failure-icon')[0]
        const email = document.getElementsByClassName('email')[0]
        function showError() {
            if (email.validity.valueMissing) {
                emailError.textContent = 'You need to enter an email address.'
                e.preventDefault();
                emailError.style.display='block';
                successIcon.style.display = 'none'
                failureIcon.style.display = 'block'
                email.classList.toggle('active');
            }
            else if (email.validity.typeMismatch) {
                emailError.textContent = 'Entered value needs to be an email address.'
                emailError.style.display='block';
                successIcon.style.display = 'none'
                failureIcon.style.display = 'block'
                email.classList.toggle('active');
                e.preventDefault();
            }
            else if (email.validity.tooShort) {
                emailError.textContent = `Email should be at least ${email.minLength}
                 characters; you entered ${email.value.length}.`
                 emailError.style.display='block';
                 successIcon.style.display = 'none'
                 failureIcon.style.display = 'block'
                 email.classList.toggle('active');
                 e.preventDefault();
                }
            else {
                emailError.style.display='none';
                successIcon.style.display = 'block'
                failureIcon.style.display = 'none';
                email.classList.remove('active');
            }
        }
    showError();
    }
    return(
        <div>
        <div className='form'>
            <div className='sign-up'>
                <div className='sign-up-cta'>
                    <h2>Sign up now to join our mailing list and be the first to 
                        hear about our exclusive offers!
                    </h2>
                <label className='sign-up-lab'>
                    <span>Email:</span>
                    <input onChange={(e) => caller(e)} type='email' className='email' name='email' placeholder='abc@example.com' required minLength='7' maxLength='50' />
                    <i className='material-icons success-icon'><span>done</span></i>
                    <i className='material-icons failure-icon'><span>priority_high</span></i>

                </label>
                <div className='error'></div>
                <input type='submit' onClick={(e) => caller(e)} formNoValidate value='GET STARTED' className='submit-button' />
                    </div>
            </div>
            <Specifications />
        </div>
        <div onClick={() => untoggle()} className='cover'></div>

        </div>
    )
}