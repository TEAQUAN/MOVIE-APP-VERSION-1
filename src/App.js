import './App.css';
// import MovieCard from './components/MovieCard';
// import info from './components/MovieList';
import AddMovie from './components/AddMovie';

function App() {
  return (
    <div >
      {/* {info.map((infoItem) => 
    <MovieCard 
  key={infoItem.id}
  id={infoItem.id}
  title={infoItem.title}
  description= {infoItem.description}
  posterURL = {infoItem.posterURL}
  rating={infoItem.rating}
 
  />  
  )} */}
  <AddMovie/>
    </div>
  );
}

export default App;
