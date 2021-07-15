import React, { useState, useEffect } from "react";
import { MainContainer } from "./CreateIssueStyled";
import {
  StepOneContainer,
  StepTwoContainer,
  StepThreeContainer,
  ReviewContainer,
  Box,
} from "./CreateIssueStyled";
import leftArrow from "../../assets/images/left-arrow.png";
import rightArrow from "../../assets/images/right-arrow.png";
import Map from "../../components/Map/Map";
import Camera from "../../components/Camera/Camera";
import Axios from "../../helpers/axios";
import { useSelector } from "react-redux";

import { StaticMap, Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { MarkerImgStyle } from "../../components/Map/MapStyled";
import MarkerPng from "../../assets/map/marker.png";

const StepOne = () => {
  const pinnedCoordinates = useSelector(
    (state) => state.createIssueCoordinatesReducer.coordinates
  );
  const MAPBOX_TOKEN =
    "pk.eyJ1IjoiYWxleDI2MCIsImEiOiJja3FxazJuYnQwcnRxMzFxYXNpaHV2NHR3In0.sClUCkiGXj9AQubDvnv68A";

  return (
    <>
      <StepOneContainer>
        <h1>Step 1/3</h1>
        {
          //<div id="step1">
        }
        <StaticMap
          key={"map"}
          width={"100%"}
          height={"100%"}
          latitude={pinnedCoordinates.latitude}
          longitude={pinnedCoordinates.longitude}
          zoom={19}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          mapStyle={"mapbox://styles/mapbox/streets-v11"}
        >
          <Marker
            key={"userMarker"}
            latitude={pinnedCoordinates.latitude}
            longitude={pinnedCoordinates.longitude}
            offsetLeft={-16}
            offsetTop={-30}
          >
            <MarkerImgStyle
              src={MarkerPng}
              alt="marker"
              style={{ cursor: "auto" }}
            />
          </Marker>
        </StaticMap>
        {
          //</div>
        }
      </StepOneContainer>
    </>
  );
};

const StepTwo = (props) => {
  return (
    <>
      <StepTwoContainer>
        <h1>Step 2/3</h1>
        <Camera
          imageURL={props.imageURL}
          setImageURL={props.setImageURL}
          setImageFile={props.setImageFile}
        ></Camera>
      </StepTwoContainer>
    </>
  );
};

const StepThree = (props) => {
  const selectCategoryOnChangeHandler = (e) => {
    props.setCategory(e.target.value);
  };

  const descriptionOnChangeHandler = (e) => {
    props.setDescription(e.target.value);
  };

  const titleOnChangeHandler = (e) => {
    props.setTitle(e.target.value);
  };

  return (
    <>
      <StepThreeContainer>
        <h1>Step 3/3</h1>
        <div id="titleCategoryDescriptionContainer">
          <div id="titleContainer">
            <h3>Add a title:</h3>
            <input
              type="text"
              value={props.title}
              onChange={titleOnChangeHandler}
            ></input>
          </div>
          <div id="categoryContainer">
            <h3>Add a category:</h3>
            <select
              id="selectCategory"
              defaultValue={props.category === "" ? "default" : props.category}
              onChange={selectCategoryOnChangeHandler}
            >
              <option value="default">--select--</option>
              <option>graffiti</option>
              <option>damages</option>
              <option>litter</option>
              <option>items with no owner</option>
            </select>
          </div>
          <div id="descriptionContainer">
            <h3>Add a description:</h3>
            <textarea
              rows="10"
              cols="37"
              value={props.description}
              onChange={descriptionOnChangeHandler}
            ></textarea>
          </div>
        </div>
      </StepThreeContainer>
    </>
  );
};

const Review = (props) => {
  return (
    <>
      <ReviewContainer>
        <h1>Review</h1>
        <div id="reviewContainerBox">
          <Box>
            <img
              id="selectedImage"
              src={props.imageURL}
              alt="selected_image"
            ></img>
          </Box>
          <p>Title: {props.title}</p>
          <p>Address: {props.address}</p>
          <p>Category: {props.category}</p>
          <p>Description: {props.description}</p>
        </div>
      </ReviewContainer>
    </>
  );
};

const CreateIssue = () => {
  const pinnedCoordinates = useSelector(
    (state) => state.createIssueCoordinatesReducer.coordinates
  );

  const [fetchAddress, setFetchAddress] = useState("");

  const MAPBOX_TOKEN =
    "pk.eyJ1IjoiYWxleDI2MCIsImEiOiJja3FxazJuYnQwcnRxMzFxYXNpaHV2NHR3In0.sClUCkiGXj9AQubDvnv68A";

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${pinnedCoordinates.longitude}%2C%20${pinnedCoordinates.latitude}.json?access_token=${MAPBOX_TOKEN}`;

      await fetch(url)
        .then((res) => res.json())
        .then((data) => setFetchAddress(data.features[0].place_name));
    };

    fetchData();
  }, [pinnedCoordinates.latitude, pinnedCoordinates.longitude]);

  console.log(fetchAddress);

  const [toggleShowStep1, setToggleShowStep1] = useState(true);
  const [toggleShowStep2, setToggleShowStep2] = useState(false);
  const [toggleShowStep3, setToggleShowStep3] = useState(false);
  const [toggleShowReview, setToggleShowReview] = useState(false);
  const [toggleIsPageComplete, setToggleIsPageComplete] = useState(true);
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("HARDCODED Heinrichstrasse 200");
  const [postcode, setPostCode] = useState("8005");
  const [city, setCity] = useState("HARDCODED Zurich");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [imageFile, setImageFile] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    console.log(pinnedCoordinates);
    setLatitude(pinnedCoordinates.latitude);
    setLongitude(pinnedCoordinates.longitude);
  }, [pinnedCoordinates]);

  const nextButtonHandler = () => {
    if (
      toggleShowStep1 === true &&
      !(toggleShowStep2 && toggleShowStep3 && toggleShowReview)
    ) {
      setToggleShowStep1(false);
      setToggleShowStep2(true);
    }
    if (
      toggleShowStep2 === true &&
      !(toggleShowStep1 && toggleShowStep3 && toggleShowReview)
    ) {
      setToggleShowStep2(false);
      setToggleShowStep3(true);
    }
    if (
      toggleShowStep3 === true &&
      !(toggleShowStep1 && toggleShowStep2 && toggleShowReview)
    ) {
      setToggleShowStep3(false);
      setToggleShowReview(true);
      console.log(
        "At this stage, the following is stored in the state:",
        "\n\n",
        `title: ${title}`,
        "\n",
        `address: ${address}`,
        "\n",
        `image: ${imageURL}`,
        "\n",
        `category: ${category}`,
        "\n",
        `description: ${description}`
      );
    }
  };

  const backButtonHandler = () => {
    if (
      toggleShowStep2 === true &&
      !(toggleShowStep1 && toggleShowStep3 && toggleShowReview)
    ) {
      setToggleShowStep2(false);
      setToggleShowStep1(true);
    }
    if (
      toggleShowStep3 === true &&
      !(toggleShowStep1 && toggleShowStep2 && toggleShowReview)
    ) {
      setToggleShowStep3(false);
      setToggleShowStep2(true);
    }
    if (
      toggleShowReview === true &&
      !(toggleShowStep1 && toggleShowStep2 && toggleShowStep3)
    ) {
      setToggleShowReview(false);
      setToggleShowStep3(true);
    }
  };

  const sendOnClickHandler = async () => {
    //console.log("you hit me");
    const url = "/issues/new/";
    const postmanToken =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjI2MzY4MzA5LCJqdGkiOiI3MzFkOThiODJiNWU0ZjRmYjkxZjcwOTgzYzg5ZThhOCIsInVzZXJfaWQiOjF9.l0rl5zqGADavU3JaNLoUqod5CM6gZIG4LKmB2Rkvgis";

    let formdata = new FormData();
    formdata.append("title", title);
    formdata.append("longitude", longitude);
    formdata.append("latitude", latitude);
    formdata.append("adress", address);
    formdata.append("city", city);
    formdata.append("zip", postcode);
    formdata.append("category", category);
    formdata.append("image", imageFile);
    formdata.append("content", description);

    const config = {
      headers: {
        //Authorization: `Bearer ${localStorage.getItem("token")}`,
        Authorization: `Bearer ${postmanToken}`,
        "Content-Type": "multipart/form-data",
      },
    };

    try {
      const resp = await Axios.post(url, formdata, config);
      if (resp.status === 201) {
        console.log("Success.");
      }
    } catch (err) {
      if (err) {
        console.log(err.response);
      }
    }
  };

  return (
    <MainContainer>
      {toggleShowStep1 === true ? <StepOne /> : null}
      {toggleShowStep2 === true ? (
        <>
          <StepTwo
            setImageURL={setImageURL}
            imageURL={imageURL}
            setImageFile={setImageFile}
          />
        </>
      ) : null}
      {toggleShowStep3 === true ? (
        <>
          <StepThree
            category={category}
            setCategory={setCategory}
            description={description}
            setDescription={setDescription}
            title={title}
            setTitle={setTitle}
          />
        </>
      ) : null}
      {toggleShowReview === true ? (
        <>
          <Review
            imageURL={imageURL}
            title={title}
            address={address}
            category={category}
            description={description}
          />
        </>
      ) : null}
      <div id="footer">
        {toggleShowStep1 === false ? (
          <button id="backArrowButton" onClick={backButtonHandler}>
            <img src={leftArrow} id="backArrow" alt="back"></img>
          </button>
        ) : null}
        <div id="buttonsContainer">
          {toggleShowStep1 === true ? (
            <button id="leaveButton">Leave</button>
          ) : null}

          {toggleShowReview === true && toggleIsPageComplete === true ? (
            <button id="sendButton" onClick={sendOnClickHandler}>
              Send
            </button>
          ) : null}
        </div>
        {toggleIsPageComplete === true && toggleShowReview === false ? (
          <button id="nextArrowButton" onClick={nextButtonHandler}>
            <img src={rightArrow} id="nextArrow" alt="next"></img>
          </button>
        ) : null}
      </div>
    </MainContainer>
  );
};

export default CreateIssue;
