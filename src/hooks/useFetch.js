import axios from "axios";
import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    const controller = new AbortController();

    axios
      .get(`https://reqres.in/api${url}`, {
        signal: controller.signal,
      })
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });

    return () => {
        controller.abort();
    };
  }, [url]);

  return { data, isLoading, error };
}
