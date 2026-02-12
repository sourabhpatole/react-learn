import React, { useState } from "react";

export const useFetch = (cb) => {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const fn = async (...args) => {
    setLoading(true);
    setError(null);
    try {
      const response = await cb(...args);
      setData(response);
      setError(null);
    } catch (error) {
      setError(error);
      window.alert(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, error, data, fn };
};
