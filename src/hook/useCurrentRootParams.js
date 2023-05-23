import { useLocation } from 'react-router-dom';
import qs from 'qs';

export const useCurrentRootParams = () => {
  const { search, pathname } = useLocation();
  return {
    search: qs.parse(search, { ignoreQueryPrefix: true }),
    pathname,
  };
};
