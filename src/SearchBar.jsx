function SearchBar({ city, setCity, onSearch, loading }) {
  function handleSubmit(event) {
    event.preventDefault();
    onSearch();
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        value={city}
        onChange={(event) => setCity(event.target.value)}
        placeholder="Search a city..."
        aria-label="Search a city"
      />

      <button type="submit" disabled={loading || !city.trim()}>
        {loading ? "Exploring..." : "Explore"}
      </button>
    </form>
  );
}

export default SearchBar;