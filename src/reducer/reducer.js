/*************************
 *  TYPES                *
 *************************/
const GUARDAR_ALBUMS = "GUARDAR_ALBUMS";

/*************************
 *  STATE                *
 *************************/
const initialState = {
  albums: null,
};

/*************************
 *  REDUCER              *
 *************************/
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GUARDAR_ALBUMS:
      return {
        ...state,
        albums: action.payload,
      };

    default:
      return state;
  }
}

/*************************
 *  ACTIONS              *
 *************************/
export const guardar_albums = (data) => (dispatch) => {
  dispatch({
    type: GUARDAR_ALBUMS,
    payload: data,
  });
};
