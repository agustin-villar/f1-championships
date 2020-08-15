import useSWR from 'swr';

async function fetcher(season) {
  const racesResponse = await fetch(`http://ergast.com/api/f1/${season}/results/1.json`);
  const { MRData: { RaceTable: { Races } } } = await racesResponse.json();
  const driverStandingsResponse = await fetch(`http://ergast.com/api/f1/${season}/driverStandings.json`);
  const { MRData: { StandingsTable: { StandingsLists: [lastStanding] } } } = await driverStandingsResponse.json();
  const { DriverStandings: [firstPlace] } = lastStanding;

  return { races: Races, driver: firstPlace.Driver };
}

export default function useData(season) {
  const { data, error } = useSWR(season, fetcher, { revalidateOnFocus: false, initialData: null });

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}
