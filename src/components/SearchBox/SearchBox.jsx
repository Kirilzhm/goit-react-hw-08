import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector(selectNameFilter);

  const handleSearchChange = (e) => dispatch(changeFilter(e.target.value));

  return (
    <div>
      <label htmlFor="search">Find contacts by name</label>
      <input
        id="search"
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchBox;
