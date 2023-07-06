import React, { createContext, useState, useEffect } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    }
  };

  const getItemById = (itemId) => {
    return data.find((item) => item.id === itemId);
  };

  const updateItem = (itemId, updatedItem) => {
    setData((prevData) => {
      const updatedData = prevData.map((item) => {
        if (item.id === itemId) {
          return { ...item, ...updatedItem };
        }
        return item;
      });
      return updatedData;
    });
  };

  const deleteItem = (itemId) => {
    setData((prevData) => {
      const updatedData = prevData.filter((item) => item.id !== itemId);
      return updatedData;
    });
  };

  return (
    <DataContext.Provider value={{ data, updateItem, deleteItem, getItemById }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
