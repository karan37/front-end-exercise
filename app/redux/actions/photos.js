// Actions

export const PHOTOS = {
  REQUEST: 'REQUEST_PHOTOS',
  RECEIVE: 'RECEIVE_PHOTOS',
  ERROR: 'ERROR_PHOTOS',
};

// Actions Creators

export const requestPhotos = albumId => ({
  type: PHOTOS.REQUEST,
  albumId,
});

export const receivePhotos = photos => ({
  type: PHOTOS.RECEIVE,
  photos,
});

export const errorPhotos = error => ({
  type: PHOTOS.ERROR,
  error,
});

export const getPhotos = (albumId) => {
  return (dispatch) => {
    dispatch(requestPhotos());
    return fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then(
        response => response.json(),
        error => dispatch(errorPhotos(error)),
      )
      .then(
        response => dispatch(receivePhotos(response.map(
          ({ url, title, albumId: aid }) => ({ url, title, albumId: aid }),
        ))),
      );
  };
};
