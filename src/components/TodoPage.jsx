import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import TodoList from './TodoList'
import {fetchTodos} from '../actions/actions'

 function TodoPage(props) {

    useEffect(() => {
        props.fetchTodos();
    }, [])

    return (
        <div>
            <h2>TODO List</h2>
            <TodoList todos={props.todos}/>
        </div>
    )
}

// GamePage.propTypes={
//     games:React.PropsTypes.array.isRequired
// }

function mapStateToProps(state) {
    return{
        todos:state.todos
    }
}

export default connect(mapStateToProps, {fetchTodos})(TodoPage)