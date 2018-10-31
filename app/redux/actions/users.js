// Actions
export const USERS = {
  REQUEST: 'REQUEST_USERS',
  RECEIVE: 'RECEIVE_USERS',
  ERROR: 'ERROR_USERS',
};

// Actions Creators

export const requestUsers = () => ({
  type: USERS.REQUEST,
});

export const receiveUsers = users => ({
  type: USERS.RECEIVE,
  users,
});

export const errorUsers = error => ({
  type: USERS.ERROR,
  error,
});

export const getUsers = () => {
  return (dispatch) => {
    dispatch(requestUsers());
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then(
        response => response.json(),
        error => dispatch(errorUsers(error)),
      ).then(
        users => dispatch(receiveUsers(users.map(({ name, id }) => ({ name, id })))),
      );
  };
};
