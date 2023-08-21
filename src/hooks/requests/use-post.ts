import { useState } from 'react';

interface PostOptions {
  url: string;
  payload: any;
}

function usePost() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [success, setSuccess] = useState<boolean | null>(null);

  async function performPostRequest({ url, payload }: PostOptions) {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Include cookies
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Failed to perform POST request to ${url}`);
      }

      const responseData = await response.json();
      setSuccess(true); // Set success flag
      return responseData;
    } catch (error) {
      setError(error instanceof Error ? error : new Error('An error occurred.'));
    } finally {
      setLoading(false);
    }
  }

  return { loading, error, success, performPostRequest };
}

export default usePost;
