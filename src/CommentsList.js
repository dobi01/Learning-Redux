import React from 'react';
import Comment from './CommentContainer';

const CommentsList = ({text, comments, addComment}) =>
  <div>
    <h1>Comment of the day</h1>
    <form onSubmit={(event) => addComment(event, this)}>
      <input type="text" id="text_add" ref={(input) => { this.newComment = input }} />
      <button type= "submit" id = "btn_add">Add new comment</button>
    </form>
    <ul>
      {comments.map(comment => <Comment key = {comment.id} {...comment}/>)}
    </ul>
</div>;

export default CommentsList;