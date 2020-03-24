import { useEffect, useState } from 'react';

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

export function QueryComments(noteID) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('http://localhost:5000/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ noteID: noteID })
      })
        .then(res => res.json())
        .catch(error => setError(error));
      setData(data);
      setLoading(false);
    };
    fetchData();
  }, [noteID]);

  return { data, loading, error };
}
