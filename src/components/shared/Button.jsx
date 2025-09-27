import React from 'react';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'left',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-facebook-blue';
  
  const variants = {
    primary: 'bg-facebook-blue text-white hover:bg-facebook-blue-hover',
    secondary: 'bg-facebook-200 text-facebook-800 hover:bg-facebook-300',
    outline: 'bg-transparent border border-facebook-200 hover:bg-facebook-100',
    ghost: 'bg-transparent hover:bg-facebook-100',
    danger: 'bg-red-500 text-white hover:bg-red-600',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  const iconClasses = `${iconSizes[size] || iconSizes['md']} ${children ? (iconPosition === 'left' ? 'mr-2' : 'ml-2') : ''}`;

  return (
    <button
      className={`${baseClasses} ${variants[variant] || variants['primary']} ${
        sizes[size] || sizes['md']
      } ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className={iconClasses} />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className={iconClasses} />}
    </button>
  );
};

export default Button;
