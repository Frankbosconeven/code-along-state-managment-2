import { useState, useEffect } from "react";

// getting the values
function useLocalStorage(key, initialValue) {
  const [data, setData] = useState(() => {
    const result = localStorage.getItem(key);
    if (!result) return initialValue;
    return JSON.parse(result);
  });

  // setting the values
  const setValue = (value) => setData(value);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [data, key]);

  return { data, setValue };
}

export default useLocalStorage;
