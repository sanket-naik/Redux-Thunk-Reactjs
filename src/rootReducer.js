import {combineReducers} from 'redux'
import todos from './reducers/todos'
import users from './reducers/users'

export default combineReducers({
    todos,
    users
})