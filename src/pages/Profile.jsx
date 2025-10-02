import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../graphql/queries';
import { CameraIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
import Avatar from '../components/shared/Avatar';
import Post from '../components/feed/Post';

const Profile = () => {
  const { userId } = useParams();
  const [activeTab, setActiveTab] = useState('posts');
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { userId: parseInt(userId) },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const user = data.user;
  const userPosts = user.posts;
  const friends = user.friends;

  return (
    <div className="space-y-4">
      {/* Cover photo */}
      <div className="relative h-64 bg-facebook-200 rounded-t-lg overflow-hidden">
            <div className="w-full h-full bg-gradient-to-r from-blue-400 to-purple-500"></div>
            <button className="absolute bottom-4 right-4 bg-white bg-opacity-80 hover:bg-opacity-100 text-facebook-800 font-medium px-4 py-1.5 rounded-md flex items-center text-sm">
              <CameraIcon className="h-4 w-4 mr-1" />
              Add Cover Photo
            </button>
          </div>

      {/* Profile header */}
      <div className="bg-white rounded-b-lg shadow p-4">
        <div className="flex flex-col md:flex-row md:items-end -mt-16 relative">
          <div className="relative group">
            <Avatar 
              src={user.profile_pic} 
              alt={user.name} 
              size="xl" 
              className="border-4 border-white"
            />
            <button className="absolute bottom-0 right-0 bg-facebook-200 rounded-full p-1.5 group-hover:bg-facebook-300">
              <CameraIcon className="h-5 w-5 text-facebook-800" />
            </button>
          </div>
          
          <div className="mt-4 md:mt-0 md:ml-6 flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold">{user.name}</h1>
                <p className="text-facebook-500">{userPosts.length} posts • {friends.length} friends</p>
              </div>
              <div className="flex space-x-2">
                <button className="bg-facebook-100 hover:bg-facebook-200 text-facebook-800 font-medium px-4 py-1.5 rounded-md text-sm">
                  Edit Profile
                </button>
                <button className="bg-facebook-100 hover:bg-facebook-200 text-facebook-800 p-1.5 rounded-md">
                  <EllipsisHorizontalIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-t border-facebook-200 mt-4 -mx-4 px-4 pt-1">
          <button 
            className={`px-4 py-3 font-medium text-sm ${activeTab === 'posts' ? 'text-facebook-blue border-b-2 border-facebook-blue' : 'text-facebook-500 hover:bg-facebook-100'}`}
            onClick={() => setActiveTab('posts')}
          >
            Posts
          </button>
          <button 
            className={`px-4 py-3 font-medium text-sm ${activeTab === 'about' ? 'text-facebook-blue border-b-2 border-facebook-blue' : 'text-facebook-500 hover:bg-facebook-100'}`}
            onClick={() => setActiveTab('about')}
          >
            About
          </button>
          <button 
            className={`px-4 py-3 font-medium text-sm ${activeTab === 'friends' ? 'text-facebook-blue border-b-2 border-facebook-blue' : 'text-facebook-500 hover:bg-facebook-100'}`}
            onClick={() => setActiveTab('friends')}
          >
            Friends
          </button>
          <button 
            className={`px-4 py-3 font-medium text-sm ${activeTab === 'photos' ? 'text-facebook-blue border-b-2 border-facebook-blue' : 'text-facebook-500 hover:bg-facebook-100'}`}
            onClick={() => setActiveTab('photos')}
          >
            Photos
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Left sidebar */}
        <div className="lg:col-span-1 space-y-4">
          {/* Intro */}
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-bold mb-3">Intro</h2>
            <p className="text-sm mb-3">Some bio information about the user would go here.</p>
            <button className="w-full bg-facebook-100 hover:bg-facebook-200 text-facebook-800 font-medium py-1.5 rounded-md text-sm">
              Edit Details
            </button>
          </div>

          {/* Photos */}
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-bold">Photos</h2>
              <button className="text-facebook-500 hover:underline text-sm">See All Photos</button>
            </div>
            <div className="grid grid-cols-3 gap-1">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="aspect-square bg-facebook-200 rounded-md overflow-hidden">
                  <img 
                    src={`https://picsum.photos/300/300?random=${item + 10}`} 
                    alt="Photo" 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Friends */}
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-bold">Friends</h2>
              <button className="text-facebook-500 hover:underline text-sm">See All Friends</button>
            </div>
            <p className="text-sm text-facebook-500 mb-3">{friends.length} friends</p>
            <div className="grid grid-cols-3 gap-3">
              {friends.slice(0, 6).map((friend) => (
                <div key={friend.user_id} className="space-y-1 cursor-pointer">
                  <div className="aspect-square bg-facebook-200 rounded-md overflow-hidden">
                    <img 
                      src={friend.profile_pic} 
                      alt={friend.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-xs font-medium truncate">{friend.name.split(' ')[0]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main feed */}
        <div className="lg:col-span-2 space-y-4">
          {/* Create Post */}
          <div className="bg-white rounded-lg shadow p-4">
            <div className="flex items-center space-x-2">
              <Avatar src={user.profile_pic} alt={user.name} size="md" />
              <button 
                className="flex-1 bg-facebook-100 hover:bg-facebook-200 text-facebook-600 text-left p-2 rounded-full transition-colors text-sm"
                onClick={() => document.getElementById('profilePostInput')?.focus()}
              >
                What's on your mind, {user.name.split(' ')[0]}?
              </button>
            </div>
          </div>

          {/* Posts */}
          {userPosts.length > 0 ? (
            userPosts.map((post) => (
              <Post key={post.post_id} post={post} />
            ))
          ) : (
            <div className="bg-white rounded-lg shadow p-8 text-center">
              <p className="text-facebook-500">No posts to show</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;