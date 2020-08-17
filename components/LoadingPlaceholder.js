import Logo from './Logo';
import LoadingGrid from './LoadingPlaceholder.styles';

const averageRacesAmount = 20;

export default function LoadingPlaceholder() {
  return (
    <LoadingGrid>
      {Array(averageRacesAmount).fill().map(() => <span><Logo color="#b2b2b2" /></span>)}
    </LoadingGrid>
  );
}
