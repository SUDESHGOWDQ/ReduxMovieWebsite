import MovieCards from '../MovieCards/index'
import Requests from '../../api/Request'
import Banner from '../Banner/Banner'


const Home = () => {     
  return (
    <div className='Home'>
    <Banner fetchUrl = {Requests.fetchNetflixOriginals}/>
          <MovieCards title={'Netflix Original'} fetchUrl={Requests.fetchNetflixOriginals}/>
          <MovieCards title={'Upcoming'} fetchUrl={Requests.fetchUpComing}/>
          <MovieCards title={'Trending'} fetchUrl={Requests.fetchTrending}/>
          <MovieCards title={'Comedy'} fetchUrl={Requests.fetchComedyMovies}/>
          <MovieCards title={'Action'} fetchUrl={Requests.fetchActionMovies}/>
          <MovieCards title={'Romance'} fetchUrl={Requests.fetchRomanceMovies}/>
          <MovieCards title={'TopRated'} fetchUrl={Requests.fetchTopRated}/>
          <MovieCards title={'Documentries'} fetchUrl={Requests.fetchDocumentaries}/>
    </div>
  )
}

export default Home
