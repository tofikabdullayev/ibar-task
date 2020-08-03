import React, { useEffect } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import { Button, ButtonGroup, Spinner, Alert } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, deleteUser } from '../store/actions/user';
import { UserState } from '../store/reducers/user';

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
          <p>
            Name:{' '}
            <strong>
              {userState.user.result.first_name +
                ' ' +
                userState.user.result.last_name}
            </strong>
          </p>
          <p>
            Email: <strong>{userState.user.result.email}</strong>
          </p>
          <ButtonGroup>
            <Button color="success">Edit</Button>
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
