import React from "react";

function useLocalStorage(dataType, initialValue) {
    const localStorageData = localStorage.getItem(dataType);
    
    let parsedData;
    
    if (!localStorageData) {
      localStorage.setItem(dataType, JSON.stringify(initialValue));
      parsedData = initialValue;
    } else {
      parsedData = JSON.parse(localStorageData);
    };
    
    const [data, setData] = React.useState(parsedData);
    
    const saveData = (newData) => {
      localStorage.setItem(dataType, JSON.stringify(newData));
      setData(newData);
    };
  
    return [data, saveData];
}

export { useLocalStorage };