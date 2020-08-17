function mapDriversInfo(races, driverStandings) {
  const { MRData: { RaceTable: { Races } } } = races;
  const { MRData: { StandingsTable: { StandingsLists: [finalStanding] } } } = driverStandings;
  const { DriverStandings: [firstPlace] } = finalStanding;
  const { Driver: { driverId: seasonWinnerId } } = firstPlace;

  const driversSum = Races.reduce((
    acc, { round, Circuit: { circuitName, Location: { locality, country } }, Results },
  ) => {
    const raceWinner = Results[0].Driver;
    const constructorWinner = Results[0].Constructor;
    const raceData = {
      circuit: { name: circuitName, locality, country, round },
      driver: {
        ...raceWinner,
        seasonWinner: raceWinner.driverId === seasonWinnerId,
        constructor: constructorWinner.name,
      },
    };

    return [...acc, raceData];
  }, []);

  return driversSum;
}

function getWikipediaPageName(url) {
  const pattern = 'wiki/';
  return url.substr(url.indexOf(pattern) + pattern.length);
}

function generateOptions(firstYear, lastYear) {
  const options = [];
  for (let i = firstYear; i <= lastYear; i += 1) {
    options.push({ text: i.toString(), value: i });
  }
  return options;
}

export { mapDriversInfo, getWikipediaPageName, generateOptions };
