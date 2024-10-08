import React from "react";

function useLocalStorage(dataType, initialValue) {
  const [data, setData] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageData = localStorage.getItem(dataType);
        
        let parsedData;
  
        if (!localStorageData) {
          localStorage.setItem(dataType, JSON.stringify(initialValue));
          parsedData = initialValue;
        } else {
          parsedData = JSON.parse(localStorageData);
          setData(parsedData);
        };
        setLoading(false);
      } catch(error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, []);
  
  
  const saveData = (newData) => {
    localStorage.setItem(dataType, JSON.stringify(newData));
    setData(newData);
  };

  return {
    data, 
    saveData, 
    loading, 
    error
  };
}

export { useLocalStorage };