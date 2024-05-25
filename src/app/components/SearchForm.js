// import { useState } from "react";
// import getPlaces from "../api/getPlaces";
// import RadioInput from "./ui/RadioInput";
// import TextInput from "./ui/TextInput";
// import ButtonInput from "./ui/ButtonInput";
// import Confetti from "react-dom-confetti";

// export default function SearchForm({ addPlaces }) {
//   const [type, setType] = useState("");
//   const [city, setCity] = useState("");
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [showConfetti, setShowConfetti] = useState(false);

//   async function searchPlace() {
//     console.log(`You have searched for ${type}s in ${city}`);
//     if (!city || !type) {
//       setError("Please select both a city and a type.");
//       return;
//     }
//     setError("");
//     setIsLoading(true);
//     try {
//       const response = await getPlaces(city, type);
//       if (response.error) {
//         setError("An error occurred while fetching places.");
//       } else {
//         addPlaces(response.results);
//       }
//     } catch (err) {
//       setError("An error occurred while fetching places.");
//     } finally {
//       setIsLoading(false);
//     }
//   }
//   async function feelLucky() {
//     if (!city || !type) {
//       setError("Please select both a city and a type.");
//       return;
//     }
//     setError("");
//     setIsLoading(true);

//     try {
//       const response = await getPlaces(city, type);
//       if (response.error) {
//         setError("An error occurred while fetching places.");
//       } else {
//         const randomIndex = Math.floor(Math.random() * response.results.length);
//         const randomPlace = response.results[randomIndex];
//         addPlaces([randomPlace]);
//         setShowConfetti(true);

//         // Use the addPlaces function to add a random place
//       }
//     } catch (err) {
//       setError("An error occurred while fetching places.");
//     } finally {
//       setIsLoading(false);
//     }
//   }

//   return (
//     <div className="field">
//       <TextInput
//         className="input"
//         placeholder="Search City or Address.."
//         setter={setCity}
//       />
//       <div className="control">
//         <RadioInput
//           label="Restaurant"
//           value="Restaurant"
//           checked={type}
//           setType={setType}
//         />
//         <RadioInput
//           label="Café"
//           value="Café"
//           checked={type}
//           setType={setType}
//         />
//         <RadioInput label="Bar" value="Bar" checked={type} setType={setType} />
//       </div>
//       {error && <div style={{ color: "red" }}>{error}</div>}
//       {isLoading ? (
//         <div>Loading...</div>
//       ) : (
//         <div className="control">
//           <ButtonInput
//             className="has-text-success"
//             value={"Search"}
//             onClick={searchPlace}
//           />
//           <ButtonInput
//             className="has-text-info"
//             value={"I Feel Lucky"}
//             onClick={feelLucky}
//           />
//         </div>
//       )}
//     </div>
//   );
// }
import { useState } from "react";
import { useGlobalContext } from "../context/globalContext";
import getPlaces from "../api/getPlaces";
import RadioInput from "./ui/RadioInput";
import TextInput from "./ui/TextInput";
import ButtonInput from "./ui/ButtonInput";

export default function SearchForm({ addPlaces, onFeelLucky }) {
  const [type, setType] = useState("");
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function searchPlace() {
    console.log(`You have searched for ${type}s in ${city}`);
    if (!city || !type) {
      setError("Please select both a city and a type.");
      return;
    }
    setError("");
    setIsLoading(true);
    try {
      const response = await getPlaces(city, type);
      if (response.error) {
        setError("An error occurred while fetching places.");
      } else {
        addPlaces(response.results);
      }
    } catch (err) {
      setError("An error occurred while fetching places.");
    } finally {
      setIsLoading(false);
    }
  }

  async function feelLucky() {
    if (!city || !type) {
      setError("Please select both a city and a type.");
      return;
    }
    setError("");
    setIsLoading(true);
    try {
      const response = await getPlaces(city, type);
      if (response.error) {
        setError("An error occurred while fetching places.");
      } else {
        const randomIndex = Math.floor(Math.random() * response.results.length);
        const randomPlace = response.results[randomIndex];
        addPlaces([randomPlace]);
        onFeelLucky(); // Trigger confetti when the "I Feel Lucky" button is clicked
      }
    } catch (err) {
      setError("An error occurred while fetching places.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="field">
      <TextInput
        className="input"
        placeholder="Search City or Address.."
        setter={setCity}
      />
      <div className="control">
        <RadioInput
          label="Restaurant"
          value="restaurant"
          checked={type}
          setType={setType}
        />
        <RadioInput
          label="Café"
          value="cafe"
          checked={type}
          setType={setType}
        />
        <RadioInput label="Bar" value="bar" checked={type} setType={setType} />
      </div>
      {error && <div style={{ color: "#ff718d" }}>{error}</div>}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="control">
          <ButtonInput
            className="has-text-success"
            value={"Search"}
            onClick={searchPlace}
          />
          <ButtonInput
            className="has-text-info"
            value={"I Feel Lucky"}
            onClick={feelLucky}
          />
        </div>
      )}
    </div>
  );
}
