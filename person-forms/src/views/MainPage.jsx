import React, { useState } from 'react'
import PersonCard from '../components/PersonCard'

const MainPage = () => {
    const [personList, setPersonList] = useState([
        { firstname: "Jane", lastname: "Doe", age: 45, hairColor: "Black" },
        { firstname: "John", lastname: "Smith", age: 88, hairColor: "Brown" },
        { firstname: "Millard", lastname: "Fillmore", age: 50, hairColor: "Brown" },
        { firstname: "Maria", lastname: "Smith", age: 62, hairColor: "Brown" },
    ])

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [age, setAge] = useState(0);
    const [hairColor, setHairColor] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
        addPersonToDom({firstname, lastname, age, hairColor})
        clearForm();
    }

    const addPersonToDom = (newPerson) =>{
        setPersonList([...personList, newPerson])
    }

    const clearForm =()=>{
        setFirstname("")
        setLastname("")
        setAge(0)
        setHairColor("")
    }
    


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name: </label>
                    <input type="text" name="firstname" value={firstname} onChange={e=>setFirstname(e.target.value)} />
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" name="lastname" value={lastname} onChange={e=>setLastname(e.target.value)} />
                </div>
                <div>
                    <label>Age: </label>
                    <input type="number" name="age" value={age} onChange={e=>setAge(e.target.value)} />
                </div>
                <div>
                    <label>Hair Color: </label>
                    <input type="text" name="hairColor" value={hairColor} onChange={e=>setHairColor(e.target.value)} />
                </div>
                <button type="submit"> Submit</button>
            </form>


            <div>
                {
                    personList.map((eachPerson, idx) =>
                        <PersonCard key={idx} person={eachPerson} />)
                }
            </div>
        </div>
    )
}

export default MainPage