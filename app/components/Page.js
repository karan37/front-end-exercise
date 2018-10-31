import React, {} from 'react';
import PropTypes from 'prop-types';


import Title from './Title';
import List from './List';

const Page = ({ title, list }) => {
  return (
    <div className="page">
      <Title text={title} />
      <List elements={list} />
    </div>
  );
};

Page.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Page;
