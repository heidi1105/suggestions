import React, { useState } from 'react'
import UserDisplay from '../components/UserDisplay'


// form input : onChange, variable that keeps changing
const OneStateForm = () => {
    const [formState, setFormState] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirm: ""
    })

    const [formError, setFormError] = useState({
        firstname: true,
        lastname: true,
        email: true,
        password: true,
        confirm: true
    })

    const [userList, setUserList] = useState([])


    // form message
    const handleInput = (e) => {
        const keyToUpdate = e.target.name; // firstname
        const valToUpdate = e.target.value; // Heidi
        setFormState({
            ...formState,
            [keyToUpdate]: valToUpdate
        })

        // handle all errors
        const errors = { ...formError } // formError is state variable, harder to manipulate

        switch (keyToUpdate) {
            case 'firstname':
                valToUpdate.length < 3 ?
                    errors.firstname = "firstname must be at least 3 characters" :
                    errors.firstname = false
                break;
            case 'lastname':
                valToUpdate.length < 3 ?
                    errors.lastname = "lastname must be at least 3 characters" :
                    errors.lastname = false
                break;
            case 'email':
                valToUpdate.length < 8 ?
                    errors.email = "email must be at least 8 characters" :
                    errors.email = false
                break;
            case 'password':
                valToUpdate.length < 8 ?
                    errors.password = "password must be at least 8 characters" :
                    errors.password = false
                valToUpdate !== formState.confirm?
                    errors.confirm = "password must match" :
                    errors.confirm = false
                break;
            case 'confirm':
                valToUpdate !== formState.password ?
                    errors.confirm = "password must match" :
                    errors.confirm = false
                break;
        }
        setFormError(errors)

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // api call to backend
        // change the view to make it updated
        if(!isValid()){
            alert("invalid form")
        }else{
            setUserList([...userList, formState])
            clearForm()
        }

    }

    const isValid = ()=>{
       return Object.values(formError).every((item=>item===false))
    }

    const clearForm = ()=>{
        setFormState({
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            confirm: ""
        })
    }

    return (
        <div>
            <h1> User form</h1>
            <form onSubmit={ handleSubmit }>
            <div>
                <label>First Name: </label> 
                <input type="text" name="firstname" value={formState.firstname} onChange={ handleInput } />
                <p> {formError.firstname}</p> 
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" name="lastname" value={formState.lastname} onChange={ handleInput} />
                <p> {formError.lastname} </p>
            </div>

            <div>
                <label>Email Address: </label> 
                <input type="text" name="email" value={formState.email} onChange={ handleInput } />
                <p> {formError.email}</p>
            </div>
            <div>
                <label>Password: </label>
                <input type="password" name="password" value={formState.password} onChange={ handleInput } />
                <p> {formError.password}</p>
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" name="confirm" value={formState.confirm} onChange={ handleInput } />
                <p> {formError.confirm} </p>
            </div>
            <input type="submit" value="Create User" />
            </form>
            <UserDisplay users={userList} />

        </div>
    )
}

export default OneStateForm