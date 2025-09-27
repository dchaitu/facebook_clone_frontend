import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <div className="min-h-screen bg-facebook-100">
      <Header />
      <div className="flex pt-16">
        <Sidebar />
        <main className="flex-1 p-4 md:p-6 max-w-2xl mx-auto">
          <Outlet />
        </main>
        {/* Right sidebar - Widgets */}
        <div className="hidden lg:block w-80 p-4">
          <div className="bg-white rounded-lg p-4 shadow">
            <h3 className="font-semibold text-lg mb-4">Sponsored</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-28 h-28 bg-facebook-200 rounded-md"></div>
                <div>
                  <h4 className="font-medium">Try the new React 19</h4>
                  <p className="text-facebook-500 text-sm">reactjs.org</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-28 h-28 bg-facebook-200 rounded-md"></div>
                <div>
                  <h4 className="font-medium">Build with Next.js</h4>
                  <p className="text-facebook-500 text-sm">nextjs.org</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold">Your Pages</h3>
                <button className="text-facebook-500 hover:underline text-sm">See all</button>
              </div>
              <div className="space-y-2">
                <div className="flex items-center p-2 hover:bg-facebook-100 rounded-lg cursor-pointer">
                  <div className="w-8 h-8 bg-facebook-200 rounded-full"></div>
                  <span className="ml-2">My Page</span>
                </div>
                <div className="flex items-center p-2 hover:bg-facebook-100 rounded-lg cursor-pointer">
                  <div className="w-8 h-8 bg-facebook-200 rounded-full"></div>
                  <span className="ml-2">Developer Community</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="font-semibold mb-2">Birthdays</h3>
              <div className="flex items-center">
                <span className="text-facebook-500 mr-2">🎂</span>
                <p className="text-sm">
                  <span className="font-semibold">Jane Smith</span> and <span className="font-semibold">2 others</span> have birthdays today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
