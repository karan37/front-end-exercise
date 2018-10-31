import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Page from './Page';

import { getAlbums } from '../redux/actions';

class Albums extends Component {
  componentWillMount () {
    const { getAlbums: albums, userId } = this.props;
    albums(userId);
  }

  render () {
    const { elements, userId, title } = this.props;

    const listElements = elements.map(album => <Link to={`/${userId}/${album.id}`}>{album.title}</Link>);
    return <Page title={title} list={listElements} />;
  }
}

Albums.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      userId: PropTypes.string,
    }),
  }).isRequired,
  elements: PropTypes.arrayOf(PropTypes.object).isRequired,
  getAlbums: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  userId: ownProps.match.params.userId || null,
  elements: state.listElements,
  title: state.pageTitle,
});

const AlbumsContainer = connect(
  mapStateToProps,
  { getAlbums },
)(Albums);

export default AlbumsContainer;
