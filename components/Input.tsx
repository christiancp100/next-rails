import * as React from 'react';

interface InputProps {
  type?: React.HTMLInputTypeAttribute;
  Icon?: React.FC;
  placeholder: string;
}

const Input = ({ type = "text", Icon, ...rest }: InputProps) => {
  return (
    <div className="relative">
      {Icon && (
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <span className="p-1">
            <Icon />
          </span>
        </span>
      )}
      <input type={type} {...rest} className="w-full py-3 text-sm bg-secondary border-none rounded-md pl-10 focus:outline-none border-transparent focus:border-transparent focus:ring-0 focus:shadow-lg transition-shadow duration-100" />
    </div>
  );
}

export default Input;
