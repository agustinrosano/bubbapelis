import { get } from "../data/httpClient"
import {useParams} from "react-router-dom"
import "../pages/MovieDetails.css"
import { useState,useEffect} from "react"
import {getMovieImg} from "../utils/getMovieImg"

export function MovieDetails() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState([]);
    const [generos, setGeneros] = useState([]);
    useEffect(() => {
      get("/movie/" + movieId).then((data) => {
        setMovie(data);
        setGeneros(data.genres[0]);
        
      });
    }, [movieId]);
    const imageUrl = getMovieImg(movie.poster_path, 500);
  


    return(
        <div className="detailsContainer">
          <img src={imageUrl} alt={movie.title} className="col movieImage"/>
              <div className="col movieDetails">
                <p className="title">
                  
                  {movie.title}
                </p>
                <p>
                  <strong>Género: </strong>
                  {generos.name}
                </p>
                <p>
                  <strong>Descripción: </strong>
                  {movie.overview}
                </p>
          </div>
      </div>
    )
}