import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Page from './Page';

import { getUsers } from '../redux/actions';

class Users extends Component {
  componentWillMount () {
    const { getUsers: users } = this.props;
    users();
  }

  render () {
    const { elements, title } = this.props;
    const listElements = elements.map(user => <Link to={`/${user.id}`}>{user.name}</Link>);
    return <Page title={title} list={listElements} />;
  }
}

Users.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.object).isRequired,
  getUsers: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  elements: state.listElements,
  title: state.pageTitle,
});

const UsersContainer = connect(
  mapStateToProps,
  { getUsers },
)(Users);

export default UsersContainer;
