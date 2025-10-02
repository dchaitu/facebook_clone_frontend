import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { GET_POSTS } from '../graphql/queries';
import { PhotoIcon, FaceSmileIcon, VideoCameraIcon } from '@heroicons/react/24/solid';
import Avatar from '../components/shared/Avatar';
import Button from '../components/shared/Button';
import Post from '../components/feed/Post';
import { users } from '../data/mockData'; // Temporary, for currentUser

const Home = () => {
  const [postContent, setPostContent] = useState('');
  const { loading, error, data } = useQuery(GET_POSTS);
  const currentUser = users[0]; // Temporary

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (!postContent.trim()) return;
    
    // In a real app, this would be a GraphQL mutation
    console.log('Posting:', postContent);
    setPostContent('');
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const posts = data.posts;

  return (
    <div className="space-y-4">
      {/* Create Post */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex items-center space-x-2 mb-4">
          <Avatar src={currentUser.profile_pic} alt={currentUser.name} size="md" />
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
        {posts.map((post) => (
          <Post key={post.post_id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
