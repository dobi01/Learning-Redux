import React from 'react';
import Comment from './CommentContainer';

const CommentsList = ({comments, addComment}) =>
  <ul>
    {comments.map(comment => <Comment key={comment.id} {...comment}/>)}
  </ul>;

export default CommentsList;
