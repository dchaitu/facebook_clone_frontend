import React, { useState } from 'react';
import { 
  // ThumbUpIcon,
  ChatBubbleLeftIcon, 
  ShareIcon, 
  EllipsisHorizontalIcon,
  FaceSmileIcon,
  PaperAirplaneIcon
} from '@heroicons/react/24/outline';
import { HandThumbUpIcon } from '@heroicons/react/24/solid';
import Avatar from '../shared/Avatar';
import { formatDate, getUserById } from '../../data/mockData';

const Post = ({ post }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [comment, setComment] = useState('');
  const [showComments, setShowComments] = useState(false);
  const user = getUserById(post.userId);
  const likeCount = isLiked ? post.likes.length + 1 : post.likes.length;

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!comment.trim()) return;
    
    // In a real app, this would be an API call
    console.log('Comment:', comment);
    setComment('');
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      {/* Post header */}
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center space-x-2">
          <Avatar src={user.profilePic} alt={user.name} size="md" />
          <div>
            <h3 className="font-semibold">{user.name}</h3>
            <p className="text-xs text-facebook-500">{formatDate(post.createdAt)}</p>
          </div>
        </div>
        <button className="text-facebook-500 hover:bg-facebook-100 p-1 rounded-full">
          <EllipsisHorizontalIcon className="h-5 w-5" />
        </button>
      </div>

      {/* Post content */}
      <div className="mb-3">
        <p className="mb-3">{post.content}</p>
        {post.image && (
          <div className="rounded-lg overflow-hidden">
            <img 
              src={post.image} 
              alt="Post content" 
              className="w-full h-auto max-h-96 object-cover"
            />
          </div>
        )}
      </div>

      {/* Post stats */}
      <div className="flex items-center justify-between text-sm text-facebook-500 border-b border-facebook-100 pb-2 mb-3">
        <div className="flex items-center">
          <div className="flex -space-x-1">
            {post.likes.slice(0, 3).map((like, index) => (
              <div key={index} className="w-5 h-5 rounded-full bg-facebook-200 border-2 border-white"></div>
            ))}
          </div>
          <span className="ml-2">{likeCount} likes</span>
        </div>
        <div>
          <button 
            className="hover:underline"
            onClick={() => setShowComments(!showComments)}
          >
            {post.comments.length} comments • 0 shares
          </button>
        </div>
      </div>

      {/* Post actions */}
      <div className="flex justify-between text-center text-sm text-facebook-500 font-medium mb-3">
        <button 
          className={`flex-1 flex items-center justify-center py-1.5 rounded-md hover:bg-facebook-100 ${isLiked ? 'text-facebook-blue' : ''}`}
          onClick={handleLike}
        >
          {/*{isLiked ? (*/}
          {/*  <HandThumbUpIcon className="h-5 w-5 mr-1" />*/}
          {/*) : (*/}
          {/*  <ThumbUpIcon className="h-5 w-5 mr-1" />*/}
          {/*)}*/}
          {/*Like*/}
        </button>
        <button 
          className="flex-1 flex items-center justify-center py-1.5 rounded-md hover:bg-facebook-100"
          onClick={() => setShowComments(!showComments)}
        >
          <ChatBubbleLeftIcon className="h-5 w-5 mr-1" />
          Comment
        </button>
        <button className="flex-1 flex items-center justify-center py-1.5 rounded-md hover:bg-facebook-100">
          <ShareIcon className="h-5 w-5 mr-1" />
          Share
        </button>
      </div>

      {/* Comments section */}
      {showComments && (
        <div className="pt-3 border-t border-facebook-100">
          {/* Comment input */}
          <form onSubmit={handleCommentSubmit} className="flex items-start space-x-2 mb-3">
            <Avatar src={user.profilePic} alt={user.name} size="sm" />
            <div className="flex-1 flex items-center bg-facebook-100 rounded-full px-3 py-2">
              <input
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write a comment..."
                className="flex-1 bg-transparent border-none outline-none text-sm"
              />
              <div className="flex space-x-1">
                <button type="button" className="text-facebook-500 hover:text-facebook-700">
                  <FaceSmileIcon className="h-5 w-5" />
                </button>
                <button 
                  type="submit" 
                  className="text-facebook-500 hover:text-facebook-700"
                  disabled={!comment.trim()}
                >
                  <PaperAirplaneIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </form>

          {/* Comments list */}
          <div className="space-y-3">
            {post.comments.length > 0 ? (
              post.comments.map((commentId) => {
                const comment = getCommentById(commentId);
                const commentUser = getUserById(comment.userId);
                return (
                  <div key={comment.id} className="flex space-x-2">
                    <Avatar src={commentUser.profilePic} alt={commentUser.name} size="sm" />
                    <div className="flex-1 bg-facebook-100 rounded-2xl p-2">
                      <div className="font-semibold text-sm">{commentUser.name}</div>
                      <p className="text-sm">{comment.content}</p>
                      <div className="flex items-center text-xs text-facebook-500 mt-1">
                        <span>{formatDate(comment.createdAt)}</span>
                        <button className="ml-3 hover:underline">Like</button>
                        <button className="ml-2 hover:underline">Reply</button>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="text-center text-sm text-facebook-500 py-2">No comments yet</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

// Helper function to get comment by ID (would be from API in a real app)
const getCommentById = (id) => {
  // This is a mock implementation
  return {
    id,
    postId: 1,
    userId: id === 1 ? 2 : 3,
    content: id === 1 ? 'Looks amazing! 😍' : 'Wish I was there!',
    createdAt: new Date().toISOString(),
  };
};

export default Post;
