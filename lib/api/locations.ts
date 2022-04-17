import axios from 'axios'
import { API_URI } from 'lib/consts';

import { Station } from './connections';

const getLocations = async (stationName: string) => {
  try {
    const response = await axios.get(API_URI + "/locations", { params: { query: stationName, type: "station" } })
    return response.data?.stations.map((station: Station) => station.name);
  }
  catch (err) {
    return []
  }
}

export default getLocations;