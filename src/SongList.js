import React from "react";

class SongList extends React.Component {
  constructor() {
    super();
    this.state = {
      songs: [
        {
          id: 1,
          title: "It's a Hard-Knocked Life",
          artist: "Annie",
          genre: "Musical",
          rating: "5"
        },
        {
          id: 2,
          title: "Complicated",
          artist: "Avril Lavigne",
          genre: "xxxx",
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

    return (
      <div>
        <h3>default songs</h3>
        <table className="songs" style={{ width: "100%" }}>
          <tbody>
            {this.displaySongs()} {addSong}
          </tbody>
        </table>
      </div>
    );
  }
}

export default SongList;
