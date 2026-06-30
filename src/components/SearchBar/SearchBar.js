function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search for movies or TV series"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="
        w-full
        bg-slate-800
        text-white
        px-4
        py-3
        rounded-lg
        outline-none
      "
    />
  );
}

export default SearchBar;