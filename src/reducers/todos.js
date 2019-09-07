import {SET_TODOS} from '../actions/actions'

export default function todos(state=[], action){
    switch(action.type){
        case SET_TODOS:
            return action.payload;
        default: return state;
    }
}