import React, { useEffect, useState } from 'react';

import CardList from '../components/cardList';
import SearchBar from '../components/search';

export const Main = () => {
  const [searchMetod, setSearchMetod] = useState(false);
  const [text, setText] = useState('');
  useEffect(() => {
    if (text) {
      setSearchMetod(true);
    } else {
      setSearchMetod(false);
    }
  }, [text]);

  return (
    <>
      <h2>Main</h2>
      <SearchBar searchValue={text} setSearchValue={setText} />
      <CardList data={{ searchMetod: searchMetod, text: text }} />
    </>
  );
};
