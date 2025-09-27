import React from 'react';
import { MagnifyingGlassIcon, HomeIcon, FlagIcon, PlayCircleIcon, ShoppingCartIcon, UserGroupIcon, BellIcon, ChatBubbleLeftRightIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';
import Avatar from '../shared/Avatar';

const Header = () => {
  const navigate = useNavigate();
  const currentUser = { id: 1, name: 'John Doe', profilePic: 'https://randomuser.me/api/portraits/men/1.jpg' };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-header flex items-center p-2 lg:px-5">
      {/* Left section - Logo and search */}
      <div className="flex items-center">
        <div 
          className="text-facebook-blue text-3xl font-bold cursor-pointer mr-2"
          onClick={() => navigate('/')}
        >
          facebook
        </div>
        <div className="hidden md:flex items-center bg-facebook-100 rounded-full p-2 ml-2">
          <MagnifyingGlassIcon className="h-5 text-facebook-500" />
          <input
            type="text"
            placeholder="Search Facebook"
            className="bg-transparent border-none outline-none ml-2 placeholder-facebook-500 text-sm w-40 lg:w-64"
          />
        </div>
      </div>

      {/* Center section - Navigation */}
      <div className="flex flex-1 justify-center mx-2">
        <div className="flex space-x-1 md:space-x-2">
          <div className="flex items-center px-4 md:px-10 h-12 rounded-md hover:bg-facebook-100 cursor-pointer">
            <HomeIcon className="h-7 text-facebook-blue" />
          </div>
          <div className="flex items-center px-4 md:px-10 h-12 rounded-md hover:bg-facebook-100 cursor-pointer">
            <FlagIcon className="h-7 text-facebook-500" />
          </div>
          <div className="flex items-center px-4 md:px-10 h-12 rounded-md hover:bg-facebook-100 cursor-pointer">
            <PlayCircleIcon className="h-7 text-facebook-500" />
          </div>
          <div className="flex items-center px-4 md:px-10 h-12 rounded-md hover:bg-facebook-100 cursor-pointer">
            <ShoppingCartIcon className="h-7 text-facebook-500" />
          </div>
          <div className="flex items-center px-4 md:px-10 h-12 rounded-md hover:bg-facebook-100 cursor-pointer">
            <UserGroupIcon className="h-7 text-facebook-500" />
          </div>
        </div>
      </div>

      {/* Right section - User menu */}
      <div className="flex items-center sm:space-x-2">
        <div className="flex items-center">
          <div className="hidden md:flex items-center space-x-1">
            <Avatar 
              src={currentUser.profilePic} 
              alt={currentUser.name} 
              size="sm" 
              className="cursor-pointer hover:opacity-80"
            />
            <span className="font-semibold text-sm whitespace-nowrap pr-2">
              {currentUser.name.split(' ')[0]}
            </span>
          </div>
          
          <div className="flex items-center space-x-1">
            <button className="p-2 rounded-full bg-facebook-200 hover:bg-facebook-300">
              <BellIcon className="h-6 text-facebook-800" />
            </button>
            <button className="p-2 rounded-full bg-facebook-200 hover:bg-facebook-300">
              <ChatBubbleLeftRightIcon className="h-6 text-facebook-800" />
            </button>
            <button className="p-2 rounded-full bg-facebook-200 hover:bg-facebook-300">
              <ChevronDownIcon className="h-6 text-facebook-800" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
