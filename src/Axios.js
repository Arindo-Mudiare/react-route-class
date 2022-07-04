import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function Axios() {
  const [data, setData] = useState(null);
  const url = `https://dog.ceo/api/breeds/image/random`;

  useEffect(() => {
    axios.get(url).then((resp) => {
      setData(resp.data.message);
    });
  }, [url]);

  return (
    <div>
      <h1>Axios</h1>
      <img alt="dog pic" width={500} src={data} />
    </div>
  );
}
