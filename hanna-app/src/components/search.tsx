import React, { ReactElement } from 'react';

const BarStyle = { width: '20rem', background: '#F0F0F0', border: 'none', padding: '0.5rem' };

const SearchBar: FC<ChildProps> = ({ searchValue, setSearchValue }): ReactElement => {
  return (
    <form
      style={{
        width: '22rem',
        background: '#F0F0F0',
        border: '1px',
        margin: 'auto',
        display: 'flex',
      }}
      onSubmit={(e: React.SyntheticEvent<EventTarget>) => {
        setSearchValue((e.target as HTMLInputElement).value);
      }}
    >
      <img src="./assets/img/search-svgrepo-com.svg" alt="search-img"></img>
      <input
        style={BarStyle}
        value={searchValue}
        key="search-bar"
        placeholder={'enter word for search'}
      />
    </form>
  );
};

export default SearchBar;
