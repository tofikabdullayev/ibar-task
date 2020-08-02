import React, { useEffect } from 'react';
import { ListGroup, Spinner } from 'reactstrap';
import Pagination from '../components/Pagination';
import UserItem from '../components/User';
import Filter from '../components/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../store/actions/users';
import { UsersState } from '../store/reducers/users';

interface Props {}

const Users = (props: Props) => {
  const selectPage = (pageNumber: number): void => console.log(pageNumber);
  const filterUsers = (filterText: string): void => {
    if (filterText.trim()) console.log(filterText);
  };
  const dispatch = useDispatch();
  const usersState = useSelector((state: { users: UsersState }) => state.users);
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  return (
    <div>
      <h2>Users</h2>

      <Filter onFilter={filterUsers} />
      {usersState.isLoading ? (
        <Spinner color="primary" />
      ) : (
        <>
          <ListGroup>
            {usersState.users?.result.map((user) => (
              <UserItem
                key={user.id}
                first_name={user.first_name}
                last_name={user.last_name}
                id={user.id}
              ></UserItem>
            ))}
          </ListGroup>

          <Pagination
            currentPage={usersState.users?._meta.currentPage}
            pageCount={usersState.users?._meta.pageCount}
            selectPage={selectPage}
          />
        </>
      )}
    </div>
  );
};

export default Users;
