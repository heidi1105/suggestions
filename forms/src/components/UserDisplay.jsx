import React from 'react'

const UserDisplay = (props) => {
    const {users} = props;

    return (
        <ul>
            {
                users.map((eachUser, idx)=>
                <li key={idx}> {eachUser.firstname} {eachUser.lastname} ({eachUser.email})</li>
                )
            }
        </ul>
    )
}

export default UserDisplay