// Mock Users
export const users = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    profilePic: 'https://randomuser.me/api/portraits/men/1.jpg',
    coverPic: 'https://picsum.photos/800/300?random=1',
    friends: [2, 3, 4],
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    profilePic: 'https://randomuser.me/api/portraits/women/1.jpg',
    coverPic: 'https://picsum.photos/800/300?random=2',
    friends: [1, 3],
  },
  {
    id: 3,
    name: 'Mike Johnson',
    email: 'mike@example.com',
    profilePic: 'https://randomuser.me/api/portraits/men/2.jpg',
    coverPic: 'https://picsum.photos/800/300?random=3',
    friends: [1, 2, 4],
  },
  {
    id: 4,
    name: 'Sarah Williams',
    email: 'sarah@example.com',
    profilePic: 'https://randomuser.me/api/portraits/women/2.jpg',
    coverPic: 'https://picsum.photos/800/300?random=4',
    friends: [1, 3],
  },
];

// Mock Posts
export const posts = [
  {
    id: 1,
    userId: 1,
    content: 'Just had an amazing day at the beach! 🏖️',
    createdAt: '2025-09-26T10:30:00Z',
    likes: [2, 3],
    comments: [1, 2],
  },
  {
    id: 2,
    userId: 2,
    content: 'Working on a new project. Stay tuned! 👨‍💻',
    image: 'https://picsum.photos/800/400?random=11',
    createdAt: '2025-09-25T15:45:00Z',
    likes: [1, 3, 4],
    comments: [3],
  },
  {
    id: 3,
    userId: 3,
    content: 'Beautiful sunset today! 🌅',
    image: 'https://picsum.photos/800/400?random=12',
    createdAt: '2025-09-24T18:20:00Z',
    likes: [1, 2, 4],
    comments: [],
  },
];

// Mock Comments
export const comments = [
  {
    id: 1,
    postId: 1,
    userId: 2,
    content: 'Looks amazing! 😍',
    createdAt: '2025-09-26T10:35:00Z',
  },
  {
    id: 2,
    postId: 1,
    userId: 3,
    content: 'Wish I was there!',
    createdAt: '2025-09-26T11:20:00Z',
  },
  {
    id: 3,
    postId: 2,
    userId: 1,
    content: 'Can\'t wait to see it!',
    createdAt: '2025-09-25T16:00:00Z',
  },
];

// Helper function to get a user by ID
export const getUserById = (userId) => users.find(user => user.id === userId);

// Helper function to get posts by user ID
export const getPostsByUserId = (userId) => 
  posts.filter(post => post.userId === userId);

// Helper function to get comments for a post
export const getCommentsByPostId = (postId) => 
  comments.filter(comment => comment.postId === postId);

// Helper function to format date
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export { formatDate };
