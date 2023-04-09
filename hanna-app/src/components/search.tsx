import React, { ReactElement } from 'react';

const BarStyle = { width: '20rem', background: '#F0F0F0', border: 'none', padding: '0.5rem' };

const SearchBar: FC<ChildProps> = ({ searchValue, setSearchValue }): ReactElement => {
  return (
    <div
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
        value={searchValue}
        key="search-bar"
        placeholder={'enter word for search'}
        onChange={(e: React.SyntheticEvent<EventTarget>) => {
          setSearchValue((e.target as HTMLInputElement).value);
        }}
      />
    </div>
  );
};

export default SearchBar;
