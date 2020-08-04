import React, { useEffect } from 'react';
import { Post } from '../store/interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { UserState } from '../store/reducers/user';
import { getPosts, filterByName } from '../store/actions/posts';
import { RouteComponentProps } from 'react-router-dom';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Spinner,
} from 'reactstrap';
import Filter from '../components/Filter';
import { PostsState } from '../store/reducers/posts';
import Pagination from '../components/Pagination';

interface RouteParams {
  userId: string;
}

interface Props extends Post, RouteComponentProps<RouteParams> {}

const Posts = (props: Props) => {
  const userId = props.match.params.userId;

  const dispatch = useDispatch();
  const selectedUser = useSelector(
    (state: { selectedUser: UserState }) => state.selectedUser
  );
  const postsState = useSelector(
    (state: { postsState: PostsState }) => state.postsState
  );

  const selectPage = (pageNumber: number) =>
    dispatch(getPosts(userId, pageNumber));
  const filterUsers = (filterText: string): void => {
    dispatch(filterByName(userId, filterText.trim()));
  };

  useEffect(() => {
    dispatch(getPosts(userId));
  }, [dispatch, userId]);

  const name = selectedUser.user.result.first_name;
  return (
    <div>
      <h2>{name && name + "'s"} Posts</h2>
      <Filter onFilter={filterUsers} />

      {postsState.isLoading ? (
        <Spinner
          color="primary"
          style={{ display: 'block', margin: '0 auto' }}
        />
      ) : (
        <>
          {postsState.posts.result.map((post) => (
            <Card style={{ marginBottom: 20 }} key={post.id}>
              <CardBody>
                <CardTitle>{post.title}</CardTitle>
                <CardText>{post.body}</CardText>
                <Button>Open post</Button>
              </CardBody>
            </Card>
          ))}

          <Pagination
            currentPage={postsState.posts?._meta.currentPage}
            pageCount={postsState.posts?._meta.pageCount}
            selectPage={selectPage}
          />
        </>
      )}
    </div>
  );
};

export default Posts;
