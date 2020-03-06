import React from "react";
import SongForm from "./SongForm";

class SongOverview extends React.Component {
  constructor() {
    super();
    this.state = {
      songs: [
        // (title: "It's the Hard-Knocked Life"),
        // (artist: " Annie "),
        // (genre: "musical"),
        // (rating: "5")
      ]
    };
  }

  addSong = song => {
    // const GroceryList = ({ groceryItems, handleClickGroceryItem, addGrocery }) => {
    //   return (
    //     <React.Fragment>
    //       <InputField onSubmit={addGrocery} />
    //       <List items={groceryItems} handleClickItem={handleClickGroceryItem} />
    //     </React.Fragment>
    //   );
    // };
    // doe iets om de state aan te passen
  };

  render() {
    return (
      <div>
        <SongForm
        // addSong={this.addSong}
        />
        <table style={{ width: "100%" }}>
          <tr className="song-header">
            <th className="song-row__item">Song</th>
            <th className="song-row__item">Artist</th>
            <th className="song-row__item">Genre</th>
            <th className="song-row__item">Rating</th>
          </tr>
        </table>
        {/* <SongList songs={this.state.songs} /> */}
      </div>
    );
  }
}

export default SongOverview;
