import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Post from './Components/Post/Post.js';
import Comment from './Components/Comment/Comment.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Post />
  <Comment />
  </React.StrictMode>
);


reportWebVitals();
