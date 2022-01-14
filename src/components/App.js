import React from 'react';
import './App.css';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import Friends from './Friends';
import Friend from './Friend';
import Dashboard from './Dashboard';
import serverData from '../serverData';
import PageNotFound from './PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <header className="header">
          <NavLink to='/' className="header__logo">Parrot Friendship Society</NavLink>
          <nav className="menu">
            <ul className="menu__list">
              <li className="menu__list-item"><NavLink className="menu__link" to='/friends'>Друзья</NavLink></li>
              <li className="menu__list-item"><NavLink className="menu__link" to='/news'>Новости</NavLink></li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route exact path='/'>
            <Dashboard />
          </Route>
          <Route exact path='/friends'>
            <Friends serverData={serverData} />
          </Route>
          <Route path='/friends/:id'>
            <Friend serverData={serverData} />
          </Route>
          <Route path='*'>
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
