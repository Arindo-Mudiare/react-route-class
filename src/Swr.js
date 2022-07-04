import React from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((resp) => resp.json());

export default function Swr() {
  const url = `https://dog.ceo/api/breeds/image/random`;

  const { data, error } = useSWR(url, fetcher, {
    suspense: true,
  });

  if (error) {
    return <h1>Oops Agbada don hook o!!</h1>;
  }

  return (
    <div>
      <h1>SWR Data Fetching</h1>
      <img alt="dog pic" width={500} src={data?.message} />
    </div>
  );
}
