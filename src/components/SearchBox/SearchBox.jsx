import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import { selectNameFilter } from '../../redux/filters/selectors';
import styles from "./SearchBox.module.css"

const SearchBox = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector(selectNameFilter);

  const handleSearchChange = (e) => dispatch(changeFilter(e.target.value));

  return (
    <div className={styles.searchBox}>
      <label htmlFor="search">Find contacts by name</label>
      <input
        id="search"
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        className={styles.searchBoxField}
      />
    </div>
  );
};

export default SearchBox;
