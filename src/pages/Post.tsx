import React, { useState, useEffect } from 'react';
import { Button, ButtonGroup, Spinner, Alert } from 'reactstrap';
import { RouteComponentProps, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPost, editPost, deletePost } from '../store/actions/post';
import { PostState } from '../store/reducers/post';
import ItemInfo from '../components/ItemInfo';

interface RouteParams {
  userId: string;
  postId: string;
}

interface Props extends RouteComponentProps<RouteParams> {}

const Post = (props: Props) => {
  const postId = props.match.params.postId;

  const [editMode, setEditMode] = useState(false);

  const dispatch = useDispatch();
  const selectedPost = useSelector(
    (state: { selectedPost: PostState }) => state.selectedPost
  );

  const onEdit = (title: string, body: string) => {
    dispatch(editPost(postId, title, body));
    setEditMode(false);
  };

  useEffect(() => {
    dispatch(getPost(postId));
  }, [dispatch, postId]);

  return (
    <div>
      {selectedPost.isLoading ? (
        <Spinner />
      ) : (
        <>
          <ItemInfo
            fields={[
              selectedPost.post.result.title,
              selectedPost.post.result.body,
            ]}
            isUser={false}
            isEditMode={editMode}
            onSubmit={onEdit}
            onCancel={() => setEditMode(false)}
          />
          {!editMode && (
            <ButtonGroup>
              <Button color="success" onClick={() => setEditMode(true)}>
                Edit
              </Button>
              <Button
                color="danger"
                onClick={() => dispatch(deletePost(postId))}
              >
                Remove
              </Button>
            </ButtonGroup>
          )}
          {selectedPost.deletedMessage && (
            <Alert color="success">
              {selectedPost.deletedMessage}{' '}
              <Link to={`/users/${props.match.params.userId}/posts`}>Back</Link>
            </Alert>
          )}
        </>
      )}
    </div>
  );
};

export default Post;
