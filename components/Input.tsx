import * as _ from 'lodash'
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { UseFormRegister, UseFormSetValue } from "react-hook-form";

import { Station } from '@/api/connections';
import getLocations from '@/api/locations';

import { SearchInputs } from './SideBar';

interface InputProps {
  type?: React.HTMLInputTypeAttribute;
  Icon?: React.FC;
  name: string;
  errors?: object;
  required?: boolean;
  placeholder: string;
  defaultValue?: string;
  autoComplete?: string;
  register: UseFormRegister<SearchInputs>;
  setValue?: UseFormSetValue<SearchInputs>;
  getSuggestions?: (e: string) => Station[];
}

const Input = (props: InputProps) => {
  const [suggestions, setSuggestions] = useState<Station[]>();
  const { autoComplete = "off", getSuggestions = getLocations, register, setValue, Icon, required, name, type, defaultValue, ...rest } = props;

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  const handleGetSuggestions = useCallback(async (e: any) => {
    const searchValue = e.target?.value;
    setSuggestions(await getSuggestions(searchValue))
  }, [getSuggestions]);

  const debouncedResults = useMemo(() => {
    return _.debounce(handleGetSuggestions, 800);
  }, [handleGetSuggestions]);


  const handleSelectionClick = (name: string, suggestion: string) => {
    setValue && setValue(name, suggestion)
    setSuggestions([])
  }


  return (
    <div className='relative'>
      <div className="relative">
        {Icon && (
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <span className="p-1">
              <Icon />
            </span>
          </span>
        )}
        <input
          autoComplete={autoComplete}
          defaultValue={defaultValue}
          type={type}
          {...rest}
          {...register(
            name,
            {
              required: true,
              onChange: debouncedResults
            }
          )}
          className={`w-full py-3 text-sm bg-secondary rounded-md ${suggestions ? "rounded-b-none" : ""} pl-10 focus:outline-none border-transparent focus:border-transparent focus:ring-0 focus:shadow-lg transition-shadow duration-100`} />
      </div>
      <div className="absolute left-0 right-0 flex flex-col bg-secondary rounded-b-md z-50 max-h-40 overflow-auto">
        {
          suggestions && suggestions.map((suggestion => (
            <span
              onClick={() => handleSelectionClick(name, suggestion)}
              className='px-4 py-1 rounded-md hover:bg-primary hover:text-default hover:cursor-pointer'
              key={suggestion}>{suggestion}</span>
          )))
        }
      </div>
    </div>
  )
}

Input.displayName = "Input";

export default Input;
