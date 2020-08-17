import useSeasonData from '../hooks/useSeasonData';
import DriverCard from './DriverCard';

import List from './DriversList.styles';
import LoadingPlaceholder from './LoadingPlaceholder';

export default function DriversList({ filter }) {
  const { data, state, error } = useSeasonData(filter);

  if (state === 'idle') {
    return (<p>Select something for God&apos;s sake</p>);
  }

  if (state === 'pending') {
    return (<LoadingPlaceholder />);
  }

  if (state === 'resolved') {
    return (
      <List>
        {data.map(race => (
          <li key={race.circuit.name}>
            <DriverCard data={race} />
          </li>
        ))}
      </List>
    );
  }

  if (state === 'rejected') {
    return (
      <p>
        Something went wrong:
        {error.message}
      </p>
    );
  }
}
