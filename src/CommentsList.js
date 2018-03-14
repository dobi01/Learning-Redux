import React from 'react';
import Comment from './CommentContainer';

const CommentsList = ({comments, addComment}) =>
  <div><h1>Comment of the day</h1>
    <ul>
      {comments.map(comment => <Comment key={comment.id} {...comment}/>)}
    </ul>
</div>;

export default CommentsList;
