import React, { useState, useEffect, useRef } from "react";
import ReactMapGL, {
  Marker,
  Popup,
  //FullscreenControl,
  GeolocateControl,
  NavigationControl,
  ScaleControl,
  FlyToInterpolator,
} from "react-map-gl";
import useSupercluster from "use-supercluster";
import "./Geocoder.css";
import "mapbox-gl/dist/mapbox-gl.css";
import Geocoder from "react-map-gl-geocoder";

import { fetchIssues } from "../../Axios/fetches";
import * as issues from "./issue-data.json";
import {
  MainContainer,
  MarkerDivStyle,
  MarkerImgStyle,
  SatelliteButton,
} from "./MapStyled";
import { FaSatelliteDish } from "react-icons/fa";
import MarkerPng from "../../assets/map/marker.png";

const Map = (props) => {
  // Styles to place the buttons somewhere on the map (absolute position)
  /*
  const fullscreenControlStyle = {
    right: 15,
    top: 15,
  };
  */
  const geolocateControlStyle = {
    left: 15,
    top: 15,
  };

  const navControlStyle = {
    left: 15,
    top: 60,
  };

  const scaleControlStyle = {
    left: "50%",
    transform: "translate(-50%, 0)",
    bottom: 15,
  };

  // Token for Mapbox (to be able to use Mapbox)
  const MAPBOX_TOKEN =
    "pk.eyJ1IjoiYWxleDI2MCIsImEiOiJja3FxazJuYnQwcnRxMzFxYXNpaHV2NHR3In0.sClUCkiGXj9AQubDvnv68A";

  // States & Ref

  // Initial viewport for the first rendering
  const [viewport, setViewport] = useState({
    latitude: 47.3769,
    longitude: 8.5417,
    width: "100%",
    height: "100%",
    zoom: 15,
  });

  // Reference for the map
  const mapRef = useRef();

  const geocoderContainerRef = useRef();

  // State to save the selected issue's data for the Popup
  const [selectedIssue, setSelectedIssue] = useState(null);

  // State to save the fetched datas
  //const [issues, setIssues] = useState([]);

  // State to display or not the user's marker
  const [toggleUserMarker, setToggleUserMarker] = useState(false);

  // State to save the user's marker coordinates
  const [userMarker, setUserMarker] = useState(null);

  // Prevents from modifing the cluster from userMarker
  const [expandCluster, setExpandCluster] = useState(false);

  const [toggleSatellite, setToggleSatellite] = useState(false);

  const [mapStyle, setMapStyle] = useState(
    "mapbox://styles/mapbox/streets-v11"
  );

  // Functions
  /*
  // Get the current location of the user & Set view (setViewport)
  const current_location = () => {
    if ("geolocation" in navigator) {
      console.log("Geolocation is available");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setViewport({
            ...viewport,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: null,
          });
          console.log(position.coords.latitude, position.coords.longitude);
        },
        (error) => setViewport({ ...viewport, error: error.message }),
        { enableHighAccuracy: true, timeout: 10000 }
      );
    } else {
      console.log("Geolocation is not Available");
    }
  };
  */
  // onClick event handle, to get the coordinates if the user clicks on the map and wants to set his/her marker location, hide and set the marker location
  const handleMapClick = ({ lngLat: [longitude, latitude] }) => {
    if (expandCluster === false) {
      if (toggleUserMarker === false) {
        setUserMarker({
          id: "user",
          latitude,
          longitude,
        });
        setToggleUserMarker(true);
        setViewport({
          ...viewport,
          latitude,
          longitude,
          zoom: 19,
          transitionInterpolator: new FlyToInterpolator(),
          transitionDuration: 500,
        });
        // } else if (userMarker && toggleUserMarker) {
        //   setUserMarker({
        //     id: "user",
        //     latitude,
        //     longitude,
        //   });
        //   setViewport({
        //     ...viewport,
        //     latitude,
        //     longitude,
        //     zoom: 17,
        //     transitionInterpolator: new FlyToInterpolator(),
        //     transitionDuration: 500,
        //   });
      } else if (toggleUserMarker && userMarker === null) {
        setToggleUserMarker(false);
      }
    } else {
      setExpandCluster(false);
    }
    //setToggleUserMarker(false)
    setSelectedIssue(null);
  };

  // onClick event handle, to hide user's marker if he/she clicked on a marker or a cluster
  const hideUserMarker = () => {
    setToggleUserMarker(true);
    setUserMarker(null);
  };

  // useEffects

  // Initial useEffect: Get the user's current location and fetching in order to get the Issues
  /*
  useEffect(() => {
    current_location();
    //setIssues(fetchIssues);
  }, []);
  */
  // It keeps the parent component's coordinate state up to date
  // It will be triggered if the userMaker is visible on the map
  useEffect(() => {
    if (toggleUserMarker && userMarker) {
      props.setCoordinates({
        latitude: userMarker.latitude,
        longitude: userMarker.longitude,
      });
    } else {
      props.setCoordinates(null);
    }
  }, [userMarker, toggleUserMarker]);

  // It changes the map style from street to satellite if the satellite button is clicked on the map and back
  useEffect(() => {
    if (toggleSatellite) {
      setMapStyle("mapbox://styles/mapbox/satellite-v9");
    } else {
      setMapStyle("mapbox://styles/mapbox/streets-v11");
    }
  }, [toggleSatellite]);

  //Clustering

  // Prepare data for clustering (from json to geojson)
  const points = issues.data.map((issue) => ({
    type: "Feature",
    properties: {
      cluster: false,
      issueId: issue.id,
      title: issue.title,
    },
    geometry: {
      type: "Point",
      coordinates: [issue.longitude, issue.latitude],
    },
  }));

  // Get map bounds
  const bounds =
    mapRef.current && mapRef.current.getMap().getBounds().toArray().flat();

  // Get clusters
  const { clusters, supercluster } = useSupercluster({
    points,
    zoom: viewport.zoom,
    bounds,
    options: { radius: 100, maxZoom: 15 },
  });

  return (
    <MainContainer height={props.height} width={props.width}>
      <div ref={geocoderContainerRef} style={{ marginBottom: "5%" }} />
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        mapStyle={mapStyle}
        onClick={handleMapClick}
        onViewportChange={(viewport) => {
          if (toggleUserMarker && userMarker) {
            setViewport({
              ...viewport,
              latitude: userMarker.latitude,
              longitude: userMarker.longitude,
              zoom: 19,
              transitionInterpolator: new FlyToInterpolator(),
              transitionDuration: 500,
            });
          }
          setViewport(viewport);
        }}
        scrollZoom={toggleUserMarker && userMarker ? false : true}
        touchZoom={toggleUserMarker && userMarker ? false : true}
        doubleClickZoom={toggleUserMarker && userMarker ? false : true}
        width="100%"
        height="100%"
        maxZoom={20}
        ref={mapRef}
      >
        <Geocoder
          mapRef={mapRef}
          containerRef={geocoderContainerRef}
          onViewportChange={(viewport) => {
            setViewport({
              ...viewport,
              transitionInterpolator: new FlyToInterpolator(),
              transitionDuration: 500,
            });
          }}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          zoom={17}
          inputValue={""}
        />
        {/*<FullscreenControl style={fullscreenControlStyle} />*/}
        <GeolocateControl
          style={geolocateControlStyle}
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
          showAccuracyCircle={false}
          fitBoundsOptions={{ maxZoom: 17 }}
          auto
        />
        <NavigationControl style={navControlStyle} />
        <ScaleControl maxWidth={100} unit="metric" style={scaleControlStyle} />
        <SatelliteButton
          onClick={() => {
            setExpandCluster(true);
            setToggleSatellite(!toggleSatellite);
          }}
        >
          <FaSatelliteDish
            style={{ width: "15px", height: "15px", marginTop: "3px" }}
          />
        </SatelliteButton>
        {clusters.map((cluster) => {
          const [longitude, latitude] = cluster.geometry.coordinates;
          const { cluster: isCluster, point_count: pointCount } =
            cluster.properties;

          // Clustering
          // It creates clusters if there is more than 1 marker in radius: 75 (check useSupercluster)
          if (isCluster) {
            return (
              <Marker
                key={cluster.id}
                latitude={latitude}
                longitude={longitude}
                offsetLeft={-1 * ((14 + (pointCount / points.length) * 30) / 2)}
                offsetTop={-1 * ((14 + (pointCount / points.length) * 30) / 2)}
                onClick={() => {
                  const expansionZoom = Math.min(
                    supercluster.getClusterExpansionZoom(cluster.id),
                    15
                  );
                  setViewport({
                    ...viewport,
                    latitude,
                    longitude,
                    zoom: expansionZoom,
                    transitionInterpolator: new FlyToInterpolator(),
                    transitionDuration: 500,
                  });
                  setExpandCluster(true);
                }}
              >
                <MarkerDivStyle
                  height={`${14 + (pointCount / points.length) * 30}px`}
                  width={`${14 + (pointCount / points.length) * 30}px`}
                  lineHeight={`${14 + (pointCount / points.length) * 30 - 1}px`}
                  onClick={(e) => {
                    e.preventDefault();
                    hideUserMarker();
                  }}
                >
                  {pointCount}
                </MarkerDivStyle>
              </Marker>
            );
          }
          // It creates markers if there is no more than 1 cluster in radius: 75 (check useSupercluster)
          return (
            <Marker
              key={cluster.properties.issueId}
              latitude={latitude}
              longitude={longitude}
              offsetLeft={-16}
              offsetTop={-30}
            >
              <MarkerImgStyle
                src={MarkerPng}
                alt="marker"
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedIssue(cluster);
                  hideUserMarker();
                  setViewport({
                    ...viewport,
                    latitude,
                    longitude,
                    zoom: 17,
                    transitionInterpolator: new FlyToInterpolator(),
                    transitionDuration: 500,
                  });
                }}
              />
            </Marker>
          );
        })}
        {
          // It displays the Popup with datas in it for the marker if the user has clicked on one
          selectedIssue && (
            <Popup
              latitude={selectedIssue.geometry.coordinates[1]}
              longitude={selectedIssue.geometry.coordinates[0]}
              onClose={() => {
                setSelectedIssue(null);
              }}
              closeOnClick={false}
              closeButton={false}
              offsetTop={-20}
            >
              <div>
                <h2>{selectedIssue.properties.title}</h2>
              </div>
            </Popup>
          )
        }
        {
          // It displays the user's marker if the user has clicked on somewhere on the map
          toggleUserMarker && userMarker && (
            <Marker
              key={userMarker.id}
              latitude={userMarker.latitude}
              longitude={userMarker.longitude}
              offsetLeft={-16}
              offsetTop={-30}
            >
              <MarkerImgStyle
                src={MarkerPng}
                alt="marker"
                onClick={(e) => {
                  e.preventDefault();
                  hideUserMarker();
                  setViewport({
                    ...viewport,
                    latitude: userMarker.latitude,
                    longitude: userMarker.longitude,
                    zoom: 17,
                    transitionInterpolator: new FlyToInterpolator(),
                    transitionDuration: 500,
                  });
                }}
                style={{ cursor: "auto" }}
              />
            </Marker>
          )
        }
      </ReactMapGL>
    </MainContainer>
  );
};

export default Map;
