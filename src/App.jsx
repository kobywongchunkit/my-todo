import { useEffect } from "react";
import { useDispatch } from "react-redux";
import TodoList from './components/TodoList';
import TodoListFiltered from './components/TodoListFiltered';
import { getTodos } from "./apis/todo";
import { INIT_TODO } from "./constants/constants";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
	getTodos().then((response)=>{
          dispatch({type:INIT_TODO, payload:response.data});
      })
  });

  return (
    <Router>
      <div>
        <ul id="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Done">Done</Link>
          </li>
          <li>
            <Link to="/Undone">Undone</Link>
          </li>
        </ul>
		
        <Switch>
          <Route path="/Done">
          	<TodoListFiltered done={true}/>
          </Route>
          <Route path="/Undone">
		  	<TodoListFiltered done={false}/>
          </Route>
          <Route path="/">
		  	<TodoList/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
