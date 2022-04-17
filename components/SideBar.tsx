import React, { useState } from 'react';
import { SubmitHandler, useForm } from "react-hook-form";

import getLocations from '@/api/locations';
import ArrivalIcon from '@/icons/ArrivalIcon';
import DepartureIcon from '@/icons/DepartureIcon';

import Button from './Button';
import DateTimeField from './DateTimeField';
import TextField from './TextField';

export type SearchInputs = {
  from: string;
  to: string;
  dateTime: string;
}


interface SideBarProps {
  className?: string;
  handleSearch: SubmitHandler<SearchInputs>;
}

const SideBar = ({ className = "", handleSearch }: SideBarProps) => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, setValue } = useForm<SearchInputs>();

  const search = async (data: SearchInputs) => {
    setLoading(true);
    await handleSearch(data);
    setLoading(false);
  }

  return (
    <nav className={`pt-12 px-6 bg-default ${className}`}>
      <form onSubmit={handleSubmit(search)}>
        <div className='flex flex-col gap-y-6 mb-8'>
          <TextField getSuggestions={getLocations} setValue={setValue} register={register} name="from" placeholder='Departure Station' Icon={DepartureIcon} />
          <TextField getSuggestions={getLocations} setValue={setValue} register={register} name="to" placeholder='Arrival Station' Icon={ArrivalIcon} />
          <DateTimeField register={register} name="dateTime" />
        </div>
        <Button loading={loading} type="submit">Search</Button>
      </form>
    </nav>
  );
}

export default SideBar;
