import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Select from '../components/Select';
import DriversList from '../components/DriversList';

export default function Home() {
  const [filter, setFilter] = React.useState('');

  return (
    <>
      <Head>
        <title>F1 time machine</title>
      </Head>

      <ThemeProvider theme={{ color: 'purple' }}>
        <main>
          <h1>Hello world</h1>
          <Select
            label="Select a season:"
            options={[
              { text: '2005', value: 2005 },
              { text: '2006', value: 2006 },
              { text: '2007', value: 2007 },
              { text: '2008', value: 2008 },
              { text: '2009', value: 2009 },
              { text: '2010', value: 2010 },
              { text: '2011', value: 2011 },
              { text: '2012', value: 2012 },
              { text: '2013', value: 2013 },
              { text: '2014', value: 2014 },
              { text: '2015', value: 2015 },
            ]}
            onChange={e => setFilter(e)}
          />
          <DriversList filter={filter} />
        </main>

        <footer>
          lol
        </footer>
      </ThemeProvider>
    </>
  );
}
