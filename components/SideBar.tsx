import * as React from 'react';
import { SubmitHandler, useForm } from "react-hook-form";

import DepartureIcon from '@/components/icons/DepartureIcon';

import ArrivalIcon from './icons/ArrivalIcon';
import CalendarIcon from './icons/CalendarIcon';
import Input from './Input';

interface SearchInputs {

}

interface SideBarProps {
  className?: string;
}

const SideBar = ({ className = "" }: SideBarProps) => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm<SearchInputs>();

  return (
    <nav className={`pt-12 px-6 bg-default h-full ${className}`}>
      <div className='flex flex-col gap-y-6 mb-8'>
        <Input placeholder='Departure Station' Icon={DepartureIcon} />
        <Input placeholder='Arrival Station' Icon={ArrivalIcon} />
        <Input placeholder='Departure Date' type={"datetime-local"} />
      </div>
      <button className='px-6 py-2 bg-primary text-default shadow-md rounded-md w-full hover:shadow-lg transition-shadow duration-100  hover:bg-primaryDark active:shadow-xlb'>Search</button>
    </nav>
  );
}

export default SideBar;
