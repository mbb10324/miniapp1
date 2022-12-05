import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useContext } from 'react';
import Context from '../Context'
import '../App.css';

function Searches () {
const {movieData} = useContext(Context)
const { search } = useParams();
const [searchResults, setSearchResults] = useState([]);
console.log("searches", movieData)
    function filterSearches() {
        let searchResults = []
        for (let i = 0; i < movieData.length; i++) {
            if (movieData[i].movie_title.toUpperCase().includes(search.toUpperCase())) {
                searchResults.push(movieData[i]);
            }
        }
        return searchResults;
    }
    useEffect(() => {
        if (search == "all") setSearchResults(movieData);
        else {
            setSearchResults(filterSearches())
        };
    }, [movieData, search])

    return (
        <div className='searchResults'>
            <p>Results: {searchResults.length}</p>
            <br></br>
            <div className="Searches">
                {searchResults.map((movies, index) => {
                    return (
                        <div className="movies" key={index}>
                        <Link to={`/Movie/${movies.id}`}>
                          <p>{movies.movie_title}</p>
                        </Link>
                        </div>
                        )
                })}
            </div>
        </div>
    )

}

export default Searches;