import gql from "graphql-tag";

export const LOGIN_USER = `  
         mutation login(
        $username: String!,
        $password: String!
     )  {
        login(
            loginInput: {
                username: $username,
                password: $password
            }
        ){
            id username createdAt token
        }
      }
`

export const REGISTER_USER = `  
         mutation register(
        $username: String!,
        $password: String!,
        $repeatPassword: String!
     )  {
        register(
            registerInput: {
                username: $username,
                password: $password,
                repeatPassword: $repeatPassword
            }
        ){
            id username createdAt token
        }
      }
`


export const ADD_POST = `  
         mutation createPost($body: String!)  {
        createPost(
                body: $body,
        ){
            id body createdAt username
            likes{
                id username createdAt
            }
            likeCount
            comments{
                id body createdAt username
            }
            commentCount
        }
      }
`


export const GET_POSTS_QUERY = `
        query {
        getPosts {
            id
            body
            createdAt
            username
            likeCount
            likes {
                username
            }
            commentCount
            comments {
                id username createdAt body
            }
        }
     }
`


export const DELETE_POST = `
    mutation deletePost(
        $postId: String!
    ) {
        deletePost(
            postId: $postId
        )
    }
`


export const LIKE_POST = `
    mutation likePost(
        $postId: String!
    ) {
        likePost(
            postId: $postId
        ){
            id username createdAt
        }
    }
`

export const COMMENT_POST = `
    mutation commentPost(
        $postId: String!,
        $body: String!
    ) {
        commentPost(
            postId: $postId,
            body: $body
        ){
            id username createdAt body
        }
    }
`
