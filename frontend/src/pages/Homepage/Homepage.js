import React, { useState, useEffect } from "react";
import { Main, ReportButton, Search, MapContainer } from "./Styled";
import Map from "../../components/Map/Map";
import searchglass from "../../assets/images/search.png";
import FilterButton from "./FilterButton";

const Homepage = () => {
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    console.log(coordinates);
  }, [coordinates]);

  return (
    <Main>
      <Search>
        <input type="text" placeholder="Search..." />
        <button type="submit">
          <img src={searchglass} alt={"search icon"} />
        </button>
      </Search>

      <MapContainer>
        <Map height={"100%"} width={"100%"} setCoordinates={setCoordinates} />
      </MapContainer>
      {coordinates === null ? (
        <FilterButton />
      ) : (
        <ReportButton name="Report">Report</ReportButton>
      )}
    </Main>
  );
};

export default Homepage;
