import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Header from "./components/Header.js";
import Search from "./components/Search.js";
import NotesList from "./components/NotesList.js";
import "./App.css";

const App = () => {
  const [notes, setNotes] = useState([]);

  const [darkMode, setDarkMode] = useState(false);

  const [searchText, setSearchText] = useState("");

  // Get notes on local storage.
  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem("react-sticky-notes-app-data")
    );

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  // Save notes on local storage.
  useEffect(() => {
    localStorage.setItem("react-sticky-notes-app-data", JSON.stringify(notes));
  }, [notes]);

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
    console.log("delete note");
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header darkMode={darkMode} handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText.toLowerCase())
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;
