import React, { Component } from 'react';
import CommentBox from './comment_box.js';
import CommentList from './comment_list.js';


export default class App extends Component {
  render() {
    return (
      <div>Testing
        <div>
          <CommentBox />
          <CommentList />
        </div>
      </div>
    );
  }
}
