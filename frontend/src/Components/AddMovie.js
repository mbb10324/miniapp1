import '../App.css'

function AddMovie() {
    function handleSubmit (e) {
    e.preventDefault()
    let rating = parseInt(e.target[2].value)
    let movieTitle = e.target[1].value;
    console.log(e)
    let data = {
        "image": "/img/1.jpg",
        "movie_title": movieTitle,
        "rating": rating
    }
    fetch(`http://localhost:3001/movies/post`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            mode: 'cors',
            body: JSON.stringify(data)
        })
            .then(res => console.log(res));
            window.location.reload();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="submit" value="Add a new movie!"></input>
                <textarea type="text" id="title" placeholder="...Movie Title"></textarea>
                <textarea type="text" id="rating" placeholder="...Your Rating Here"></textarea>
            </form>
        </div>
    )
}

export default AddMovie;