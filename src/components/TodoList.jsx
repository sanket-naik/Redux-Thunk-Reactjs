import React from 'react'

export default function TodoList({todos}) {

    const emptyMessage=(
        <p>No Games To Show.</p>
    )

    const todoList=(
        todos.map((e)=>(
            <h4 key={e.id}>{e.title}</h4>
        ))
    )

    return (
        <div>
            {todos.length===0?emptyMessage:todoList}
        </div>
    )
}

// GamesList.propTypes={
//     games:React.PropsTypes.array.isRequired
// }