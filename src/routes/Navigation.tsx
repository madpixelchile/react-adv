import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
  Navigate
} from 'react-router-dom';

import logo from '../logo.svg';
import { ShoppingPage } from '../02-component-patterns/pages/ShoppingPage';

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo" />
            <ul>
                <li>
                    <NavLink to="/home" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>About</NavLink>
                </li>
                <li>
                    <NavLink to="/users" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Users</NavLink>
                </li>
            </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Routes>
              <Route path="about" element={ <h1>About Page</h1> } />
              <Route path="users" element={ <h1>Users Page</h1> } />
              <Route path="home" element={ <ShoppingPage/> } />
              
              <Route path="/*" element={ <Navigate to="/home" replace /> } />
          </Routes>
      </div>
    </Router>
  );
}