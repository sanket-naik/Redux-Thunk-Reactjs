import React from 'react'

export default function UserList({users}) {
    const emptyMessage=(
        <p>No Users To Show.</p>
    )

    const userList=(
        users.map((e)=>(
            <h4>{e.email}</h4>
        ))
    )

    return (
        <div>
            {users.length===0?emptyMessage:userList}
        </div>
    )
}
