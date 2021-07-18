import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Div100vh from "react-div-100vh";
import { Main, ReportButton, Search, MapContainer } from "./Styled";
import Map from "../../components/Map/Map";
import searchglass from "../../assets/images/search.png";
import FilterButton from "./FilterButton";
import { useDispatch } from "react-redux";
import Navigation from "../../components/Navigation/Navigation";
import { fetchProfileInfo, patchProfileInfo } from "../../Axios/fetches";
import { fetchLatestProfileInfoAndUpdateRedux } from "../../middleware/fetchUpdateRedux";

const Homepage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    fetchLatestProfileInfoAndUpdateRedux(dispatch);
  }, [coordinates]);

  const reportButtonOnClickHandler = () => {
    dispatch({ type: "setCoordinates", payload: coordinates });
    history.push("/createissue");
  };

  return (
    <Div100vh>
      <Main>
        <Map height={"100%"} width={"100%"} setCoordinates={setCoordinates} />
        {coordinates === null ? (
          <FilterButton />
        ) : (
          <ReportButton onClick={reportButtonOnClickHandler}>
            Report
          </ReportButton>
        )}
      </Main>
    </Div100vh>
  );
};

export default Homepage;
