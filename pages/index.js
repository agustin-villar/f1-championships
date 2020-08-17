import Head from 'next/head';
import Header from '../components/Header';
import Select from '../components/Select';
import DriversList from '../components/DriversList';
import Footer from '../components/Footer';

import Container from './index.styles';

function generateOptions(firstYear, lastYear) {
  const options = [];
  for (let i = firstYear; i <= lastYear; i += 1) {
    options.push({ text: i.toString(), value: i });
  }
  return options;
}

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
        <Select
          label="Select a season:"
          name="season"
          options={generateOptions(2005, 2015)}
          onChange={e => setFilter(e)}
        />
        <DriversList filter={filter} />
      </Container>

      <Footer />
    </>
  );
}
