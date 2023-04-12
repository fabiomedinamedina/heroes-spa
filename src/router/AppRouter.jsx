import { Navigate, Route, Routes } from 'react-router-dom';

import { LoginPage } from '../auth';  
import { HerosRoutes } from '../heros/';
import { PrivateRoute, PublicRoute } from './';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path='/login'
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path='/*'
          element={
            <PrivateRoute>
              <HerosRoutes />
            </PrivateRoute>
          }
        />
      </Routes> 
    </>
  );
};
