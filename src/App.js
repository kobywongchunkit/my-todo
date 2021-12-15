import TodoList from './components/TodoList';
import TodoListFiltered from './components/TodoListFiltered';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import './App.css';

function App() {
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
            <Done />
          </Route>
          <Route path="/Undone">
            <Undone />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return  <>
    <div className="App">
    <TodoList></TodoList>
  </div></>
}

function Done() {
  return <TodoListFiltered done={true}></TodoListFiltered>;
}

function Undone() {
  return <TodoListFiltered done={false}></TodoListFiltered>;
}

export default App;
