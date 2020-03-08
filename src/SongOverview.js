import React, { useState } from "react";
import AddSongForm from "./AddSongForm";
import SongList from "./SongList";

const SongOverview = () => {
  const songData = [
    {
      id: 1,
      title: "9 to 5",
      artist: "Dolly Parton",
      genre: "country",
      rating: "3"
    },
    {
      id: 2,
      title: "Complicated",
      artist: "Avril Lavigne",
      genre: "pop",
      rating: "2"
    }
  ];

  const [songs, setSongs] = useState(songData);

  const addSong = song => {
    song.id = songs.length + 1;
    setSongs([...songs, song]);
  };
  const deleteSong = id => {
    setSongs(songs.filter(song => song.id !== id));
  };

  return (
    <div>
      <div className="song-form">
        <h5> Add song</h5>
        <AddSongForm addSong={addSong} />
      </div>

      <div className="song-list">
        <h5> View songs</h5>
        <SongList songs={songs} deleteSong={deleteSong} />
      </div>
    </div>
  );
};
export default SongOverview;
