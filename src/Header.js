import React from "react";
import img from "./Music-Concert.png";

function Header() {
  return (
    <header>
      <img src={img} alt="Problem?" />
      <p>Lil Playlist</p>
    </header>
  );
}

export default Header;
