import useSeasonData from '../hooks/useSeasonData';
import DriverCard from './DriverCard';

export default function List({ filter }) {
  const { data, state, error } = useSeasonData(filter);

  if (state === 'idle') {
    return (<p>Select something for God&apos;s sake</p>);
  }

  if (state === 'pending') {
    return (<p>loading...</p>);
  }

  if (state === 'resolved') {
    console.log(data);
    return (
      <ul>
        {data.map(race => (
          <li key={race.circuit.name}>
            <DriverCard data={race} />
          </li>
        ))}
      </ul>
    );
  }

  if (state === 'rejected') {
    return (
      <p>
        something went wrong:
        {error.message}
      </p>
    );
  }
}
