import Logo from '../Logo';
import LoadingGrid from './styles';

const averageRacesAmount = 20;

export default function LoadingPlaceholder() {
  return (
    <LoadingGrid>
      {Array(averageRacesAmount).fill().map(
        (item, index) => <span key={`span-${index.toString()}`}><Logo color="#b2b2b2" /></span>,
      )}
    </LoadingGrid>
  );
}
