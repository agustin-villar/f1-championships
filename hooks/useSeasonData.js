import useSWR from 'swr';
import { mapDriversInfo } from '../utils/index';

const API_URL = 'https://ergast.com/api/f1/';

async function fetcher(season) {
  const racesResponse = await fetch(`${API_URL}${season}/results/1.json`);
  const racesData = await racesResponse.json();
  const driverStandingsResponse = await fetch(`${API_URL}${season}/driverStandings.json`);
  const driverStandingsData = await driverStandingsResponse.json();
  return mapDriversInfo(racesData, driverStandingsData);
}

/**
* Custom hook that retrieves results information for a f1 seasond,
* and driver standings for the same season, once the requests are done,
* the information will be cleaned up and merged for ease of use
* See docs at: http://ergast.com/mrd/methods/results/ and
* http://ergast.com/mrd/methods/standings/
* The hook uses the SWR library for data fetching: https://swr.vercel.app/
* @param {Number} season - The season from which the data will be retrieved.
* @returns {Object} An object including the requested data or and error given the case,
* it will also return the actual state of the request.
*/
export default function useSeasonData(season) {
  const { data, error } = useSWR(season, fetcher, { revalidateOnFocus: false, initialData: null });
  let state = '';

  if (!data && !error) {
    state = 'pending';
  }

  if (data) {
    state = 'resolved';
  }

  if (error) {
    state = 'rejected';
  }

  if (!season) {
    state = 'idle';
  }

  return {
    data,
    state,
    error,
  };
}
