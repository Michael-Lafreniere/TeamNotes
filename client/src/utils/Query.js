import { useEffect, useState } from 'react';

export default function Query(url) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetch(url)
        .then(response => response.json())
        .catch(error => setError(error));
      setData(data);
      setLoading(false);
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}
