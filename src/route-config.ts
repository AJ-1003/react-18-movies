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
import RedirectToLandingPage from "./utils/RedirectToLandingPage";
import MovieDetails from "./movies/MovieDetails";

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
        exact: true
    },
    {
        path: '/genres/create',
        component: CreateGenre
    },
    {
        path: '/genres/edit/:id',
        component: EditGenre
    },
    // Actors
    {
        path: '/actors',
        component: IndexActors,
        exact: true
    },
    {
        path: '/actors/create',
        component: CreateActor
    },
    {
        path: '/actors/edit/:id',
        component: EditActor
    },
    // Movie Theaters
    {
        path: '/movietheaters',
        component: IndexMovieTheaters,
        exact: true
    },
    {
        path: '/movietheaters/create',
        component: CreateMovieTheater
    },
    {
        path: '/movietheaters/edit/:id',
        component: EditMovieTheater
    },
    // Movies
    {
        path: '/movies/create',
        component: CreateMovie,
    },
    {
        path: '/movies/edit/:id',
        component: EditMovie
    },
    {
        path: '/movies/filter',
        component: FilterMovies
    },
    {
        path: '/movie/:id(\\d+)',
        component: MovieDetails
    },
    // Catch all parameter
    {
        path: '*',
        component: RedirectToLandingPage
    }
];

export default routes;