import css from "./SearchBox.module.css";

const SearchBox = ({ filter, onSearch }) => {
  return (
    <div>
      <label className={css.searchLabel}>Find contacts by name</label>
      <input
        className={css.searchInput}
        type="text"
        value={filter}
        onChange={onSearch}
      />
    </div>
  );
};

export default SearchBox;
