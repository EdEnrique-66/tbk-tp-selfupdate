// src/hooks/useApiData.js
import { useState, useEffect } from 'react';

const useApiData = (apiCall, dependency) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (dependency) {
      setLoading(true);
      setError(null);
      apiCall(dependency)
        .then(responseData => {
          setData(responseData);
        })
        .catch(err => {
          setError(err.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [apiCall, dependency]);

  return { data, loading, error };
};

export default useApiData;