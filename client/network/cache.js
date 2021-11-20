import { useEffect, useState, useCallback } from 'react';
import request from './client.js';

function useRemoteData(query) {
  const [cache, setCache] = useState(undefined);

  const refetch = useCallback(() => {
    setCache(undefined);
  }, []);

  useEffect(() => {
    let isMounted = true;
    const getRemoteData = async () => {
      if (!cache) {
        const result = await request(query);
        if (isMounted) {
          setCache(result);
        }
      }
    };
    getRemoteData();

    return () => {
      isMounted = false;
    };
  }, [cache, query]);

  const { data, error } = cache || { data: null, error: null };
  return { data, error, refetch };
}

export default useRemoteData;
