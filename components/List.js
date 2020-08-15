import useData from '../hooks/useData';

export default function List({ filter }) {
  const { data, isLoading, isError } = useData(filter);

  if (isLoading) {
    return (<p>loading...</p>);
  }

  if (isError) {
    return (<p>something went wrong</p>);
  }

  return (<pre>{JSON.stringify(data)}</pre>);
}
