import React from 'react';
import { useQuery } from '@apollo/client/react';
import { GET_USER, GET_GROUPS } from '../../graphql/queries';
import { 
  UserGroupIcon, 
  ClockIcon, 
  CalendarIcon, 
  BookmarkIcon, 
  StarIcon, 
  ShoppingBagIcon, 
  VideoCameraIcon, 
  FlagIcon, 
  ChevronDownIcon 
} from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';
import Avatar from '../shared/Avatar';

const Sidebar = () => {
  const navigate = useNavigate();
  const { loading: userLoading, error: userError, data: userData } = useQuery(GET_USER, {
    variables: { userId: 1 },
  });

  const sidebarItems = [
    { icon: UserGroupIcon, label: 'Friends', color: 'text-blue-500' },
    { icon: FlagIcon, label: 'Pages', color: 'text-yellow-500' },
    { icon: VideoCameraIcon, label: 'Watch', color: 'text-red-500' },
    { icon: CalendarIcon, label: 'Events', color: 'text-purple-500' },
    { icon: ClockIcon, label: 'Memories', color: 'text-blue-400' },
    { icon: BookmarkIcon, label: 'Saved', color: 'text-pink-500' },
    { icon: StarIcon, label: 'Favorites', color: 'text-yellow-400' },
    { icon: ShoppingBagIcon, label: 'Marketplace', color: 'text-green-500' },
  ];

  if (userLoading) return <p>Loading...</p>;
  if (userError) return <p>Error :(</p>;

  const currentUser = userData.user;
  // const groups = groupsData.groups;

  return (
    <div className="hidden md:flex flex-col w-64 p-2 overflow-y-auto h-screen sticky top-16">
      {/* User profile */}
      <div 
        className="flex items-center p-2 hover:bg-facebook-200 rounded-lg cursor-pointer"
        onClick={() => navigate(`/profile/${currentUser.user_id}`)}
      >
        <Avatar 
          src={currentUser.profile_pic} 
          alt={currentUser.name} 
          size="sm"
          isOnline
          className="mr-3"
        />
        <span className="font-semibold">{currentUser.name}</span>
      </div>

      {/* Navigation items */}
      <div className="mt-2">
        {sidebarItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div 
              key={index} 
              className="flex items-center p-2 hover:bg-facebook-200 rounded-lg cursor-pointer"
            >
              <div className={`${item.color} w-8 h-8 flex items-center justify-center`}>
                <Icon className="h-5 w-5" />
              </div>
              <span className="ml-3">{item.label}</span>
            </div>
          );
        })}
      </div>

      {/* Show more */}
      <div className="mt-2">
        <div className="flex items-center p-2 hover:bg-facebook-200 rounded-lg cursor-pointer">
          <div className="w-8 h-8 flex items-center justify-center">
            <ChevronDownIcon className="h-5 w-5 text-facebook-500" />
          </div>
          <span className="ml-3">See More</span>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-facebook-200 my-2"></div>

      {/* Shortcuts */}
      <div className="px-2 py-1">
        <h3 className="text-facebook-500 font-semibold text-sm">Your Shortcuts</h3>
        <div className="mt-2">
          {/*{groups.map((group) => (*/}
          {/*  <div key={group.group_id} className="flex items-center p-2 hover:bg-facebook-200 rounded-lg cursor-pointer">*/}
          {/*    <div className="w-8 h-8 bg-facebook-200 rounded-md"></div>*/}
          {/*    <span className="ml-3">{group.name}</span>*/}
          {/*  </div>*/}
          {/*))}*/}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
