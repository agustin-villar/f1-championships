function mapDriversInfo(races, driverStandings) {
  const { MRData: { RaceTable: { Races } } } = races;
  const { MRData: { StandingsTable: { StandingsLists: [finalStanding] } } } = driverStandings;
  const { DriverStandings: [firstPlace] } = finalStanding;
  const { Driver: { driverId: seasonWinnerId } } = firstPlace;

  const driversSum = Races.reduce((acc, { Circuit: { circuitName, Location: { locality, country } }, Results }) => {
    const raceWinner = Results[0].Driver;
    const raceData = {
      circuit: { name: circuitName, locality, country },
      driver: { ...raceWinner, seasonWinner: raceWinner.driverId === seasonWinnerId },
    };

    return [...acc, raceData];
  }, []);

  return driversSum;
}

export { mapDriversInfo };
