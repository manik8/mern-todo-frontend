import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import TodoList from "./components/todos-list";
import EditTodo from "./components/edit-todo";
import CreateTodo from "./components/create-todo";
import logo from "./logo.png";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">
            <img src={logo} width="30" height="30" alt="Logo" />
          </a>
          <Link to="/" className="navbar-brand">
            MERN-Stack Todo App
          </Link>
          <div className="collpase nav-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">
                  Todos
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">
                  Create Todo
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Route path="/" exact component={TodoList} />
        <Route path="/edit/:id" exact component={EditTodo} />
        <Route path="/create" exact component={CreateTodo} />
      </div>
    </Router>
  );
}

export default App;
