import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CardList from './cardList';
import productsList from '../product';

describe('cardList', () => {
  it('renders Card component', () => {
    render(<CardList data={JSON.stringify(productsList.products)} />);
  });
});
