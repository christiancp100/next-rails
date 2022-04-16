import React, { useState } from 'react';
import { SubmitHandler, useForm } from "react-hook-form";

import DepartureIcon from '@/icons/DepartureIcon';

import Button from './Button';
import ArrivalIcon from './icons/ArrivalIcon';
import Input from './Input';

export interface SearchInputs {
  from: string;
  to: string;
  date: string;
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
          <Input setValue={setValue} register={register} name="from" placeholder='Departure Station' Icon={DepartureIcon} />
          <Input setValue={setValue} register={register} name="to" placeholder='Arrival Station' Icon={ArrivalIcon} />
          <Input register={register} name="date" placeholder='Departure Date' type={"datetime-local"} />
        </div>
        <Button loading={loading} type="submit">Search</Button>
      </form>
    </nav>
  );
}

export default SideBar;
