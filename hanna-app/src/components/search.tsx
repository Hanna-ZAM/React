import React from 'react';

const BarStyle = { width: '20rem', background: '#F0F0F0', border: 'none', padding: '0.5rem' };
type MyProps = {
  // using `interface` is also ok
  data?: string;
  key?: string;
  index?: string;
};
type MyState = {
  searchValue: string;
};

class SearchBar extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      searchValue: window.localStorage.getItem('searchValue')
        ? (window.localStorage.getItem('searchValue') as string)
        : '',
    };
  }
  render() {
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
          value={this.state.searchValue}
          key="search-bar"
          placeholder={'enter word for search'}
          onChange={this.handleChange}
        />
      </div>
    );
  }
  handleChange(e: React.SyntheticEvent<EventTarget>) {
    this.setState(() => ({
      searchValue: (e.target as HTMLInputElement).value,
    }));
  }
  componentWillUnmount() {
    window.localStorage.setItem('searchValue', this.state.searchValue);
  }
}

export default SearchBar;
