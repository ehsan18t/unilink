import { useState, useEffect } from 'react';

interface FetchOptions extends RequestInit {
  disableDefaults?: boolean;
}

function useFetch<T>(url: string, options: FetchOptions = {}): {
  data: T[];
  loading: boolean;
  error: Error | null;
} {
  const defaultOptions = {
    credentials: 'include', // Include cookies by default
  };

  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  async function fetchData() {
    try {
      const mergedOptions: any = options.disableDefaults ? options : { ...defaultOptions, ...options };
      const response = await fetch(url, mergedOptions);
      const responseData = await response.json();
      setData(responseData);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error };
}

export default useFetch;
