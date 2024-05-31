// Function to load data from local storage or initialize an empty array if no data is found
export function loadLocalStorage(object) {
  if (typeof window !== "undefined") {
     // Retrieve data from local storage based on the provided object key
    const fetchedObject = localStorage.getItem(object);
    // If no data is found, initialize local storage with an empty array and return it
    if (fetchedObject == null) {
      localStorage.setItem(object, JSON.stringify([]));
      return [];
    } else {
      return JSON.parse(fetchedObject);
    }
  }
}

// Function to save data to local storage
export function saveToLocalStorage(object, newObject) {
  localStorage.setItem(object, JSON.stringify(newObject));
}
