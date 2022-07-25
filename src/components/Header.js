const Header = ({ darkMode, handleToggleDarkMode }) => {
  return (
    <div className="header">
      <h1>Sticky Notes</h1>
      <button
        className={`toggle ${darkMode ? "light-mode" : "dark-mode"}`}
        onClick={() => handleToggleDarkMode((darkMode) => !darkMode)}
      >
        {`${darkMode ? "Light Mode" : "Dark Mode"}`}
      </button>
    </div>
  );
};

export default Header;
