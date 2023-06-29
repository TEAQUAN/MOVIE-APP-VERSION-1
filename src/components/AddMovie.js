import { useState } from "react";
import MovieCard from "./MovieCard";
import "./Admovie.css"



function AddMovie() {
  const [inputText, setInputText] = useState({
    rating: "",
    title: "",
    description: "",
    posterURl: ""
  });
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const { value, name } = event.target;
    setInputText(prevValue => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }
  function addItem() {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function deleteItem(id) {

    setItems(prevItems => {
      return prevItems.filter(
        (item, index) => {
          return index !== id
        }
      )
    })
  }
  return (
    <div className="">
      <input  onChange={handleChange} name="title" placeholder="TITLE" />
      <input className="custom-field " onChange={handleChange} name="description" placeholder="Describe movie" />
      <input onChange={handleChange} name="rating" placeholder="rate from 1 star to 5 star" />
      <input onChange={handleChange} name="posterURl" placeholder="Link to page" />
      <button onClick={addItem}>
        <span className="button-28">Add</span>
      </button>
      <div>
        {items.map((todoItem, index) =>
          <MovieCard
            key={index}
            id={index}
            text={todoItem}
            onChecked={deleteItem}
            title={todoItem.title}
            rating={todoItem.rating}
            description={todoItem.description}
            posterURl={todoItem.posterURl}

          />
        )}

      </div>
    </div>

  )
}
export default AddMovie