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
