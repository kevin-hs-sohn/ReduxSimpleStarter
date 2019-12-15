import React, { Component } from 'react';

import BookList from '../containters/book-list';
import BookDetail from '../containters/book-detail';

export default class App extends Component {
  render() {
    return (
      <div >
        <BookList />
        <BookDetail />
      </div>
    );
  }
}
