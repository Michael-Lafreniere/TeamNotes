import { useEffect, useState } from 'react';

export default function Query(url, method = 'GET', body = null) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      console.log('.');
      const data = await fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: body
      })
        .then(response => response.json())
        .catch(error => setError(error));
      setData(data);
      setLoading(false);
    };

    fetchData();
  }, [url, method]);

  return { data, loading, error };
}

// method: 'POST',
// headers: {
//  'Content-Type': 'application/json'
// },
// body: JSON.stringify({ location, end })
