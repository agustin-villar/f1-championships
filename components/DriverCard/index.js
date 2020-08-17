import PropTypes from 'prop-types';

import useWikiImage from '../../hooks/useWikiImage';
import { Wrapper, Footer } from './styles';

export default function Card({ data }) {
  const { circuit, driver } = data;
  const { imgData } = useWikiImage(driver.url);

  return (
    <Wrapper img={imgData?.items[0]?.srcset[0]?.src || '/img/default-driver.svg'} winner={driver.seasonWinner}>
      <div>
        <h2>{`${driver.givenName} ${driver.familyName}`}</h2>
        <p>{`Driving for ${driver.constructor}.`}</p>
        <p>{`${driver.nationality}.`}</p>
      </div>
      <Footer>
        <span>
          1
          <sup>st</sup>
          {' '}
          Place at
        </span>
        <p>{`${circuit.name}.`}</p>
        <p>{`${circuit.locality}, ${circuit.country}.`}</p>
      </Footer>
    </Wrapper>
  );
}

Card.propTypes = {
  data: PropTypes.shape({
    circuit: PropTypes.shape({
      round: PropTypes.string,
      name: PropTypes.string,
      locality: PropTypes.string,
      country: PropTypes.string,
    }).isRequired,
    driver: PropTypes.shape({
      givenName: PropTypes.string,
      familyName: PropTypes.string,
      seasonWinner: PropTypes.bool,
      nationality: PropTypes.string,
      url: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
