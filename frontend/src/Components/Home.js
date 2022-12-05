import React, {useContext, useState, useEffect} from 'react';
import Context from '../Context'
import '../App.css';
import AddMovie from './AddMovie.js'
import DeleteMovie from './DeleteMovie.js'
import { Link } from 'react-router-dom';



function Home() {
const {movieData} = useContext(Context)
const [Watched, setWatched] = useState([])
const [toggler, setToggler] = useState(false)

useEffect(() => {
    setWatched(movieData.map(obj => ({...obj, active: false})))
}, [movieData, toggler])


// function toggle (movie) {
//     const newWatched = Watched
//     for (let i = 0; i < newWatched.length; i++) {
//         if (movie.id === newWatched[i].id) {
//             if (movie.active === false) {
//                 newWatched[i].active = true 
//             } else {
//                 newWatched[i].active = false
//             }
//         }
//     }
//     setToggler(true)
//     setWatched(newWatched)
//     console.log(Watched)
// }

function toggleWatched(e, movie) {
        e.preventDefault()
        let ID = movie.id
        let data = {
            "image": "/img/1.jpg",
            "movie_title": movie.movie_Title,
            "rating": movie.rating,
            "watched": e.target[2].value
        }
       
        fetch(`http://localhost:3001/movies/${ID}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors',
                body: JSON.stringify(data)
            })
             .then(res => console.log(res));
                console.log(e)
                // window.location.reload();
}

return (
    <div>
    {Watched.map((movie, index) => {
      return (
      <div className="movies" key={index}>
        <Link to={`/Movie/${movie.id}`}>
        <p>{movie.movie_title} (ID:{movie.id})</p>
        </Link>
        <p>Rating: {movie.rating}</p>
        <p>{movie.watched === false ? "Not Watched" : "Watched"}</p>
        <div>
            <form key= {movie} onSubmit={() => toggleWatched(movie.id)}>
                <input type="submit" value="Watched or not"></input>
                <select className="Select">
                        <option value="true">yes</option>
                        <option value="false">no</option>
                </select>
            </form>
        </div>
        <br></br>
      </div>
      )
    })}
    <br></br>
    <br></br>
    <AddMovie/>
    <br></br>
    <br></br>
    <br></br>
    <DeleteMovie/>
    <br></br>
    <br></br>
    <br></br>
    </div>
)
}

export default Home;