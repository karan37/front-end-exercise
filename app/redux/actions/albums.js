// Actions

export const ALBUMS = {
  REQUEST: 'REQUEST_ALBUMS',
  RECEIVE: 'RECEIVE_ALBUMS',
  ERROR: 'ERROR_ALBUMS',
};

// Actions Creators

export const requestAlbums = userId => ({
  type: ALBUMS.REQUEST,
  userId,
});

export const receiveAlbums = albums => ({
  type: ALBUMS.RECEIVE,
  albums,
});

export const errorAlbums = error => ({
  type: ALBUMS.ERROR,
  error,
});

export const getAlbums = (userId) => {
  return (dispatch) => {
    dispatch(requestAlbums());
    return fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then(
        response => response.json(),
        error => dispatch(errorAlbums(error)),
      )
      .then(
        albums => dispatch(receiveAlbums(albums)),
      );
  };
};
