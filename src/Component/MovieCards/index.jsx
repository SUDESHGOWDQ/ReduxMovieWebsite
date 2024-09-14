
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from '../../api/MovieApi';
import { setMovies } from '../../app/MovieSlice';
import './index.css';
import { useNavigate } from 'react-router-dom';

const MovieCards = ({ fetchUrl, title }) => {
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.movies[title.toLowerCase()] || []);
    const image = 'https://image.tmdb.org/t/p/original';
    const navigate= useNavigate()

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(fetchUrl);
                dispatch(setMovies({ category: title.toLowerCase(), movies: response.data.results }));
            } catch (error) {
                console.error("Failed to fetch movies:", error);
            }
        };
        fetchMovies();
    }, [fetchUrl, dispatch, title]);

    return (
        <div className='MovieCards'>
            <h1>{title}</h1>
            <div className='Cards-scroll'>
                {movies.length > 0 ? (
                    movies.map((item, index) => (
                        <div key={index} className='Cards'>
                            <img 
                                className='Cards-image' 
                                src={`${image}${item.poster_path}`} 
                                alt={item.title} 
                                height={'300px'} 
                                width={'200px'} 
                                onClick={()=>{navigate('/movie',{state:{movie:item}})}}
                            />
                        </div>
                    ))
                ) : (
                    <p>No movies available</p>
                )}
            </div>
        </div>
    );
};

export default MovieCards;
