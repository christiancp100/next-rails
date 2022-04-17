import _ from 'lodash';
import React from 'react';
import { UseFormRegister, UseFormSetValue } from "react-hook-form";

import { Station } from '@/api/connections';

import { SearchInputs } from './SideBar';


interface DateTimeProps {
  name: string;
  errors?: object;
  required?: boolean;
  defaultValue?: string;
  autoComplete?: string;
  register: UseFormRegister<SearchInputs>;
  setValue?: UseFormSetValue<SearchInputs>;
  getSuggestions?: (e: string) => Station[];
}

const DateTimeField = (props: DateTimeProps) => {
  const {
    register,
    required,
    name,
    defaultValue,
  } = props;

  return (
    <div className='relative'>
      <div className="relative">
        <input
          defaultValue={defaultValue}
          type="datetime-local"
          {...register(
            name as any,
            {
              required,
            }
          )}
          className={`w-full py-3 text-sm bg-secondary rounded-md pl-10 focus:outline-none border-transparent focus:border-transparent focus:ring-0 focus:shadow-lg transition-shadow duration-100`} />
      </div>
    </div>
  )
}


export default DateTimeField;
