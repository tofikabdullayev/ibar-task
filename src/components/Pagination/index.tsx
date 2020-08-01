import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

interface Props {
  pageCount: number;
  currentPage: number;
  selectPage: (pageNumber: number) => void;
}

const PaginationComponent = ({ pageCount, currentPage, selectPage }: Props) => {
  const pages = [...Array(pageCount)].map((e, i) => (
    <PaginationItem active={currentPage === i + 1} key={`${i}_${Date.now()}`}>
      <PaginationLink onClick={() => selectPage(i + 1)}>{i + 1}</PaginationLink>
    </PaginationItem>
  ));

  return (
    <Pagination
      aria-label="Page navigation"
      style={{ marginTop: 20, flexWrap: 'wrap' }}
    >
      <PaginationItem disabled={currentPage === 1}>
        <PaginationLink previous onClick={() => selectPage(currentPage - 1)} />
      </PaginationItem>

      {pages}

      <PaginationItem disabled={currentPage === pageCount}>
        <PaginationLink next onClick={() => selectPage(currentPage + 1)} />
      </PaginationItem>
    </Pagination>
  );
};

export default PaginationComponent;
