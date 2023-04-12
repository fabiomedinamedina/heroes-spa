import { Navigate, Route, Routes } from 'react-router-dom';

import { DcPage, HeroPage, MarvelPage, SearchPage } from '../';
import { NavBar } from '../../ui';

export const HerosRoutes = () => {
  return (
    <>
      <div className="container-page">
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="marvel" element={ <MarvelPage /> } />
            <Route path="dc" element={ <DcPage /> } />
            <Route path="search" element={ <SearchPage /> } />
            <Route path="hero/:id" element={ <HeroPage /> } />
            
            <Route path="/" element={ <Navigate to="/marvel" /> } />
          </Routes>
        </div>
      </div>
    </>
  );
};
