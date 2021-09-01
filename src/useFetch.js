import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortController.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data.");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((e) => {
          if (e.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setIsPending(false);
            setError(e.message);
          }
        });
    }, 1000);
    return () => {
      abortController.abort();
    };
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
