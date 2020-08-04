// import React, {createContext, useContext, useReducer} from "react";
// import gql from "graphql-tag";
// import {useMutation, useQuery} from "@apollo/react-hooks";
//
// const initialState = {user: null, posts: []}
//
// const AuthContext = createContext({
//   user: null,
//   login: (data) => {
//   },
//   logout: (data) => {
//   },
//   addPost: (data) => {
//   },
//   addPosts: (data) => {
//   },
// })
//
//
// /*const GET_USER_BY_TOKEN_QUERY = gql`
//     query getUserByToken($token: String!)
//     {
//         getUserByToken(
//             token: $token
//         ) {
//             id username createdAt token
//         }
//     }
// `
// const {loading, data} = useQuery(GET_USER_BY_TOKEN_QUERY, {
//   variables: {
//     token: localStorage.getItem('token')
//   }
// });*/
//
//
// const authReducer = (state, action) => {
//   switch (action.type) {
//     case 'LOGIN':
//       return {
//         ...state,
//         user: action.payload
//       }
//     case 'LOGOUT':
//       return {
//         ...state,
//         user: null
//       }
//     case 'GET_POSTS':
//       return {
//         ...state,
//         posts: action.payload
//       }
//     case 'ADD_POST':
//       return {
//         ...state,
//         posts: [...state.posts, action.payload]
//       }
//     default:
//       return state
//   }
// }
//
// const AuthProvider = (props) => {
//   const [state, dispatch] = useReducer(authReducer, initialState);
//
//   const login = (data) => {
//     localStorage.setItem('token', data.token)
//     dispatch({
//       type: 'LOGIN',
//       payload: data
//     })
//   }
//
//   const addPosts = (data) => {
//     dispatch({
//       type: 'GET_POSTS',
//       payload: data
//     })
//   }
//
//   const addPost = (data) => {
//     dispatch({
//       type: 'ADD_POST',
//       payload: data
//     })
//   }
//
//   const logout = () => {
//     localStorage.clear()
//     dispatch({
//       type: 'LOGOUT'
//     })
//   }
//
//   return (
//       <AuthContext.Provider value={{user: state.user, login, logout, addPosts, addPost}}
//                             {...props}
//       />
//   )
// }
//
// export {AuthContext, AuthProvider}
