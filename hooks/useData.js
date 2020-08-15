import useSWR from 'swr';
import { mapDriversInfo } from '../utils/index';

const API_URL = 'http://ergast.com/api/f1/';

async function fetcher(season) {
  const racesResponse = await fetch(`${API_URL}${season}/results/1.json`);
  const racesData = await racesResponse.json();
  const driverStandingsResponse = await fetch(`${API_URL}${season}/driverStandings.json`);
  const driverStandingsData = await driverStandingsResponse.json();
  return mapDriversInfo(racesData, driverStandingsData);
}

export default function useData(season) {
  const { data, error } = useSWR(season, fetcher, { revalidateOnFocus: false, initialData: null });

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}
