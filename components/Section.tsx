import moment from 'moment'
import React from 'react'

import { ConnectionSection } from '@/api/connections'

interface SectionProps {
  section: ConnectionSection;
}

const Section: React.FC<SectionProps> = ({ section }) => {
  const departureTime = moment(section.departure.departure).format("HH:mm")
  const arrivalTime = moment(section.arrival.arrival).format("HH:mm")
  return (
    <div className='w-full'>
      <div className='flex'>
        <span className="w-4 h-4 pr-4 bg-primary rounded-full self-start items-start" />
        <div className="flex justify-between ml-4 font-bold w-full">
          <span>{section.departure.station.name}</span>
          <span>{departureTime}</span>
        </div>
      </div>
      <div className="ml-1 flex flex-col gap-y-2 my-2">
        <span className='h-2 w-2 rounded-full bg-secondary'></span>
        <span className='h-2 w-2 rounded-full bg-secondary'></span>
        <span className='h-2 w-2 rounded-full bg-secondary'></span>
      </div>
      <div className='flex items-center'>
        <span className="self-center relative w-4 h-4 pr-4 bg-primary rounded-full items-start">
          <span className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-secondary'></span>
        </span>
        <div className="ml-4 flex justify-between font-bold w-full">
          <span>{section.arrival.station.name}</span>
          <span>{arrivalTime}</span>
        </div>
      </div>
    </div>
  )
}

export default Section