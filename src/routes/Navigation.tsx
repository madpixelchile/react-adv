

import { BrowserRouter as Router, NavLink, Navigate, Route, Routes } from 'react-router-dom';
import logo from '../logo.svg'
import { routes } from './routes';
import { Suspense } from 'react';

export const Navigation = () => {

    return (
        <>
        <Suspense fallback={<span>Loading...</span>}>

            <Router>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="React Logo" />
                        <ul>
                            {
                                routes.map(({ name, path }) => (
                                    <li key={name}>
                                        <NavLink to={path} className={({ isActive }) => isActive ? 'nav-active' : ''} >
                                            {name}
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                    <Routes>
                        {
                            routes.map(({ name, path, component: Component }) => (<Route key={name} path={path} element={<Component />} />))
                        }
                        <Route path="/*" element={<Navigate to="/home" replace />} />
                    </Routes>
                </div>
            </Router>

        </Suspense>
        
        </>
    )
}
