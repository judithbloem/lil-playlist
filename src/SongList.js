import React from "react";
import SongForm from "./SongForm";

class SongList extends React.Component {
  constructor() {
    super();
    this.state = {
      songs: [
        {
          id: 1,
          title: "It's a Hard-Knocked Life",
          artist: "Annie",
          genre: "musical",
          rating: "5"
        },
        {
          id: 2,
          title: "Complicated",
          artist: "Avril Lavigne",
          genre: "pop",
          rating: "2"
        }
      ]
    };
  }

  displaySongs() {
    return this.state.songs.map(song => {
      const { title, artist, genre, rating, id } = song;
      return (
        <tr key={id}>
          <th> {title} </th>
          <th> {artist} </th>
          <th> {genre} </th>
          <th> {rating} </th>
        </tr>
      );
    });
  }

  render() {
    const addSong = song => {
      const item = { id: this.state.songs.length + 1, title: song };
      this.setState({ songs: this.state.songs.concat(item) });
    };

    // const GroceryList = ({ groceryItems, handleClickGroceryItem, addGrocery }) => {
    //   return (
    //     <React.Fragment>
    //       <InputField onSubmit={addGrocery} />
    //       <List items={groceryItems} handleClickItem={handleClickGroceryItem} />
    //     </React.Fragment>
    //   );
    // };

    return (
      <div>
        <h5> default song examples</h5>
        <table className="songs" style={{ width: "100%" }}>
          <tbody>
            <SongForm onSubmit={addSong} />
            {this.displaySongs()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default SongList;
