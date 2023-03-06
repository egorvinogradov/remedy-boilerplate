import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './App.scss';

export class App extends React.Component {
  render = () => {
    return (
      <div className="App">
        <BrowserRouter>
          <h1>Header</h1>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/bounties">Bounties</NavLink>
            </li>
            <li>
              <NavLink to="/companies">Companies</NavLink>
            </li>
            <li>
              <NavLink to="/account">Account</NavLink>
            </li>
          </ul>
          <hr/>
          <Routes>
            <Route path="/" element={<h2>Home page</h2>}/>
            <Route path="/bounties" element={<h2>Bounties page</h2>}/>
            <Route path="/companies" element={<h2>Companies page</h2>}/>
            <Route path="/account" element={<h2>Account page</h2>}/>
          </Routes>
          <hr/>
          <h4>Footer</h4>
        </BrowserRouter>
      </div>
    );
  };
}
