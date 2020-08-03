import React from 'react';
import UserInfo from '../components/UserInfo';
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
        name=""
        email=""
        isEditMode={true}
        onSubmit={onAdd}
        onCancel={onCancel}
      />
    </div>
  );
};

export default AddUser;
