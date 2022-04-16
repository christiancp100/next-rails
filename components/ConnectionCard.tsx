import moment from 'moment'
import React from 'react'

import { Connection } from '@/api/connections';

import Section from './Section';

interface ConnectionProps {
  connection: Connection;
  className: string;
}

const ConnectionCard: React.FC<ConnectionProps> = ({ connection, className }) => {
  const departureDate = moment(connection.from.departure).format("HH:mm");
  const arrivalDate = moment(connection.to.arrival).format("HH:mm");

  if (!connection) {
    return <></>;
  }

  return (
    <div className={`${className} flex flex-col w-full bg-default shadow-sm rounded-lg p-6`}>
      <div className="flex justify-between font-bold text-md">
        <span>{departureDate} &#8212; {arrivalDate}</span>
        <span>{connection.duration}</span>
      </div>
      <div className="relative mt-6">

        <ul className="space-y-2">
          {
            connection.sections && connection.sections.map(section => (
              <li key={section.arrival.arrival}>
                <Section section={section} />
              </li>
            ))
          }
        </ul>
      </div>
    </div >
  )
}

export default ConnectionCard;