import React from 'react';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom'
import TodoPage from './components/TodoPage'
import UserPage from './components/UserPage'
import TodoForm from './components/TodoForm'

function App() {
  return (
    <div className="ui container">
      <div className="ui three item menu">
          <Link className="item"  to="/">Home</Link>
          <Link className="item" to="/todos">Todos</Link>
          <Link className="item" to="/todos/new">Add New Todo</Link>
      </div>
          <Switch>
          <Route exact path="/"/>
          <Route exact path="/todos" component={TodoPage}/>
          <Route exact path="/todos/new" component={TodoForm}/>
          <Route exact path="/users" component={UserPage}/>
          </Switch>
    </div>
  );
}

export default App;
