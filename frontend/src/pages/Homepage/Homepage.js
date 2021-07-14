import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Main, ReportButton, Search, MapContainer } from "./Styled";
import Map from "../../components/Map/Map";
import searchglass from "../../assets/images/search.png";
import FilterButton from "./FilterButton";
import { useDispatch } from "react-redux";

const Homepage = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    console.log(coordinates);
  }, [coordinates]);

  const reportButtonOnClickHandler = () => {
    dispatch({ type:"setCoordinates", payload:coordinates});
    history.push("/createissue")
  }

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
        <ReportButton name="Report" onClick={reportButtonOnClickHandler}>Report</ReportButton>
      )}
    </Main>
  );
};

export default Homepage;
