import React from 'react';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment, removeComment}) =>
  <li>
    {text}
    <div>
      <span className = "votes">votes: {votes} </span>
      <button onClick = {() => thumbUpComment(id)}>+1</button>
      <button onClick = {() => thumbDownComment(id)}>-1</button>
      <button onClick = {() => removeComment(id)}>x</button>
    </div>
  </li>;

export default Comment;
