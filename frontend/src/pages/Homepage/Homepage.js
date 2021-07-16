import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Main, ReportButton, Search, MapContainer } from "./Styled";
import Map from "../../components/Map/Map";
import searchglass from "../../assets/images/search.png";
import FilterButton from "./FilterButton";
import { useDispatch } from "react-redux";
import Navigation from "../../components/Navigation/Navigation";

const Homepage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    console.log(coordinates);
  }, [coordinates]);

  const reportButtonOnClickHandler = () => {
    dispatch({ type: "setCoordinates", payload: coordinates });
    history.push("/createissue");
  };

  return (
    <Main>
      <Map height={"100%"} width={"100%"} setCoordinates={setCoordinates} />
      {/*coordinates === null ? (
        <FilterButton />
      ) : (
        <ReportButton name="Report" onClick={reportButtonOnClickHandler}>
          Report
        </ReportButton>
      )*/}
    </Main>
  );
};

export default Homepage;
