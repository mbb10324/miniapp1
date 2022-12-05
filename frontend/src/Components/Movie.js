import '../App.css';
import Context from '../Context.js'
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from 'react';

function Movie () {
    const {movieData} = useContext(Context)
    const [state, setState] = useState([])
    let {id} = useParams()

    useEffect(() => {
        for (let i = 0; i < movieData.length; i++) {
            if (movieData[i].id === +id) {
                setState(movieData[i])
            }
        }
    }, [movieData])

    return (
        <div>
            {/* {state.map((movie, index) => {
                return ( */}
                <div className="movies" >
                 <p>{state.movie_title} (ID:{state.id})</p>
                <p>Rating: {state.rating}</p>
                <img src={`${state.image}`} height= "400px" width= "300px" alt="picture"/>
                <br></br>
                <h3>Synopsis</h3>
                <p>Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics superhero team the Avengers. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the direct sequel to Avengers: Infinity War (2018) and the 22nd film in the Marvel Cinematic Universe (MCU). Directed by Anthony and Joe Russo and written by Christopher Markus and Stephen McFeely, the film features an ensemble cast including Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, Jeremy Renner, Don Cheadle, Paul Rudd, Brie Larson, Karen Gillan, Danai Gurira, Benedict Wong, Jon Favreau, Bradley Cooper, Gwyneth Paltrow, and Josh Brolin. In the film, the surviving members of the Avengers and their allies attempt to reverse the destruction caused by Thanos in Infinity War.</p>
                </div>
                {/* )
            })} */}
        </div>
    )
}

export default Movie;