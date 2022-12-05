import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import Movie from './Components/Movie';
import Searches from './Components/Searches';
import React, {useState, useEffect, createContext} from 'react'; 
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Context from './Context'


function App() {
const [movieData, setMovieData] = useState([])
  useEffect(() => {
    fetch('http://localhost:3001/movies')
    .then((response) => response.json())
    .then((data) => {
      setMovieData(data)
        console.log("initialfetch:", data)
    })
}, [])

  return (
    <>
    <div className="App">
    <Context.Provider value={{movieData, setMovieData}}>
    <Router>
      <Header/>
    <Routes>
    
    <Route path="/" element={<Home />}/>
    <Route path="/:search" element={<Searches />}/>
    <Route path="/Movie/:id" element={<Movie />}/>
    {/* {movieData.map((movie, index) => {
      return (
        <div className="movies" key={index}>
        <p>{movie.movie_title}</p>
      </div>
      )
    })} */}
    </Routes>
    </Router>
    </Context.Provider>
    </div>
    </>
  );
}

export default App;
