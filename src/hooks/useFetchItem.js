import { useEffect, useState } from "react";
import axios from "axios";

const useFetchItem = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [setData]);

  return data;
};

export default useFetchItem;
