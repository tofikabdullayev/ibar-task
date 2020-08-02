import React from 'react';
import { ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { User } from '../../store/interfaces';

interface Props extends User {}

const UserItem = ({ first_name, last_name, id }: Props) => {
  const fullName = `${first_name} ${last_name}`;
  return (
    <Link to={`/user/${id}`}>
      <ListGroupItem>{fullName}</ListGroupItem>
    </Link>
  );
};

export default UserItem;
