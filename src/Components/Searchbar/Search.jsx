import React, { useContext, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { TextField, InputAdornment } from "@mui/material";
import { destinationsContext } from "../../context/DistinationsContextProvider";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const {destinationsArr} = useContext(destinationsContext)
  const [searchInput, setSearchInput] = useState("");
  const countries = [...destinationsArr];

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };
  let filteredCountries=[]
 if(searchInput.length > 0){
    filteredCountries = countries.filter((country) => {
      return country.name.toLowerCase().includes(searchInput.toLowerCase());
    });
 }

useEffect(()=>{
  console.log(filteredCountries);
},[])
  return (
    <div className="container d-flex justify-content-center  vh-10 py-3  ">
      <div>
      
          <TextField
            onChange={handleChange}
            value={searchInput}
            id="input-with-icon-textfield"
            placeholder="Search..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon></SearchIcon>
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
        <table className="table">
          <tbody>
            {filteredCountries.map((country, index) => (
              <tr key={index}>
               <Link to={`/destinations/${country.id}`} ><td>{country.name}</td></Link>
                {/* <td>{country.continent}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SearchBar;
