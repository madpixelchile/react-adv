import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes
} from 'react-router-dom';

import logo from '../logo.svg';
import { FormikBasicPage, FormikYupPage, FormikComponents, FormikAbstractation, ResgisterPage, ResgisterFormikPage } from '../03-forms/pages';
import { DynamicForm } from '../03-forms/pages/DynamicForm';

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/">Register Page</NavLink>
            </li>
            <li>
              <NavLink to="/register-formik-page">Register Formik Page</NavLink>
            </li>
            <li>
              <NavLink to="/formik-basic">Formik basic Page</NavLink>
            </li>
            <li>
              <NavLink to="/formik-yup">Formik Yup Page</NavLink>
            </li>
            <li>
              <NavLink to="/formik-components">Formik Components</NavLink>
            </li>
            <li>
              <NavLink to="/formik-abstractation">Formik Abstractation</NavLink>
            </li>
            <li>
              <NavLink to="/dynamic-form">Dynamic Form</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" element={<ResgisterPage/>}/>
          <Route path="/register-formik-page" element={<ResgisterFormikPage/>}/>
          <Route path="/formik-basic" element={<FormikBasicPage/>}/>
          <Route path="/formik-yup" element={<FormikYupPage/>}/>
          <Route path="/formik-components" element={<FormikComponents/>}/>
          <Route path="/formik-abstractation" element={<FormikAbstractation/>}/>
          <Route path="/dynamic-form" element={<DynamicForm/>}/>
          <Route path="/about" element={<h1>About</h1>}/>
          <Route path="/home" element={<h1>Home</h1>}/>
        </Routes>
      </div>
    </Router>
  );
}