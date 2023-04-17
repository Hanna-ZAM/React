import { useAppSelector, useAppDispatch } from '../hooks/redux';
import React, { ReactElement } from 'react';
import { searchSlicer } from '../store/reducers/searchSlicer';
import { searchCards } from '../store/reducers/ActionCreator';

const BarStyle = { width: '20rem', background: '#F0F0F0', border: 'none', padding: '0.5rem' };

const SearchBar: FC<ChildProps> = (): ReactElement => {
  const { search } = useAppSelector((state) => state.searchReducer);
  const dispatch = useAppDispatch();
  const { changeSearch } = searchSlicer.actions;
  return (
    <form
      style={{
        width: '22rem',
        background: '#F0F0F0',
        border: '1px',
        margin: 'auto',
        display: 'flex',
      }}
    >
      <img src="./assets/img/search-svgrepo-com.svg" alt="search-img"></img>
      <input
        style={BarStyle}
        value={search}
        key="search-bar"
        placeholder={'enter word for search'}
        onChange={(e: React.SyntheticEvent<EventTarget>) => {
          dispatch(changeSearch((e.target as HTMLInputElement).value));
          dispatch(searchCards());
        }}
      />
    </form>
  );
};

export default SearchBar;
