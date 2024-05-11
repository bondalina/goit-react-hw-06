import { useSelector, useDispatch } from "react-redux";
import { selectNameFilter, changeFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div>
      <label className={css.searchLabel}>Find contacts by name</label>
      <input
        className={css.searchInput}
        type="text"
        value={filter}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBox;
