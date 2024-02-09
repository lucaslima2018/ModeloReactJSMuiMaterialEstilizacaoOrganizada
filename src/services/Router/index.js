
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from '../../pages/Login';
import Home from '../../pages/Home';

import AccessDenied from '../../components/accessDenied';

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/home' element={<Home />} /> 

                <Route path='accessDenied' element={<AccessDenied/>} />                               
            </Routes>
        </BrowserRouter>
    );
}
export default Router;
