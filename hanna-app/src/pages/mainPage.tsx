import React, { useEffect, useState } from 'react';

import CardList from '../components/cardList';
import SearchBar from '../components/search';

export const Main: FC<ChildProps> = (): ReactElement => {
  const [searchMetod, setSearchMetod] = useState(false);
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (window.localStorage.getItem('searchValue') && !count) {
      setText(window.localStorage.getItem('searchValue') as string);
      setSearchMetod(true);
    }
    window.localStorage.setItem('searchValue', text);
    setCount(1);
    if (text) {
      setSearchMetod(true);
    } else {
      setSearchMetod(false);
    }
  }, [text, count]);

  return (
    <>
      <h2>Main</h2>
      <SearchBar searchValue={text} setSearchValue={setText} />
      <CardList data={{ searchMetod: searchMetod, text: text }} />
    </>
  );
};
