import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './Components/MovieList';
import movies from './movie-data/movies.json';

const App = () => {
    return (
        <div className = "container-fluid" >
            <div className = "row" >
                <MovieList movies={movies}></MovieList>
            </div>
        </div >
    );
}

export default App;