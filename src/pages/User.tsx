import React, { useEffect } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import { Button, ButtonGroup, Spinner } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../store/actions/user';
import { UserState } from '../store/reducers/user';

interface RouteParams {
  userId: string;
}

interface Props extends RouteComponentProps<RouteParams> {}

const data = {
  _meta: {
    success: true,
    code: 200,
    message: 'OK. Everything worked as expected.',
    rateLimit: { limit: 30, remaining: 29, reset: 2 },
  },
  result: {
    id: '11918',
    first_name: 'Emilia',
    last_name: 'Robel',
    gender: 'female',
    dob: '1949-01-14',
    email: 'ryan.agnes@example.com',
    phone: '(514) 618-8655 x26218',
    website: 'http://www.volkman.com/nisi-amet-unde-numquam-id-asperiores',
    address: '149 Weissnat Forks\nSouth Toreybury, ME 50711-7903',
    status: 'inactive',
    _links: {
      self: { href: 'https://gorest.co.in/public-api/users/11918' },
      edit: { href: 'https://gorest.co.in/public-api/users/11918' },
      avatar: { href: 'https://lorempixel.com/250/250/people/?29241' },
    },
  },
};

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
            <Button color="danger" onClick={() => alert('removed!')}>
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
        </>
      )}
    </div>
  );
};

export default User;
