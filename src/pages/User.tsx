import React, { useEffect, useState } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import { Button, ButtonGroup, Spinner, Alert } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, deleteUser, editUser } from '../store/actions/user';
import { UserState } from '../store/reducers/user';
import UserInfo from '../components/UserInfo';

interface RouteParams {
  userId: string;
}

interface Props extends RouteComponentProps<RouteParams> {}

const User = (props: Props) => {
  const userId = props.match.params.userId;
  const dispatch = useDispatch();
  const userState = useSelector(
    (state: { selectedUser: UserState }) => state.selectedUser
  );

  const [editMode, setEditMode] = useState(false);

  const onEdit = (name: string, email: string) => {
    dispatch(editUser(userId, name, email));
    setEditMode(false);
  };

  useEffect(() => {
    dispatch(getUser(userId));
  }, [dispatch, userId]);

  return (
    <div>
      <h2>User Info</h2>
      {userState.isLoading ? (
        <Spinner
          color="primary"
          style={{ display: 'block', margin: '0 auto' }}
        />
      ) : (
        <>
          <UserInfo
            name={
              userState.user.result.first_name +
              ' ' +
              userState.user.result.last_name
            }
            email={userState.user.result.email}
            isEditMode={editMode}
            onSubmit={onEdit}
            onCancel={() => setEditMode(false)}
          />

          <ButtonGroup>
            <Button color="success" onClick={() => setEditMode(true)}>
              Edit
            </Button>
            <Button color="danger" onClick={() => dispatch(deleteUser(userId))}>
              Remove
            </Button>
            <Button color="primary">
              <Link
                to={`/user/${userId}/posts`}
                style={{ color: 'inherit', textDecoration: 'inherit' }}
              >
                Posts
              </Link>
            </Button>
          </ButtonGroup>
          {userState.deletedMessage && (
            <Alert color="success">
              {userState.deletedMessage} <Link to="/">Back</Link>
            </Alert>
          )}
        </>
      )}
    </div>
  );
};

export default User;
