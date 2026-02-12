import React, { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";

const DataFetcher = () => {
  const fetchpost = () =>
    fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
      res.json(),
    );

  const { data, loading, error, fn } = useFetch(fetchpost);
  useEffect(() => {
    fn();
  }, []);
  console.log(data);
  const handleDelete = (id) => {
    console.log("handle delete clicked!!" + id);
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1>This is Data Fetch</h1>
      {loading ? (
        "Loading..."
      ) : (
        <>
          {data?.map((item) => (
            <div key={item.id}>
              <ul>
                <li>{item.title}</li>
              </ul>
              <p>{item.body}</p>
              <button onClick={() => handleDelete(item.id)}>delete</button>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default DataFetcher;
