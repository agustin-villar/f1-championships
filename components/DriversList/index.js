import useSeasonData from '../../hooks/useSeasonData';
import DriverCard from '../DriverCard';

import { List, Paragraph } from './styles';
import LoadingPlaceholder from '../LoadingPlaceholder';

export default function DriversList({ filter }) {
  const { data, state, error } = useSeasonData(filter);

  if (state === 'idle') {
    return (
      <Paragraph>
        Select a season to see the winners of every race during that year.
      </Paragraph>
    );
  }

  if (state === 'pending') {
    return (<LoadingPlaceholder />);
  }

  if (state === 'resolved') {
    return data.length ? (
      <List>
        {data.map(race => (
          <li key={race.circuit.name}>
            <DriverCard data={race} />
          </li>
        ))}
      </List>
    ) : (
      <Paragraph>
        The selected season has no information available, please try a different one.
      </Paragraph>
    );
  }

  if (state === 'rejected') {
    return (
      <Paragraph>
        Something went wrong:
        <br />
        {error.message}
        <br />
        Please try again later.
      </Paragraph>
    );
  }
}
