import { Navigate, Route, Routes, useLocation, Link } from "react-router-dom";
import { LazyPage1, LazyPage2, LazyPage3 } from "../pages";

export const Navigation = () => {

    const location = useLocation();

    console.log(location);

    return (
        <>
            <h2>Lazy layout pages</h2>
            <ul>
                <li>
                    <Link to={`/lazyload/lazy1`}>Lazy Page 1</Link>
                </li>
                <li>
                    <Link to={`/lazyload/lazy2`}>Lazy Page 2</Link>
                </li>
                <li>
                    <Link to={`/lazyload/lazy3`}>Lazy Page 3</Link>
                </li>
            </ul>
            <Routes>
                <Route path={`lazy1`} element={<LazyPage1/>} />
                <Route path={`lazy2`} element={<LazyPage2/>} />
                <Route path={`lazy3`} element={<LazyPage3/>} />
                <Route path={'/*'} element={<Navigate to={'/lazyload/lazy1'}/>} />
            </Routes>
        </>
    )
}

