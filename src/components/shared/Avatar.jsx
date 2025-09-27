import React from 'react';

const Avatar = ({ src, alt = 'Profile', size = 'md', isOnline = false, className = '' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  };

  return (
    <div className={`relative inline-block ${className}`}>
      <img
        src={src || 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'}
        alt={alt}
        className={`${sizeClasses[size] || sizeClasses['md']} rounded-full object-cover border-2 border-white`}
      />
      {isOnline && (
        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
      )}
    </div>
  );
};

export default Avatar;
