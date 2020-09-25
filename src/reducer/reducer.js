/*************************
 *  TYPES                *
 *************************/
const GUARDAR_POSTS = "GUARDAR_POSTS";
const GUARDAR_POST = "GUARDAR_POST";
const GUARDAR_MODAL = "GUARDAR_MODAL";

/*************************
 *  STATE                *
 *************************/
const initialState = {
  posts: [],
  post: null,
  modal: false,
};

/*************************
 *  REDUCER              *
 *************************/
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GUARDAR_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case GUARDAR_POST:
      return {
        ...state,
        post: action.payload,
      };
    case GUARDAR_MODAL:
      return {
        ...state,
        modal: action.payload,
      };

    default:
      return state;
  }
}

/*************************
 *  ACTIONS              *
 *************************/
export const guardar_posts = (data) => (dispatch) => {
  dispatch({
    type: GUARDAR_POSTS,
    payload: data,
  });
};

export const guardar_post = (data) => (dispatch) => {
  dispatch({
    type: GUARDAR_POST,
    payload: data,
  });
};

export const guardar_modal = (data) => (dispatch) => {
  dispatch({
    type: GUARDAR_MODAL,
    payload: data,
  });
};
