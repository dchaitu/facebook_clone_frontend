// mockData.js

// Mock Users
export const users = [
  {
    user_id: 1,
    name: 'John Doe',
    profile_pic: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    user_id: 2,
    name: 'Jane Smith',
    profile_pic: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    user_id: 3,
    name: 'Mike Johnson',
    profile_pic: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    user_id: 4,
    name: 'Sarah Williams',
    profile_pic: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
];

// Mock Groups
export const groups = [
  {
    group_id: 1,
    name: 'React Developers',
  },
  {
    group_id: 2,
    name: 'Travel Enthusiasts',
  },
];

// Mock Posts
export const posts = [
  {
    post_id: 1,
    post_content: 'Just had an amazing day at the beach! 🏖️',
    posted_at: '2025-09-26T10:30:00Z',
    posted_by: users[0],
    group: groups[1],
    reactions: [
      {
        reaction: 'like',
        reacted_by: users[1],
      },
      {
        reaction: 'love',
        reacted_by: users[2],
      },
    ],
    comments: [
      {
        comment_id: 1,
        comment_content: 'Looks amazing! 😍',
        commented_at: '2025-09-26T10:35:00Z',
        commented_by: users[1],
        replies: [],
      },
      {
        comment_id: 2,
        comment_content: 'Wish I was there!',
        commented_at: '2025-09-26T11:20:00Z',
        commented_by: users[2],
        replies: [
          {
            comment_id: 4,
            comment_content: 'Me too!',
            commented_at: '2025-09-26T11:25:00Z',
            commented_by: users[3],
          },
        ],
      },
    ],
  },
  {
    post_id: 2,
    post_content: 'Working on a new project. Stay tuned! 👨‍💻',
    posted_at: '2025-09-25T15:45:00Z',
    posted_by: users[1],
    group: groups[0],
    reactions: [
      {
        reaction: 'like',
        reacted_by: users[0],
      },
      {
        reaction: 'like',
        reacted_by: users[2],
      },
      {
        reaction: 'celebrate',
        reacted_by: users[3],
      },
    ],
    comments: [
      {
        comment_id: 3,
        comment_content: "Can't wait to see it!",
        commented_at: '2025-09-25T16:00:00Z',
        commented_by: users[0],
        replies: [],
      },
    ],
  },
];