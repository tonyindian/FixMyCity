import React from "react";
import { Marker, FlyToInterpolator } from "react-map-gl";

const RenderMarkers = (props) => {
  return (
    /*
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
            transitionDuration: 300,
          });
        }}
      />
    </Marker>
    */
    <></>
  );
};

export default RenderMarkers;

/*import React, { useState, useEffect, useRef } from "react";
import ReactMapGL, {
  Marker,
  Popup,
  FullscreenControl,
  GeolocateControl,
  NavigationControl,
  ScaleControl,
  FlyToInterpolator,
} from "react-map-gl";
import useSupercluster from "use-supercluster";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
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
import MarkerPng from "../../assets/map/marker.png";

const Map = (props) => {
  // Styles to place the buttons somewhere on the map (absolute position)
  const fullscreenControlStyle = {
    right: 15,
    top: 15,
  };

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

  const [filter, setFilter] = useState({
    content: "graffiti",
    category: "graffiti",
  });

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
        />
        {clusters.map((cluster) => {
          const [longitude, latitude] = cluster.geometry.coordinates;
          const { cluster: isCluster, point_count: pointCount } =
            cluster.properties;
          const findInContent =
            !filter.content.trim().length &&
            cluster.properties.content
              .toLowercase()
              .match(/{filter.content.toLowerCase()}/);

          //if (!filter) {
            // Clustering
            // It creates clusters if there is more than 1 marker in radius: 75 (check useSupercluster)
            if (isCluster) {
              return (
                <Marker
                  key={cluster.id}
                  latitude={latitude}
                  longitude={longitude}
                  offsetLeft={
                    -1 * ((14 + (pointCount / points.length) * 30) / 2)
                  }
                  offsetTop={
                    -1 * ((14 + (pointCount / points.length) * 30) / 2)
                  }
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
                      transitionDuration: 700,
                    });
                    setExpandCluster(true);
                  }}
                >
                  <MarkerDivStyle
                    height={`${14 + (pointCount / points.length) * 30}px`}
                    width={`${14 + (pointCount / points.length) * 30}px`}
                    lineHeight={`${
                      14 + (pointCount / points.length) * 30 - 1
                    }px`}
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
                      transitionDuration: 700,
                    });
                  }}
                />
              </Marker>
            );
          /*
          } else {
            if (filter.category === cluster.properties.category) {
              
            } else if (!findInContent) {
              
            }
          }
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
                    transitionDuration: 700,
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
*/
