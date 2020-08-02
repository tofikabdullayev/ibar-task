import React from 'react';
import { ListGroupItem, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

interface Props {
  first_name: string;
  last_name: string;
  id: string;
  avatar?: string;
}

const UserItem = ({ first_name, last_name, id, avatar }: Props) => {
  const fullName = `${first_name} ${last_name}`;
  return (
    <Link to={`/user/${id}`}>
      <ListGroupItem>
        {avatar && (
          <Media
            object
            style={{ width: 100, marginRight: 10 }}
            src={avatar}
            alt={fullName}
          />
        )}
        {fullName}
      </ListGroupItem>
    </Link>
  );
};

export default UserItem;
