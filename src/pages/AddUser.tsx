import React from 'react';
import UserInfo from '../components/ItemInfo';
import { RouteComponentProps } from 'react-router-dom';
import { addUser } from '../store/actions/user';
import { useDispatch } from 'react-redux';

interface Props extends RouteComponentProps {}

const AddUser = (props: Props) => {
  const dispatch = useDispatch();
  const onAdd = (name: string, email: string) => {
    dispatch(addUser(name, email));
  };
  const onCancel = () => {
    props.history.push('/');
  };
  return (
    <div>
      <UserInfo
        fields={['', '']}
        isUser={true}
        isEditMode={true}
        onSubmit={onAdd}
        onCancel={onCancel}
      />
    </div>
  );
};

export default AddUser;
