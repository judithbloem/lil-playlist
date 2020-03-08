import React from "react";

const SongList = props => (
  <table style={{ width: "100%" }}>
    <thead>
      <tr className="song-header">
        <th className="song-row__item">Title</th>
        <th className="song-row__item">Artist</th>
        <th className="song-row__item">Genre</th>
        <th className="song-row__item">Rating</th>
      </tr>
    </thead>
    <tbody>
      {props.songs.length > 0 ? (
        props.songs.map(song => (
          <tr key={song.id}>
            <td> {song.title}</td>
            <td> {song.artist}</td>
            <td> {song.genre}</td>
            <td> {song.rating}</td>

            <td>
              <button
                onClick={() => props.deleteSong(song.id)}
                className="delete-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td>No songs in playlist</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default SongList;
