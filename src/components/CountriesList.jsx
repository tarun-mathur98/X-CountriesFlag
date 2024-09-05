import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./CountriesList.module.css";

let CountriesList = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          " https://xcountries-backend.azurewebsites.net/all"
        );
        setCountries(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchCountries();
  }, []);

  return (
    <div className={styles.countriesContainer}>
      {countries.map((country) => (
        <div key={country.abbr} className={styles.countryCard}>
          <img className={styles.img} src={country.flag} alt={country.name} />
          <h2 className={styles.countryName}>{country.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default CountriesList;
