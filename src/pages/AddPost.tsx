import React from 'react';
import PostInfo from '../components/ItemInfo';
import { RouteComponentProps } from 'react-router-dom';
import { addPost } from '../store/actions/post';
import { useDispatch } from 'react-redux';

interface RouteParams {
  userId: string;
}

interface Props extends RouteComponentProps<RouteParams> {}

const AddPost = (props: Props) => {
  const dispatch = useDispatch();
  const onAdd = (title: string, body: string) => {
    dispatch(addPost(props.match.params.userId, title, body));
  };
  const onCancel = () => {
    props.history.push(`/user/${props.match.params.userId}/posts/`);
  };
  return (
    <div>
      <PostInfo
        fields={['', '']}
        isUser={false}
        isEditMode={true}
        onSubmit={onAdd}
        onCancel={onCancel}
      />
    </div>
  );
};

export default AddPost;
