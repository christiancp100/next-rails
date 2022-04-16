import React from 'react'

import Loading from './icons/Loading';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  loading?: boolean;
}

const Button = ({ loading = false, children, className = "" }: ButtonProps & React.HTMLProps<HTMLButtonElement>) => (
  <button className={`flex justify-center items-center px-6 py-2 bg-primary text-default shadow-md rounded-md w-full hover:shadow-lg transition-shadow duration-100  hover:bg-primaryDark active:shadow-xl ${className}`}>
    {loading && <Loading />}
    {children}
  </button>
);

export default Button;