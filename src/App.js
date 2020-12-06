import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import About from './pages/About/About'
import Contact from './pages/Contact'
import Help from './pages/Help'
import Home from './pages/Home'
import UserList from './pages/UserList'
import User from './pages/User'
import './App.css';


function App() {
  return (
    <Router>
      <div className='container'>
        <nav>
          <h1>React Router Demo</h1>

          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About us</Link>
            </li>
            <li>
              <Link to='/contact'>Contact us</Link>
            </li>
            <li>
              <Link to='/help'>Help</Link>
            </li>
            <li>
              <Link to='/user-list'>User List</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/about'>
            <About />
          </Route>

          <Route path='/contact'>
            <Contact />
          </Route>

          <Route path='/help'>
            <Help />
          </Route>

          <Route path='/user-list'>
            <UserList />
          </Route>

          <Route path='/users/:id'>
            <User />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
