import React from 'react';
import { NavLink } from 'react-router-dom';

import './Pagination.css';

const Pagination = (props) => {
  let prev = <div />;
  let next = <div />;
  if(props.currentPage > 1) {
    prev = <NavLink
        to={`/search?status=${props.status}&gender=${props.gender}&type=${
          props.type
        }&page=${Number(props.currentPage) - 1}`}
      >
        {'<'}
      </NavLink> 
  }
//    else {
//       prev = '';
//   }

  if(Number(props.currentPage) < Math.ceil(Number(props.totalCount / props.limit))) {
    next = <NavLink
    to={`/search?status=${props.status}&gender=${props.gender}&type=${
      props.type
    }&page=${Number(props.currentPage) + 1}`}
  >
    {'>'}
  </NavLink>
  } else {

  }

  return (
    <div className="pagination">
        {prev}
      <NavLink
        to={`/search?status=${props.status}&gender=${props.gender}&type=${
          props.type
        }&page=${Number(props.currentPage)}`}
      >
        {props.currentPage}
      </NavLink>
      {next}
    </div>
  );
};

export default Pagination;
