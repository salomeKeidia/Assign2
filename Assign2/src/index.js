import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import UpcomingMoviesPage from "./pages/upcomingMovies";
import TrendingMoviesPage from "./pages/trendingMovies";
import RecentMoviesPage from "./pages/recentMovies";
import RecommendMoviesPage from "./pages/recommendMovies";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'

import SignUpPage from "./signUpPage";
import LoginPage from "./loginPage";
import AuthProvider from "./authContext";
import AuthHeader from "./authHeader";
import ProtectedRoutes from "./protectedRoutes";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <AuthProvider>
      <SiteHeader />
      <AuthHeader />
      <MoviesContextProvider>
        <Routes>
        <Route path="/signup" element={ <SignUpPage /> } />
        <Route path="/login" element={ <LoginPage /> } />
          <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
          <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
          <Route element={<ProtectedRoutes />}> 
          <Route path="/movies/favorites" element={<FavoriteMoviesPage />} /></Route>
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route path="/movies/upcoming" element={< UpcomingMoviesPage />} />
          <Route path="/movies/trending" element={< TrendingMoviesPage />} />
          <Route path="/movies/recent" element={< RecentMoviesPage />} />
          <Route element={<ProtectedRoutes />}> 
          <Route path="/movies/recommend" element={< RecommendMoviesPage />} /></Route>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={ <Navigate to="/" /> } />
        </Routes>
      </MoviesContextProvider>
      </AuthProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));