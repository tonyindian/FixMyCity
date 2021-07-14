import React, { useState, useEffect } from "react";
import { Main, ReportButton, Search, MapContainer } from "./Styled";
import Map from "../../components/Map/Map";
import searchglass from "../../assets/images/search.png";

const Homepage = () => {
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    console.log(coordinates);
  }, [coordinates]);

  return (
    <Main>
      {/*
        <Search>
          <button type="submit">
            <img src={searchglass} />
          </button>
          <input type="text" placeholder="Search..." />
        </Search>
      */}

      <MapContainer>
        <Map height={"100%"} width={"100%"} setCoordinates={setCoordinates} />
      </MapContainer>
      {coordinates === null ? (
        <ReportButton name="Report">Filter</ReportButton>
      ) : (
        <ReportButton name="Report">Report</ReportButton>
      )}
    </Main>
  );
};

export default Homepage;
