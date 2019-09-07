export const SET_TODOS='SET_TODOS'
export const SET_USERS='SET_USERS'

export function setTodos(todo){
    return{
        type: SET_TODOS,
        payload:todo 
    }
}

export function setUsers(users){
    return{
        type: SET_USERS,
        payload:users 
    }
}

export function fetchTodos() {
    return dispatch=>{
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())
            .then(data => dispatch(setTodos(data)))
    }
}

export function fetchUsers(){
    return dispatch=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=>response.json())
            .then(data=>dispatch(setUsers(data)))
    }
}


export function saveTodo(data) {
    console.log(data)
    return dispatch=>{
        return fetch('https://jsonplaceholder.typicode.com/todos',{
            method:'post',
            body:JSON.stringify(data),
            headers:{
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(json => console.log(json))
    }
}