import {connect} from 'react-redux';
import CommentsList from './CommentsList';
import { addComment } from './actions';

const mapStateToProps = state => ({
  comments: state.comments
});

const mapDispatchToProps = dispatch => ({
  addComment: (event, text) => {
    event.preventDefault();

    let inputValue = text.newComment.value;

    dispatch(addComment(inputValue))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList);