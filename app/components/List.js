import React from 'react';
import PropTypes from 'prop-types';

const List = ({ elements = [], type }) => (
  <ul className={`${type}-list`}>
    { elements.map(element => <li>{element}</li>) }
  </ul>
);

List.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.any).isRequired,
  type: PropTypes.string,
};

List.defaultProps = {
  type: 'text',
};

export default List;
