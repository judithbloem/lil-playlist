import React, { useState } from "react";

const AddSongForm = props => {
  const initialFormState = {
    id: null,
    title: "",
    artist: "",
    genre: "",
    rating: ""
  };
  const [song, setSong] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setSong({ ...song, [name]: value });
  };
  const onSubmit = event => {
    event.preventDefault();
    props.addSong(song);
    setSong(initialFormState);
    let url = "https://wincacademydatabase.firebaseio.com/judith/tasks.json";
    let data = song.title;
    fetch(url, {
      method: "POST",
      headers: {},
      body: JSON.stringify(data)
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <form className="input-form" onSubmit={onSubmit}>
      <label>
        <input
          type="text"
          placeholder="songtitle"
          name="title"
          value={song.title}
          onChange={handleInputChange}
        />
      </label>
      <label>
        <input
          type="text"
          placeholder="artist"
          name="artist"
          value={song.artist}
          onChange={handleInputChange}
        />
      </label>
      <label>
        <input
          type="text"
          placeholder="genre"
          name="genre"
          value={song.genre}
          onChange={handleInputChange}
        />
      </label>

      <select
        placeholder="rating"
        name="rating"
        value={song.rating}
        onChange={handleInputChange}
      >
        <option value=" ">give your rating</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

      <button>Add new song</button>
    </form>
  );
};

export default AddSongForm;
