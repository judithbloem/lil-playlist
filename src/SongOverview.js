import React from "react";
import SongForm from "./SongForm";
import SongList from "./SongList";

class SongOverview extends React.Component {
  constructor() {
    super();
    this.state = {
      songs: []
    };
  }

  addSong = song => {
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

        <SongList
        // songs={this.state.songs}
        />
      </div>
    );
  }
}

export default SongOverview;
