import Cover from './component/annonces';
import React, { useState, useEffect } from "react";
import "./App.css";
import { buttons } from "./data";
import { getData, filterData } from "./services/services";


export default function App() {
  const [filtredData, setFiltredData] = useState(null);
  useEffect(() => {
    setFiltredData(getData());
  }, []);

  function handleData(e) {
    let typeData = e.target.value;
    typeData !== "all"
      ? setFiltredData(filterData(typeData))
      : setFiltredData(getData());
  }
  const [query, setQuery] = useState("");

  return (
    <main className='App'>
      {buttons &&
        buttons.map((type, index) => (
          <>
              <button key={index} className='button' value={type.value} onClick={handleData}>
                {type.name}
              </button>
          </>
        ))}

      <input
        className="search"
        placeholder="Localité"
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      <div className='card'>
      {filtredData &&
        filtredData.filter((asd) =>
            asd.address.city.toLowerCase().includes(query)
            ).map(affiche => (
          <Cover 
            src={affiche.main_picture}
            price={affiche.full_rent_price}
            name={affiche.title}
            type={affiche.type.replace('flat','Appartement').replace('house','Maison')}
            nbpiece={affiche.rooms_count}
            nbchambres={affiche.bedrooms_count}
            m2={affiche.living_area}
            ville={affiche.address.city}
            CP={affiche.address.postal_code}
          />
        ))}
        </div>
    </main>
  );
}

