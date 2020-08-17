import Head from 'next/head';
import Header from '../components/Header';
import Select from '../components/Select';
import DriversList from '../components/DriversList';
import Footer from '../components/Footer';
import { generateYearsOptions } from '../utils/index';

import { Container, SelectWrapper } from '../styles/index.styles';

export default function Home() {
  const [filter, setFilter] = React.useState('');

  return (
    <>
      <Head>
        <title>F1 time machine</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#333333" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@500;700&family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />

      <Container>
        <SelectWrapper>
          <Select label="Pick a season" name="season" options={generateYearsOptions(1995, 2015)} onChange={e => setFilter(e)} />
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
