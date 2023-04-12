import { Navigate, Route, Routes } from 'react-router-dom';

import { LoginPage } from '../auth';  
import { HerosRoutes } from '../heros/';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={ <LoginPage /> } />
        <Route path="/*" element={ <HerosRoutes /> } />
      </Routes> 
    </>
  );
};
