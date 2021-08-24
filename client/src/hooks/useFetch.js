import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useFetch(url) {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    axios.get(url).then(fetchedResponse => setResponse(fetchedResponse));
  }, []);

  return response;
}