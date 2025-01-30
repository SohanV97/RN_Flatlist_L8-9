/*
this file will include our dataTypes that are used across multiple files 

we can also declare arrays or other variables here 
*/

type dataType = {
    id: string; // unique identifier for each element in list (student id)
    title: string; // what I display
  };

  const DATA: dataType[] = [
    { id: "1", title: "First" },
    { id: "2", title: "Second" },
    { id: "3", title: "Third" },
    { id: "4", title: "Fourth" },
  ];

  // bc I am expoting multiple items from the same file,
  // that is why I am NOT using the word default
  export {dataType, DATA}