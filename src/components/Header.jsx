import React from "react";

const Header = ({ handleToggleDarkMode, darkMode, notes }) => {
  return (
    <div className="header">
      <div className="logo">
        <h1 className="main-heading">MemoDesk</h1>
        <p className="sub-heading">Your Thoughts. Organized.</p>
        <p className="note-count">{notes.length} notes</p>
      </div>

      <button
        className="theme-toggle"
        onClick={() => handleToggleDarkMode((prev) => !prev)}
      >
        {darkMode ? "☀️" : "🌙"}
      </button>
    </div>
  );
};

export default Header;
