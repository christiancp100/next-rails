import axios from 'axios'
import { API_URI } from 'lib/consts';

import { Station } from './connections';

const getLocations = async (stationName: string) => {

  const response = await axios.get(API_URI + "/locations", { params: { query: stationName, type: "station" } })
  return response.data?.stations.map((station: Station) => station.name);
}

export default getLocations;