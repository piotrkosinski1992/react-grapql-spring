import {
  ADD_POST_SUCCESS,
  DELETE_POST_SUCCESS,
  ERROR,
  GET_POSTS_SUCCESS,
  LIKE_POST_SUCCESS,
  LOADING,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_SUCCESS
} from "../actions/actionTypes";

const initialState = {
  authenticated: false,
  user: null,
  posts: [],
  loading: false,
  error: null
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true
      }
    case ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        authenticated: true,
        loading: false,
        user: action.payload,
        error: null
      }
    case REGISTER_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        authenticated: true,
        loading: false,
        user: action.payload,
        error: null
      }
    case LOGOUT:
      localStorage.clear();
      return {
        ...state,
        authenticated: false,
        loading: false,
        user: null
      }
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload
      }
    case ADD_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: [...state.posts, action.payload]
      }
    case LIKE_POST_SUCCESS:
      return {
        ...state,
        loading: false
      }
    case DELETE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: state.posts.filter(post => post.id !== action.payload)
      }
    default:
      return state
  }
}

export default user;
