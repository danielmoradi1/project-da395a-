export function clearLocalStorage() {
  localStorage.clear();
}

export function loadLocalStorage(object) {
  if (typeof window !== "undefined") {
    const fetchedObject = localStorage.getItem(object);
    if (fetchedObject == null) {
      localStorage.setItem(object, JSON.stringify([]));
      return [];
    } else {
      return JSON.parse(fetchedObject);
    }
  }
}

export function saveToLocalStorage(object, newObject) {
  localStorage.setItem(object, JSON.stringify(newObject));
}

// export function handleLocalStorageItem(){} eventuell toggle som utför antingen save || delete
//beroende på värde/type prop m.h.a. ternary operator

export function deleteFromLocalStorage(placeIndex) {}
