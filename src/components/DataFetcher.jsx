import React, { useEffect, useState } from "react";

const DataFetcher = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((sourabh) => setData(sourabh));
  }, []);
  console.log(data);
  const handleDelete = (id) => {
    console.log("handle delete clicked!!" + id);
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <ul>
            <li>{item.title}</li>
          </ul>
          <p>{item.body}</p>
          <button onClick={() => handleDelete(item.id)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default DataFetcher;
