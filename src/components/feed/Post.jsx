import React, { useState } from 'react';
import { 
  ChatBubbleLeftIcon, 
  ShareIcon, 
  EllipsisHorizontalIcon,
  FaceSmileIcon,
  PaperAirplaneIcon,
  HandThumbUpIcon
} from '@heroicons/react/24/solid';
import Avatar from '../shared/Avatar';

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const Post = ({ post }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [comment, setComment] = useState('');
  const [showComments, setShowComments] = useState(false);
  const user = post.posted_by;
  const likeCount = post.reactions.length;

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
          <Avatar src={user.profile_pic} alt={user.name} size="md" />
          <div>
            <h3 className="font-semibold">{user.name}</h3>
            <p className="text-xs text-facebook-500">{formatDate(post.posted_at)}</p>
          </div>
        </div>
        <button className="text-facebook-500 hover:bg-facebook-100 p-1 rounded-full">
          <EllipsisHorizontalIcon className="h-5 w-5" />
        </button>
      </div>

      {/* Post content */}
      <div className="mb-3">
        <p className="mb-3">{post.post_content}</p>
      </div>

      {/* Post stats */}
      <div className="flex items-center justify-between text-sm text-facebook-500 border-b border-facebook-100 pb-2 mb-3">
        <div className="flex items-center">
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
          <HandThumbUpIcon className="h-5 w-5 mr-1" />
          Like
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
            <Avatar src={user.profile_pic} alt={user.name} size="sm" />
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
              post.comments.map((comment) => (
                <div key={comment.comment_id} className="flex space-x-2">
                  <Avatar src={comment.commented_by.profile_pic} alt={comment.commented_by.name} size="sm" />
                  <div className="flex-1 bg-facebook-100 rounded-2xl p-2">
                    <div className="font-semibold text-sm">{comment.commented_by.name}</div>
                    <p className="text-sm">{comment.comment_content}</p>
                    <div className="flex items-center text-xs text-facebook-500 mt-1">
                      <span>{formatDate(comment.commented_at)}</span>
                      <button className="ml-3 hover:underline">Like</button>
                      <button className="ml-2 hover:underline">Reply</button>
                    </div>
                    {comment.replies && comment.replies.length > 0 && (
                      <div className="pt-2 mt-2 border-t border-facebook-200">
                        {comment.replies.map((reply) => (
                          <div key={reply.comment_id} className="flex space-x-2 mt-2">
                            <Avatar src={reply.commented_by.profile_pic} alt={reply.commented_by.name} size="sm" />
                            <div className="flex-1 bg-facebook-100 rounded-2xl p-2">
                              <div className="font-semibold text-sm">{reply.commented_by.name}</div>
                              <p className="text-sm">{reply.comment_content}</p>
                              <div className="flex items-center text-xs text-facebook-500 mt-1">
                                <span>{formatDate(reply.commented_at)}</span>
                                <button className="ml-3 hover:underline">Like</button>
                                <button className="ml-2 hover:underline">Reply</button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-sm text-facebook-500 py-2">No comments yet</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;