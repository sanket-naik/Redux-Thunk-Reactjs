import React, {useState} from 'react'
import {connect} from 'react-redux'
import {saveTodo} from '../actions/actions'

 function TodoForm(props) {

    const [Notes, setNotes] = useState({
        title: "",
        completed: false,
        loading:false,
    })

    function handleChange(e) {
        const{name, value}=e.target;
    
        if(name==='completed'){
            setNotes({...Notes, [name]:JSON.parse(value)})
        }else{
            setNotes({...Notes, [name]:value})
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        const{title, completed}=Notes;
        setNotes({...Notes, loading:true})
        props.saveTodo({title, completed})

    }

    return (
        <form className="ui form " onSubmit={handleSubmit}>
            <h1>Add new todo</h1>
            <div className="field">
                <label htmlFor="title">Note</label>
                <input 
                    id="title"
                    name="title"
                    value={Notes.title}
                    placeholder="Enter Note"
                    onChange={handleChange}/>
            </div>
            <div className="field">
                <label htmlFor="dropdown">Completed?</label>
                <select className="ui dropdown" id="dropdown" name="completed" onChange={handleChange}>
                    <option value={false}>Not Complated</option>
                    <option value={true}>Complated</option>
                </select>
            </div>
            <div className="field">
                <button className="ui primary button">Add Todo</button>
            </div>
        </form>
    )
}

export default connect(null, {saveTodo})(TodoForm)