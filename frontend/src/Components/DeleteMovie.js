import '../App.css'

function DeleteMovie() {
    function handleDelete (e) {
    e.preventDefault()
    let deleteID = JSON.stringify(parseInt(e.target[1].value));
    console.log(e)
    console.log("deletethis", `http://localhost:3001/movies/${deleteID}`)
 
    fetch(`http://localhost:3001/movies/${deleteID}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            mode: 'cors',
            // body: JSON.stringify(data)
        })
            .then(res => console.log(res));
            window.location.reload();

    }
    return (
        <div>
            <form onSubmit={handleDelete}>
                <input type="submit" value="Delete a movie by ID"></input>
                <input type="text"></input>
            </form>
        </div>
    )

}

export default DeleteMovie;