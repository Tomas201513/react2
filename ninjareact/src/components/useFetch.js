import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [data, setdata] = useState(null);
  const [ispending, setispending] = useState(true);
  const [error, seterror] = useState(null);

  useEffect(() => {
    const  abortCont=new AbortController()
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal})
        .then((res) => {
          console.log(res.ok);
          if (!res.ok) {
            throw Error("could not fetch data with that resource!");
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setdata(data);
          setispending(false);
          seterror(null);
        })
        .catch((e) => {
          if (e.name === 'AbortError') {
            console.log('fetch aborted')
          } else {
            seterror(e.message);
            setispending(false);
            console.log(e.message);
          }
          
        });
    }, 2000);
  }, [url]);
  return { data, ispending, error };
};

export default useFetch;
