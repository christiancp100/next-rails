import _ from 'lodash';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { UseFormRegister, UseFormSetValue } from "react-hook-form";

import { Station } from '@/api/connections';

import { SearchInputs } from './SideBar';


interface TextFieldProps {
  Icon?: React.FC;
  name: string;
  errors?: object;
  required?: boolean;
  placeholder: string;
  defaultValue?: string;
  autoComplete?: string;
  register: UseFormRegister<SearchInputs>;
  setValue?: UseFormSetValue<SearchInputs>;
  getSuggestions?: (e: string) => Promise<Station[]>;
}

const TextField = (props: TextFieldProps) => {
  const [suggestions, setSuggestions] = useState<Station[]>();
  const {
    autoComplete = "off",
    getSuggestions,
    required = true,
    placeholder,
    register,
    setValue,
    Icon,
    name,
    defaultValue
  } = props;

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  const handleGetSuggestions = useCallback(async (e: any) => {
    const searchValue = e.target.value;
    if (!getSuggestions) {
      return [];
    }
    setSuggestions(await getSuggestions(searchValue))
  }, [getSuggestions]);

  const debouncedResults = useMemo(() => {
    return _.debounce(handleGetSuggestions, 800);
  }, [handleGetSuggestions]);


  const handleSelectionClick = (name: string, suggestion: Station) => {
    setValue && setValue(name as any, suggestion)
    setSuggestions([])
  }


  return (
    <div className='relative'>
      <div className="relative">
        {Icon && (
          <span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3">
            <span>
              <Icon />
            </span>
          </span>
        )}
        <input
          type="text"
          autoComplete={autoComplete}
          defaultValue={defaultValue}
          placeholder={placeholder}
          {...register(
            name as any,
            {
              required,
              onChange: debouncedResults
            }
          )}
          className="w-full py-3 text-sm bg-secondary rounded-md pl-10 focus:outline-none border-transparent focus:border-transparent focus:ring-0 focus:shadow-lg transition-shadow duration-100" />
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


export default TextField;
