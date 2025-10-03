import { gql } from '@apollo/client';

export const GET_POSTS = gql`
  query GetPosts {
    allPosts {
      postId
      content
      postedAt
      postedBy {
        userId
        name
        profilePic
      }
      reactions {
        reaction
        reactedBy {
          userId
          name
          profilePic
        }
      }
      comments {
        commentId
        content
        commentedAt
        commentedBy {
          userId
          name
          profilePic
        }
        replies {
          commentId
          content
          commentedAt
          commentedBy {
            userId
            name
            profilePic
          }
        }
      }
    }
  }
`;

export const GET_USER = gql`
    query GetUser($userId: Int!) {
        user(userId: $userId) {
            userId
            name
            profilePic
        }
    }
`;


export const GET_USER_POSTS = gql`
    query GetUserPosts($userId: Int!) {
        allPostsByUser(userId: $userId) {
            postId
            content
            postedAt
        }
    }
`;


export const GET_GROUPS = gql`
    query GetGroups {
        allGroups {
            id
            name
            members {
                userId
                name
                profilePic
            }
        }
    }
`;

export const GET_CURRENT_USER = gql`
  query GetCurrentUser($userId: Int!) {
    user(userId: $userId) {
      userId
      name
      profilePic
    }
  }
`;