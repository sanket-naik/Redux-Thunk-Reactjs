import React, {useEffect} from 'react'
import {fetchUsers} from '../actions/actions'
import {connect} from 'react-redux'
import UserList from './UserList'

 function UserPage(props) {

    useEffect(() => {
        props.fetchUsers();
    }, [])

    return (
        <div>
           <h2>USER List</h2>
           <UserList users={props.users}/>
        </div>
    )
}

function mapStateToProps(state) {
    return{
        users:state.users
    }
}

export default connect(mapStateToProps,{fetchUsers})(UserPage)
