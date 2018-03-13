import {connect} from 'react-redux';
import Comment from './Comment';
import {thumbUpComment, thumbDownComment, addComment, editComment, removeComment} from './actions';

const mapDispatchToProps = dispatch => ({
  addComment: (text) => dispatch(addComment(text)),
  thumbUpComment: (id) => dispatch(thumbUpComment(id)),
  thumbDownComment: (id) => dispatch(thumbDownComment(id)),
  removeComment: (id) => dispatch(removeComment(id))
});

export default connect(null, mapDispatchToProps)(Comment);
