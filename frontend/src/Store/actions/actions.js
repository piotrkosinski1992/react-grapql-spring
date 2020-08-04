import {
  ADD_POST_SUCCESS,
  ERROR,
  GET_POSTS,
  GET_POSTS_SUCCESS,
  LIKE_POST_SUCCESS,
  LOADING,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_SUCCESS,
  DELETE_POST_SUCCESS
} from "./actionTypes"
import axios from "../../axios-config";
import {
  ADD_POST, COMMENT_POST, DELETE_POST,
  GET_POSTS_QUERY, LIKE_POST,
  LOGIN_USER,
  REGISTER_USER
} from "../qraphql/mutations";

export const loading = () => {
  return {
    type: LOADING
  }
}

export const setError = (error) => {
  return {
    type: ERROR,
    payload: error
  }
}

export const login = (data, history) => {
  return dispatch => {
    dispatch(loading())
    axios.post('/graphql', {
      query: LOGIN_USER, variables: data
    }).then(result => {
      if (result.data.errors) {
        dispatch(setError(result.data.errors[0].message))
      } else {
        dispatch(loginSuccess(result.data.data.login))
        history.push('/home');
      }
    })
  }
}

export const registerSuccess = (user) => {
  return {
    type: REGISTER_SUCCESS,
    payload: user
  }
}

export const register = (data, history) => {
  return dispatch => {
    dispatch(loading())
    axios.post('/graphql', {
      query: REGISTER_USER, variables: data
    }).then(result => {
      if (result.data.errors) {
        dispatch(setError(result.data.errors[0].message))
      } else {
        dispatch(registerSuccess(result.data.data.register))
        history.push('/home');
      }
    })
  }
}

export const loginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    payload: user
  }
}

export const getPosts = () => {
  return dispatch => {
    dispatch(loading())
    axios.post('/graphql', {
      query: GET_POSTS_QUERY
    }).then(result => {
      if (result.data.errors) {
        dispatch(setError(result.data.errors[0].message))
      } else {
        dispatch(getPostsSuccess(result.data.data.getPosts))
      }
    })
  }
}

export const getPostsSuccess = (posts) => {
  return {
    type: GET_POSTS_SUCCESS,
    payload: posts
  }
}

export const comment = (postId, body, history) => {
  return dispatch => {
    dispatch(loading())
    axios.post('/graphql', {
      query: COMMENT_POST, variables: {postId, body}
    }).then(result => {
      if (result.data.errors) {
        dispatch(setError(result.data.errors[0].message))
      } else {
        dispatch(getPosts())
        history.push('/home');
      }
    })
  }
}

export const addPost = (post) => {
  return dispatch => {
    dispatch(loading())
    axios.post('/graphql', {
      query: ADD_POST, variables: post
    }).then(result => {
      if (result.data.errors) {
        dispatch(setError(result.data.errors[0].message))
      } else {
        dispatch(addPostSuccess(result.data.data.createPost))
      }
    })
  }
}

export const addPostSuccess = (post) => {
  return {
    type: ADD_POST_SUCCESS,
    payload: post
  }
}

export const deletePost = (postId) => {
  return dispatch => {
    dispatch(loading())
    axios.post('/graphql', {
      query: DELETE_POST, variables: {postId}
    }).then(result => {
      if (result.data.errors) {
        dispatch(setError(result.data.errors[0].message))
      } else {
        dispatch(deletePostSuccess(postId))
      }
    })
  }
}

export const deletePostSuccess = (postId) => {
  return {
    type: DELETE_POST_SUCCESS,
    payload: postId
  }
}

// LIKE POST MARK DOESNT WORK

export const like = (postId) => {
  return dispatch => {
    dispatch(loading())
    axios.post('/graphql', {
      query: LIKE_POST, variables: {postId}
    }).then(result => {
      if (result.data.errors) {
        dispatch(setError(result.data.errors[0].message))
      } else {
        dispatch(likeSuccess())
        dispatch(getPosts(result.data.data.likePost, postId))
      }
    })
  }
}

export const likeSuccess = () => {
  return {
    type: LIKE_POST_SUCCESS
  }
}

export const logout = () => {
  return {
    type: LOGOUT
  }
}
