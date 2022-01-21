import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { NavigateRoute } from './NavigateRoute';

// pages
import LoginPage from '../pages/login/Login';


const AppRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/iniciar-sesion" element={
                    <PublicRoute>
                        <LoginPage />
                    </PublicRoute>
                } />

                <Route path="/*" element={
                    <PrivateRoute>
                        <NavigateRoute />
                    </PrivateRoute>
                } />

            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;