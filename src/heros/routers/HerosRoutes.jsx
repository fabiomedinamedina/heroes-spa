import { Navigate, Route, Routes } from 'react-router-dom';

import { DcPage, HeroPage, MarvelPage, SearchPage } from '../';
import { NavBar } from '../../ui';
import { Footer } from '../../ui/components/Footer';

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
            
            <Route path="/*" element={ <Navigate to="/marvel" /> } />
          </Routes>
        </div>
        <div className="text-center">
          <Footer  />
        </div>
      </div>
    </>
  );
};
