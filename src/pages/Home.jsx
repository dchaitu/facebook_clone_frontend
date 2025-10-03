import React, { useState } from 'react';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client/react';
import {GET_CURRENT_USER, GET_POSTS, GET_USER} from '../graphql/queries';
import { PhotoIcon, FaceSmileIcon, VideoCameraIcon } from '@heroicons/react/24/solid';
import Avatar from '../components/shared/Avatar';
import Button from '../components/shared/Button';
import Post from '../components/feed/Post';
import { users } from '../data/mockData'; // Temporary, for currentUser

const Home = () => {
  const [postContent, setPostContent] = useState('');
  const { data: postsData, loading: postsLoading, error: postsError } = useQuery(GET_POSTS);
  const { data: userData, loading: userLoading, error: userError } = useQuery(GET_USER, {
    variables: { userId: 1 },
  });



  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (!postContent.trim()) return;
    
    // In a real app, this would be a GraphQL mutation
    console.log('Posting:', postContent);
    setPostContent('');
  };

    if (postsLoading || userLoading) return <div className="flex justify-center p-8"><p>Loading...</p></div>;
    if (postsError) return <div className="text-red-500 p-4">Error loading posts: {postsError.message}</div>;
    if (userError) return <div className="text-red-500 p-4">Error loading user data: {userError.message}</div>;

    console.log("PostsData ",postsData)
    const posts = postsData?.allPosts || [];
  const currentUser = userData?.user;
    console.log("currentUser ", userData);
    // if (!currentUser) {
    //     return <div className="text-red-500 p-4">User not authenticated</div>;
    // }

    const transformedPosts = posts.map(post => ({
        post_id: post.postId,
        post_content: post.content,
        posted_at: post.postedAt,
        posted_by: post.postedBy,
        reactions: post.reactions?.map(reaction => ({
            reaction: reaction.reaction,
            reacted_by: reaction.reactedBy
        })) || [],
        comments: post.comments?.map(comment => ({
            comment_id: comment.commentId,
            comment_content: comment.content,
            commented_at: comment.commentedAt,
            commented_by: comment.commentedBy,
            replies: comment.replies?.map(reply => ({
                comment_id: reply.commentId,
                comment_content: reply.content,
                commented_at: reply.commentedAt,
                commented_by: reply.commentedBy
            })) || []
        })) || []
    }));


    return (
    <div className="space-y-4">
      {/* Create Post */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex items-center space-x-2 mb-4">
          <Avatar src={currentUser.profilePic} alt={currentUser.name} size="md" />
          <button 
            onClick={() => document.getElementById('postInput').focus()}
            className="flex-1 bg-facebook-100 hover:bg-facebook-200 text-facebook-600 text-left p-2 rounded-full transition-colors"
          >
            What's on your mind, {currentUser.name.split(' ')[0]}?
          </button>
        </div>
        
        <div className="border-t border-facebook-200 pt-3">
          <form onSubmit={handlePostSubmit} className="space-y-3">
            <textarea
              id="postInput"
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              placeholder="What's on your mind?"
              className="w-full border-0 focus:ring-0 resize-none text-sm"
              rows="3"
            />
            
            <div className="flex justify-between items-center">
              <div className="flex space-x-1">
                <Button type="button" variant="ghost" size="sm" icon={PhotoIcon} iconPosition="left">
                  Photo
                </Button>
                <Button type="button" variant="ghost" size="sm" icon={VideoCameraIcon} iconPosition="left">
                  Video
                </Button>
                <Button type="button" variant="ghost" size="sm" icon={FaceSmileIcon} iconPosition="left">
                  Feeling
                </Button>
              </div>
              <Button type="submit" size="sm" disabled={!postContent.trim()}>
                Post
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Stories */}
      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-lg font-semibold mb-3">Stories</h2>
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {[1, 2, 3, 4].map((story) => (
            <div 
              key={story} 
              className="flex-shrink-0 w-32 h-48 rounded-lg bg-facebook-200 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute top-2 left-2">
                <Avatar 
                  src={`https://randomuser.me/api/portraits/${story % 2 === 0 ? 'women' : 'men'}/${story}.jpg`} 
                  size="sm"
                  className="border-2 border-facebook-blue"
                />
              </div>
              <div className="absolute bottom-2 left-2 right-2 text-white text-sm font-medium">
                {story === 1 ? 'Create Story' : `User ${story}`}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Posts Feed */}
      <div className="space-y-4">
        {transformedPosts.map((post) => (
          <Post key={post.post_id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
