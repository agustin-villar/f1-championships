import useSWR from 'swr';
import { getWikipediaPageName } from '../utils/index';

const fetcher = (...args) => fetch(...args).then(res => res.json());
const WIKIPEDIA_API_URL = 'https://en.wikipedia.org/api/rest_v1/page/media-list/';

export default function useWikiImage(url) {
  const { data, error } = useSWR(
    `${WIKIPEDIA_API_URL}${getWikipediaPageName(url)}`,
    fetcher,
    { revalidateOnFocus: false, initialData: null },
  );

  return {
    imgData: data,
    error,
  };
}
