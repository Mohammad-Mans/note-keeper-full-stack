import React from "react";
import "./Header.css";
import DescriptionIcon from "@mui/icons-material/Description";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  return (
    <header className="main-header">
      <DescriptionIcon />
      <h1>My Note Keeper</h1>

      <label className="search-bar">
        <SearchIcon />
        <input className="search-input" type="text" />
      </label>
    </header>
  );
}

export default Header;
