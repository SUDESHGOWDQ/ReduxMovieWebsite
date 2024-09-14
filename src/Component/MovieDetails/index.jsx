import React from 'react'
import { useLocation } from 'react-router-dom';
import './index.css'

export default function MovieDetails() {
    const location = useLocation();
    const specificMovie = location.state.movie;
    console.log(specificMovie)
  return (
    <div>
      <section>
      <div className="Movie_page" style={{
        background:`url("https://image.tmdb.org/t/p/original/${specificMovie.poster_path}")`,
        backgroundSize:'cover',
        height:'100vh'
    }}>
     <img className="Movie_image"  src={`https://image.tmdb.org/t/p/original/${specificMovie.poster_path}`}></img>
      <div className="Movie_content">
      <h1 className="Movie_title" >{specificMovie.name || specificMovie.title}</h1>
      <p>{specificMovie.overview}</p>
      <p>{specificMovie.vote_average}/10⭐</p>
      <button className="Movie_button"  >Play Trailer</button>
      <button className="Movie_button" >Cast</button>
      </div>
    </div>
    
      
    </section>
    </div>
  )
}
