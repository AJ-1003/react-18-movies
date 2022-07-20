// Actors
import CreateActor from "./actors/CreateActor";
import EditActor from "./actors/EditActor";
import IndexActors from "./actors/IndexActors";
// Genres
import CreateGenre from "./genres/CreateGenre";
import EditGenre from "./genres/EditGenre";
import IndexGenres from "./genres/IndexGenres";
// Movie Theaters
import CreateMovieTheater from "./movietheaters/CreateMovieTheater";
import EditMovieTheater from "./movietheaters/EditMovieTheater";
import IndexMovieTheaters from "./movietheaters/IndexMovieTheaters";
// Landing Page
import LandingPage from "./movies/LandingPage";
// Movies
import CreateMovie from "./movies/CreateMovie";
import EditMovie from "./movies/EditMovie";
import FilterMovies from "./movies/FilterMovies";
import MovieDetails from "./movies/MovieDetails";
// Register
import Register from "./auth/Register";
// Login
import Login from "./auth/Login";
// Users
import IndexUsers from "./auth/IndexUsers";

import RedirectToLandingPage from "./utils/RedirectToLandingPage";


const routes = [
    // Home
    {
        path: '/',
        component: LandingPage,
        exact: true
    },
    // Genres
    {
        path: '/genres',
        component: IndexGenres,
        exact: true,
        isAdmin: false
    },
    {
        path: '/genres/create',
        component: CreateGenre,
        isAdmin: true
    },
    {
        path: '/genres/edit/:id',
        component: EditGenre,
        isAdmin: true
    },
    // Actors
    {
        path: '/actors',
        component: IndexActors,
        exact: true,
        isAdmin: true
    },
    {
        path: '/actors/create',
        component: CreateActor,
        isAdmin: true
    },
    {
        path: '/actors/edit/:id',
        component: EditActor,
        isAdmin: true
    },
    // Movie Theaters
    {
        path: '/movietheaters',
        component: IndexMovieTheaters,
        exact: true,
        isAdmin: true
    },
    {
        path: '/movietheaters/create',
        component: CreateMovieTheater,
        isAdmin: true
    },
    {
        path: '/movietheaters/edit/:id',
        component: EditMovieTheater,
        isAdmin: true
    },
    // Movies
    {
        path: '/movies/create',
        component: CreateMovie,
        isAdmin: true
    },
    {
        path: '/movies/edit/:id',
        component: EditMovie,
        isAdmin: true
    },
    {
        path: '/movies/filter',
        component: FilterMovies
    },
    {
        path: '/movie/:id',
        component: MovieDetails
    },
    // Catch all parameter
    {
        path: '*',
        component: RedirectToLandingPage
    },
    // Register
    {
        path: '/register',
        component: Register
    },
    // Login
    {
        path: '/login',
        component: Login
    },
    // Users
    {
        path: '/users',
        component: IndexUsers,
        isAdmin: true
    }
];

export default routes;