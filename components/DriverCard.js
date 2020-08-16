import useSWR from 'swr';

import { Wrapper, Footer } from './DriverCard.styles';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function Card({ data }) {
  const { circuit, driver } = data;
  const wikiPage = driver.url.substr(driver.url.indexOf('wiki/') + 5);
  console.log('wikiPage: ', wikiPage);
  const { data: imgData, error } = useSWR(
    `https://en.wikipedia.org/api/rest_v1/page/media-list/${wikiPage}`,
    fetcher,
    { revalidateOnFocus: false, initialData: null },
  );

  return (
    <Wrapper img={imgData ? imgData.items[0].srcset[0].src : ''}>
      <div>
        <h2>{`${driver.givenName} ${driver.familyName}`}</h2>
        <p>{`Driving for: ${driver.constructor}.`}</p>
        <p>{`${driver.nationality}.`}</p>
      </div>
      <Footer>
        <span>Race</span>
        <p>{`${circuit.name}.`}</p>
        <p>{`${circuit.locality}, ${circuit.country}.`}</p>
      </Footer>
    </Wrapper>
  );
}
