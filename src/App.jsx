import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import TvShows from "./pages/TvShows";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import MovieDetails from "./pages/MovieDetails";
import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route path="/" element={<TvShows />} />

            <Route path="/Settings" element={<Settings />} />

            <Route path="/Profile" element={<Profile />} />

            <Route path="/MovieDetails/:movieID" element={<MovieDetails />} />

            <Route path="*" element={<NotFound />}/>
          </Routes>

          <Footer />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
