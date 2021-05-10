import React, { useState } from 'react'

const Form = () => {

    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");

    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const handleFirstName = (a) => {
        setFirstName(a.target.value);
        if(a.target.value.length < 1) {
            setFirstNameError("First name is required!");
        } else if(a.target.value.length < 3) {
            setFirstNameError("First name must be 3 characters or longer!");
        } else if(a.target.value.length >= 3) {
            setFirstNameError(false);
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setLastNameError("Last name is required!");
        } else if(e.target.value.length < 3) {
            setLastNameError("Last name must be 3 characters or longer!");
        } else if(e.target.value.length >= 3) {
            setLastNameError(false);
        }
    }

    const handleEmail = (i) => {
        setEmail(i.target.value);
        if(i.target.value.length < 1) {
            setEmailError("Email is required!");
        } else if(i.target.value.length < 3) {
            setEmailError("Email must be 3 characters or longer!");
        } else if(i.target.value.length >= 3) {
            setEmailError(false);
        }
    }

    const handlePassword = (o) => {
        setPassword(o.target.value);
        if(o.target.value.length < 1) {
            setPasswordError("Password is required!");
        } else if(o.target.value.length < 8) {
            setPasswordError("Password must be 8 characters or longer!");
        } else if(o.target.value.length >= 8) {
            setPasswordError(false);
        }
    }

    const handleConfirmPassword = (u) => {
        setConfirmPassword(u.target.value);
        if(u.target.value != password) {
            setConfirmPasswordError("Confirm Password must match!");
        } else if(u.target.value === password) {
            setConfirmPasswordError(false);
        }
    }

    return (
        <form onSubmit={ (e) => e.preventDefault() }>
            <div>
                <label htmlFor="firstName">First Name: </label>
                <input type="text" name="firstName" onChange={ handleFirstName } />
                {
                    firstNameError ?
                    <p style={{color:'red'}}>{ firstNameError }</p> :
                    ''
                }
            </div>
            <div>
                <label htmlFor="lastName">Last Name: </label>
                <input type="text" name="lastName" onChange={ handleLastName } />
                {
                    lastNameError ?
                    <p style={{color:'red'}}>{ lastNameError }</p> :
                    ''
                }
            </div>
            <div>
                <label htmlFor="email">Email: </label>
                <input type="text" name="email" onChange={ handleEmail } />
                {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                }
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="text" name="password" onChange={ handlePassword } />
                {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
                }
            </div>
            <div>
                <label htmlFor="confirmPassword">Confirm Password: </label>
                <input type="text" name="confirmPassword" onChange={ handleConfirmPassword } />
                {
                    confirmPasswordError ?
                    <p style={{color:'red'}}>{ confirmPasswordError }</p> :
                    ''
                }
            </div>
        </form>
    )
}

export default Form