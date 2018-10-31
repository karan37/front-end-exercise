import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Page from './Page';

import { getPhotos } from '../redux/actions';

class App extends Component {
  componentWillMount () {
    const { getPhotos: photos, albumId } = this.props;
    photos(albumId);
  }

  render () {
    const { elements, title } = this.props;

    const listElements = elements.map(photo => <div className="photo"><img src={photo.url} alt="Cannot load" /><p>{photo.title}</p></div>);
    return <div className="photos"><Page title={title} list={listElements} /></div>;
  }
}

App.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      albumId: PropTypes.string,
      userId: PropTypes.string,
    }),
  }).isRequired,
  elements: PropTypes.arrayOf(PropTypes.object).isRequired,
  getPhotos: PropTypes.func.isRequired,
  albumId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  albumId: ownProps.match.params.albumId || null,
  userId: ownProps.match.params.userId || null,
  elements: state.listElements,
  title: state.pageTitle,
});

const AppContainer = connect(
  mapStateToProps,
  { getPhotos },
)(App);

export default AppContainer;
