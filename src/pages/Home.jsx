import MovieCard from "../components/MovieCard"
import { useState , useEffect } from "react";
import { searchMovies } from "../services/api.js"
import { getPopularMovies } from "../services/api.js"

function Home() {

    const [userInput , setUserInput] = useState("");
    const [movies , setMovies] = useState([]);
    const [error , setError] = useState(null);
    const [loading , setLoading] = useState(true);

   useEffect(() => {
        const loadPopularMovies = async () => {
            try{
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            } catch (err) {
                setError('failed to load movies');
                console.log(err);
            } 
            finally {
                setLoading(false)
            }
        }

        loadPopularMovies();
    }, [])

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        if (!userInput.trim()) return
        if (loading) return
        setLoading(true)
        try{
            const searchResults = await searchMovies(userInput)
            setMovies(searchResults)
            setError(null)
        } catch(err) {
            setError("Failed to search movies")
            console.log(err)

        } finally {
            setLoading(false)
        }
         setUserInput("")
    }

    function handleUserInput(e) {
        setUserInput(e.target.value)
    }

   


    return (
        <div className="home">
            <div className="container d-flex justify-content-center mt-5">
                    <form onSubmit={handleSubmitForm} className='mb-5'>
                        <div className="input-group mb-3">
                            <input type="text"className="form-control"
                                placeholder="search any movie" 
                                value={userInput}
                                onChange={handleUserInput}
                            />
                            <button className="btn btn-outline-secondary" type="submit"> search </button>
                        </div>
                    </form>
            </div>

            {error && <div>{error}</div>}
            {loading ? (
                <div> Loading... </div>
            ) : (
                <div>
                    {movies.map(
                        (movie) => 
                                <MovieCard movie={movie} key={movie.id} /> 
                    )}

                </div>
            )
            }

        </div>
    )
}
export default Home