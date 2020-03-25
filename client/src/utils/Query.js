import { useEffect, useState } from 'react';

const host = 'http://localhost:5000';

export default function Query(url) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
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

export function QueryData(path, id) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`${host}/${path}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ value: id })
      })
        .then(res => res.json())
        .catch(error => setError(error));
      setData(data);
      setLoading(false);
    };
    fetchData();
  }, [path, id]);

  return { data, loading, error };
}
