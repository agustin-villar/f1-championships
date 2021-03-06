import Head from 'next/head';
import Header from '../components/Header';
import Select from '../components/Select';
import DriversList from '../components/DriversList';
import Footer from '../components/Footer';
import { generateYearsOptions } from '../utils/index';

import Container from '../styles/index.styles';

export default function Home() {
  const [filter, setFilter] = React.useState('');

  return (
    <>
      <Head>
        <title>F1 Championships 2005-2015</title>
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
        {/**
         * To navigate between seasons a select element was chosen over a list, among other reasons because it offers 
         * a more friendly layout specially on mobile devices, it doesn't occupy lots of space in the interface, 
         * and more items (seasons) can be potentially added in an easy manner without impacting the user experience.
         * The component is based on a native HTML select which makes it highly accesible as well.
         */}
        <Select label="Pick a season" name="season" options={generateYearsOptions(2005, 2015)} onChange={e => setFilter(e)} />
        <DriversList filter={filter} />
      </Container>

      <Footer />
    </>
  );
}
