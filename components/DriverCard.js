import useWikiImage from '../hooks/useWikiImage';
import { Wrapper, Footer } from './DriverCard.styles';

export default function Card({ data }) {
  const { circuit, driver } = data;
  const { imgData } = useWikiImage(driver.url);

  return (
    <Wrapper img={imgData?.items[0]?.srcset[0]?.src || ''} winner={driver.seasonWinner}>
      <div>
        <h2>{`${driver.givenName} ${driver.familyName}`}</h2>
        <p>{`Driving for ${driver.constructor}.`}</p>
        <p>{`${driver.nationality}.`}</p>
      </div>
      <Footer>
        <span>{`${circuit.round}. Race`}</span>
        <p>{`${circuit.name}.`}</p>
        <p>{`${circuit.locality}, ${circuit.country}.`}</p>
      </Footer>
    </Wrapper>
  );
}
