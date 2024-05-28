import React from "react";

import { SearchBar } from "../SearchBar/SearchBar";

import "./Header.css";

export const Header = ({ onSearch }) => (
  <header className="header">
    <h1 className="header-title">Movie Catalog</h1>
    <SearchBar onSearch={onSearch} />
    <div className="header-user">
      <span>Viktar Kokhna</span>
      <button className="dropdown-arrow">&#9660;</button>
    </div>
  </header>
);
