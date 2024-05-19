export function clearLocalStorage() {
  localStorage.clear();
}

export function loadLocalStorage() {
  const places = localStorage.getItem("places");
  if (places == null) {
    localStorage.setItem("places", JSON.stringify([]));
    return [];
  } else {
    return JSON.parse[places];
  }
}

// export function handleLocalStorageItem(){} eventuell toggle som utför antingen save || delete
//beroende på värde/type prop m.h.a. ternary operator

export function saveToLocalStorage() {}

export function deleteFromLocalStorage() {}
