import axios from 'axios'
import { API_URI } from 'lib/consts';
import moment from 'moment'

interface Coordinates {
  x: string;
  y: string;
}

export type Station = string;


interface Location {
  distance: string;
  name: string;
  coordinate: Coordinates;
}

interface Section {
  location: Location;
  platform: string;
  station: Station;
}

interface Arrival extends Section {
  arrival: string;
}

interface Departure extends Section {
  departure: string;
}

interface Journey {
  operator: string;
}

export interface ConnectionSection {
  arrival: Arrival;
  departure: Departure;
  journey: Journey;
}

export interface Connection {
  sections: ConnectionSection[]
  duration: string;
  from: Departure;
  to: Arrival;
}

export type ConnectionInput = {
  from: string;
  to: string;
  dateTime: string;
}

const getConnections = async (connectionInput: ConnectionInput) => {
  const { from, to } = connectionInput;
  const dateTime = moment(connectionInput.dateTime)
  const date = dateTime.format("YYYY-MM-DD");
  const time = dateTime.format("HH:mm");
  try {
    const response = await axios.get(API_URI + "/connections", { params: { from, to, date, time } })
    return response.data?.connections;
  }
  catch (err) {
    return [];
  }

}

export default getConnections;