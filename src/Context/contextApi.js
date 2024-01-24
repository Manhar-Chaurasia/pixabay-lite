import React, { createContext, useState, useEffect } from "react";
import { fetchData } from "../api";

export const context = createContext();

export const AppContext = ({ children }) => {
  const [images, setImages] = useState([]);
  const [loading, isLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchDataFromApi(searchTerm);
  }, [searchTerm]);

  const fetchDataFromApi = (query) => {
    fetchData(query).then((data) => {
      setImages(data.hits);
      console.log("ssss- ", data.hits);
    });
  };

  return (
    <context.Provider value={{ images, searchTerm, setSearchTerm,loading }}>
      {children}
    </context.Provider>
  );
};
