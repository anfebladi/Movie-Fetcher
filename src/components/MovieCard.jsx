

function MovieCard({movie}) {

    return (
        <div className="container d-flex justify-content-center">
            <div className='row mb-5'>
                <div className="col-4">
                    <div className="card movie-card">
                        <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        className="card-img-top"
                        style={{ height: '500px', borderTopLeftRadius: '8px', borderTopRightRadius: '8px', width: "415px"}}
                        />
                        <div className="card-body p-2">
                            <h5 className="card-title mb-1">
                                {movie.title}
                            </h5>
                            <p>
                                {movie.release_date}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        




    )
}
export default MovieCard