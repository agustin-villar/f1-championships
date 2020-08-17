import useSWR from 'swr';
import { getWikipediaPageName } from '../utils/index';

const WIKIPEDIA_API_URL = 'https://en.wikipedia.org/api/rest_v1/page/media-list/';
const fetcher = (...args) => fetch(...args).then(res => res.json());

/**
* Custom hook that retrieves a list of media assets using the wikipedia API,
* based on a wikipedia page url, see docs at:
* https://en.wikipedia.org/api/rest_v1/#/Page%20content/getContent-media-list
* The hook uses as well the SWR library for data fetching: https://swr.vercel.app/
* @param {string} url - A valid wikipedia's page url
* @returns {Object} An object including the media list asset or an error given the case
*/
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
