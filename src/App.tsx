import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IndexGenres from './genres/IndexGenres';
import { landingPageDTO } from './movies/movies.model';
import MoviesList from './movies/MoviesList';
import Menu from './Menu';

function App() {
  const [movies, setMovies] = useState<landingPageDTO>({});

  useEffect(() => {
    const timerId = setTimeout(() => {
      setMovies({
        inTheaters: [
          {
            id: 1,
            title: 'Fast and Furious',
            poster: 'https://m.media-amazon.com/images/M/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg'
          },
          {
            id: 2,
            title: 'Fast and Furious 2',
            poster: 'https://i1.sndcdn.com/avatars-000390528711-faqjdq-t500x500.jpg'
          },
          {
            id: 3,
            title: 'Fast and Furious: Tokyo Drift',
            poster: 'https://images.moviesanywhere.com/0d8385198e30c6ac086b643c6a13ab50/0baff3aa-3327-4e33-9546-600bea206acf.jpg'
          }
        ],
        upcomingReleases: [
          {
            id: 4,
            title: 'Fast and Furious 4',
            poster: 'https://sub5zero.com/wp-content/uploads/2015/07/fast_and_the_furious_4.jpeg.jpg'
          }
        ]
      })
    }, 1000);
    return () => clearTimeout(timerId);
  })

  return (
    <BrowserRouter>
      <Menu />
      <div className="container">
        {/* <Routes>
          <Route path="/"> */}
            <h3>In Theaters</h3>
            <MoviesList movies={movies.inTheaters} />

            <h3>Upcoming Releases</h3>
            <MoviesList movies={movies.upcomingReleases} />
          {/* </Route> */}

          {/* <Route path="/genres">*/}
            <IndexGenres />
          {/* </Route> */}
        {/* </Routes> */}
      </div>
    </BrowserRouter>
  );
}

export default App;