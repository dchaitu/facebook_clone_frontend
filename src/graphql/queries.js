import { gql } from '@apollo/client';

export const GET_POSTS = gql`
  query GetPosts {
    posts {
      post_id
      post_content
      posted_at
      posted_by {
        user_id
        name
        profile_pic
      }
      group {
        group_id
        name
      }
      reactions {
        reaction
        reacted_by {
          user_id
          name
        }
      }
      comments {
        comment_id
        comment_content
        commented_at
        commented_by {
          user_id
          name
          profile_pic
        }
        replies {
          comment_id
          comment_content
          commented_at
          commented_by {
            user_id
            name
            profile_pic
          }
        }
      }
    }
  }
`;

export const GET_USER = gql`
  query GetUser($userId: ID!) {
    user(id: $userId) {
      user_id
      name
      profile_pic
      posts {
        post_id
        post_content
        posted_at
      }
      friends {
        user_id
        name
        profile_pic
      }
    }
  }
`;

export const GET_GROUPS = gql`
  query GetGroups {
    groups {
      group_id
      name
    }
  }
`;
