import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import { INIT_TODO } from "./constants/constants";
import TodoList from './components/TodoList';
import TodoListFiltered from './components/TodoListFiltered';
import { getTodos } from "./apis/todo";
import { Menu } from 'antd';

import './App.css';
import 'antd/dist/antd.css'

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
        <Menu mode="horizontal">
          <Menu.Item key="1"><Link className="navBarItem" to="/">Home</Link></Menu.Item>
          <Menu.Item key="2"><Link className="navBarItem" to="/Done">Done</Link></Menu.Item>
          <Menu.Item key="3"><Link className="navBarItem" to="/Undone">Undone</Link></Menu.Item>
        </Menu>
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
