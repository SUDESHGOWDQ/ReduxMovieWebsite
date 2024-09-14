import axios from 'axios';

const MovieApi = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});

export default MovieApi;