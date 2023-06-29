import "./Moviecard.css"
const MovieCard = (props) => {


return (
    <div className="MovieCard">
            <h2>title: {props.title}</h2>
            <h2>describe the movie: {props.description}</h2>
            <h2 className="rating">Rate : {props.rating}</h2>
            <h2>Poster: {props.posterURl}</h2>
            <button className="button-28" onClick={()=> {
                props.onChecked(props.id);
            }}>DELETE</button>    
            
    </div>
)
}
export default MovieCard;