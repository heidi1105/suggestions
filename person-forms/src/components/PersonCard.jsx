import React,{useState} from 'react'

const PersonCard = (props) => {
    const {firstname, lastname, age, hairColor} = props.person;

    const [addedAge, setAddedAge] = useState(0);

    return (
        <div>
            <h1> {lastname}, {firstname}</h1>
            <h3> Age: {age + addedAge}</h3>
            <h3> Hair Color: {hairColor}</h3>
            <button onClick={()=>setAddedAge(addedAge+1)}> Birthday Button for {firstname} {lastname}</button>

        </div>
    )
}

export default PersonCard