import React, { useState, ChangeEvent, useEffect, FormEvent } from 'react';
import { Input, Button, ButtonGroup, Spinner, Alert } from 'reactstrap';
import { RouteComponentProps, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPost, editPost, deletePost } from '../store/actions/post';
import { PostState } from '../store/reducers/post';

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
          <PostInfo
            title={selectedPost.post.result.title}
            body={selectedPost.post.result.body}
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
              {selectedPost.deletedMessage} <Link to="/">Back</Link>
            </Alert>
          )}
        </>
      )}
    </div>
  );
};

interface PostInfoProps {
  title: string;
  body: string;
  isEditMode: boolean;
  onSubmit: (title: string, body: string) => void;
  onCancel: () => void;
}
export const PostInfo = ({
  title,
  body,
  isEditMode,
  onSubmit,
  onCancel,
}: PostInfoProps) => {
  const [editedTitle, setTitle] = useState(title);
  const [editedBody, setBody] = useState(body);

  const onCancelEdit = () => {
    setTitle(title);
    setBody(body);
    onCancel();
  };

  const onSubmitEdit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(editedTitle, editedBody);
  };

  return (
    <form onSubmit={onSubmitEdit}>
      <p>
        <Input
          type="text"
          value={editedTitle}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
          disabled={!isEditMode}
        />
      </p>
      <p>
        <Input
          type="textarea"
          value={editedBody}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setBody(e.target.value)
          }
          style={{ minHeight: 200 }}
          disabled={!isEditMode}
        />
      </p>
      {isEditMode && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}
        >
          <Button color="primary" style={{ width: '100%', marginRight: 5 }}>
            Submit
          </Button>
          <Button
            color="secondary"
            style={{ width: '100%', marginLeft: 5 }}
            onClick={onCancelEdit}
          >
            Cancel
          </Button>
        </div>
      )}
    </form>
  );
};

export default Post;
