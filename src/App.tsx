import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IndexGenres from './genres/IndexGenres';
import { landingPageDTO } from './movies/movies.model';
import MoviesList from './movies/MoviesList';
import Menu from './Menu';
import LandingPage from './movies/LandingPage';
import routes from './route-config';
import configureValidations from './Validations';
import Footer from './Foorter';

configureValidations();

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <div className="container">
        <Routes>
          {/* <Route path="/" element={<LandingPage />} />
          <Route path="/genres" element={<IndexGenres />} /> */}

          {routes.map(route =>
            <Route key={route.path} path={route.path} element={<route.component />} />
          )}

        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
