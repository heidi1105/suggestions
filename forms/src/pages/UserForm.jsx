import React, {useState} from 'react';

const UserForm = (props) =>{
    const [firstname , setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const [firstnameErr, setFirstnameErr] = useState(true)
    const [lastnameErr, setLastnameErr] = useState(true)
    const [emailErr, setEmailErr] = useState(true)
    const [passwordErr, setPasswordErr] = useState(true)
    const [confirmErr, setConfirmErr] = useState(true)

    const [userList, setUserList] = useState([])
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(isInvalid()){
            alert("Invalid form")
        }else{
            const newUser = { firstname, lastname, email, password }
            addUserToDom(newUser)
            console.log("Welcome", newUser);
            setSubmitted(true);
        }
    }

    const addUserToDom=(newUser)=>{
        setUserList([...userList, newUser])
    }

    const isInvalid = ()=>{
        return firstnameErr || lastnameErr || emailErr || passwordErr || confirmErr
    }

    const formMessage =() =>{
        return submitted? "Thank you for submitting the form!" : "Welcome. Please submit the form"
    }

    const handleFirstname = (e)=>{
        setFirstname(e.target.value)
        if(e.target.value.length <2){
            setFirstnameErr("First name needs to be more than 2 character")
        }else{
            setFirstnameErr(false)
        }
    }

    const handleLastname = (e)=>{
        setLastname(e.target.value)
        if(e.target.value.length <2){
            setLastnameErr("Last name needs to be more than 2 character")
        }else{
            setLastnameErr(false)
        }
    }

    const handleEmail = (e)=>{
        setEmail(e.target.value)
        if(e.target.value.length <8){
            setEmailErr("Email needs to be more than 8 character")
        }else{
            setEmailErr(false)
        }
    }

    const handlePassword = (e)=>{
        setPassword(e.target.value)
        if(e.target.value.length <8){
            setPasswordErr("Password needs to be more than 2 character")
        }else{
            setPasswordErr(false)
        }
    }

    const handleConfirm = (e)=>{
        setConfirm(e.target.value)
        if(e.target.value !== password){
            setConfirmErr("Confirm password does not match")
        }else{
            setConfirmErr(false)
        }
    }




    return(
        <>
            <h1> {formMessage()} </h1>
            <form onSubmit={ handleSubmit }>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ handleFirstname } />
                <p> {firstnameErr}</p> 
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ handleLastname} />
                <p> {lastnameErr} </p>
            </div>

            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ handleEmail } />
                <p> {emailErr}</p>
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ handlePassword } />
                <p> {passwordErr}</p>
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={ handleConfirm } />
                <p> {confirmErr} </p>
            </div>
            <input type="submit" value="Create User" />
            </form>

            <div>
                {
                    userList.map((user, idx)=>
                    <p key={idx}> {user.firstname} {user.lastname} ({user.email})</p>)
                }
            </div>

          </>    
    )

}
export default UserForm