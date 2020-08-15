import Head from 'next/head';
import useData from '../hooks/useData';

export default function Home() {
  const { data, isLoading, isError } = useData(2005);

  if (isError) {
    return (<div>failed to load</div>);
  }

  if (isLoading) {
    return (<div>loading...</div>);
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Hello world</h1>
        <pre>{JSON.stringify(data)}</pre>
      </main>

      <footer>
        lol
      </footer>
    </div>
  );
}
