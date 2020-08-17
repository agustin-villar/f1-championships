/**
* Will return data for races and driver standings in a cleaner format,
* so it's easier to consume it by the application
* See API docs: http://ergast.com/mrd/methods/results/
* @param {Object} races - Races data for a specific f1 season
* See API docs: http://ergast.com/mrd/methods/standings/
* @param {Object} driverStandings - Drivers positions for a specific f1 season
* @returns {Object[]} The joined data for racers and drivers positions for a specific f1 season
*/
function mapDriversInfo(races, driverStandings) {
  const { MRData: { RaceTable: { Races } } } = races;
  const { MRData: { StandingsTable: { StandingsLists } } } = driverStandings;

  let driversSum = [];

  if (Races) {
    const seasonWinnerId = StandingsLists[0]?.DriverStandings?.[0]?.Driver?.driverId;

    driversSum = Races.reduce((
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
  }

  return driversSum;
}

/**
* Will return the page name of a wikipedia page base on it's url
* @param {string} url - Url address of a wikipedia webpage
* @returns {string} The wikipedia page name
*/
function getWikipediaPageName(url) {
  const pattern = 'wiki/';
  const patternIndex = url.indexOf(pattern);
  return patternIndex > -1 ? url.substr(patternIndex + pattern.length) : '';
}

/**
* Returns an array of objects to be used as options for the 'Select' component
* corresponding to seasons in a determined period of time.
* @param {Number} firstYear - First year of the time lapse
* @param {Number} lastYear - Last year of the time lapse
* @returns {Object[]} Array of objects with text and value properties
*/
function generateYearsOptions(firstYear, lastYear) {
  const options = [];
  if (firstYear > lastYear) {
    throw new Error('First year is bigger than last year');
  }

  for (let i = firstYear; i <= lastYear; i += 1) {
    options.push({ text: i.toString(), value: i });
  }
  return options;
}

export { mapDriversInfo, getWikipediaPageName, generateYearsOptions };
