import useSWR from 'swr';

async function fetcher(season) {
  const racesResponse = await fetch(`http://ergast.com/api/f1/${season}/results/1.json`);
  const racesData = await racesResponse.json();
  const driverStandingsResponse = await fetch(`http://ergast.com/api/f1/${season}/driverStandings.json`);
  const driverStandingsData = await driverStandingsResponse.json();

  return { ...driverStandingsData, ...racesData };
}

export default function useUser(season) {
  const { data, error } = useSWR(season, fetcher);
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}
