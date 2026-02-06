import React, { useState, useEffect } from "react";
import NotesList from "./components/NotesList";
import { nanoid } from "nanoid";
import AddNote from "./components/AddNote";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  // Initialize state from localStorage or use default notes
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes-app-data");
    if (savedNotes) {
      return JSON.parse(savedNotes);
    } else {
      return [
        {
          id: nanoid(),
          text: "This is some random",
          date: "13-3-2026",
        },
        {
          id: nanoid(),
          text: "This is some random 2",
          date: "11-3-2026",
        },
        {
          id: nanoid(),
          text: "LOL",
          date: "12-3-2026",
        },
        {
          id: nanoid(),
          text: "This is some random 4",
          date: "14-3-2026",
        },
        {
          id: nanoid(),
          text: "This is some random 4",
          date: "14-3-2026",
        },
      ];
    }
  });

  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  // Save notes to local storage whenever notes change
  useEffect(() => {
    localStorage.setItem("notes-app-data", JSON.stringify(notes));
  }, [notes]);

  // Handle dark mode
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className="container">
      <Header handleToggleDarkMode={setDarkMode} />
      <Search handleSearchnote={setSearchText} />
      <NotesList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText.toLowerCase()),
        )}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
};

export default App;
