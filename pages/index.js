import Head from 'next/head';
import Header from '../components/Header';
import Select from '../components/Select';
import DriversList from '../components/DriversList';
import Footer from '../components/Footer';
import { generateOptions } from '../utils/index';

import { Container, SelectWrapper } from './index.styles';

export default function Home() {
  const [filter, setFilter] = React.useState('');

  return (
    <>
      <Head>
        <title>F1 time machine</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@500;700&family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />

      <Container>
        <SelectWrapper>
          <Select label="Pick a season" name="season" options={generateOptions(1995, 2015)} onChange={e => setFilter(e)} />
          <p>
            Winner of the season:
            <span />
          </p>
        </SelectWrapper>
        <DriversList filter={filter} />
      </Container>

      <Footer />
    </>
  );
}
