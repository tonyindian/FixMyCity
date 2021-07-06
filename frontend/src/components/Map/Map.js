import React, {useState} from "react";
import styled from "styled-components";
import ReactMapGL, {Marker, Popup, FullscreenControl, GeolocateControl, NavigationControl, ScaleControl, FlyToInterpolator} from "react-map-gl";

import * as issues from "./issue-data.json";
import {MainContainer} from "./MapStyled"
import MarkerPng from "../../assets/marker.png"


const MarkerImgStyle = styled.img`
    cursor: pointer
`

const Map = () => {
    const fullscreenControlStyle = {
        right: 15,
        top: 15
    };

    const geolocateControlStyle = {
        left: 15,
        top: 15
    };

    const navControlStyle= {
        left: 15,
        top: 60
      };

    const scaleControlStyle= {
        left: "50%",
        transform: "translate(-50%, 0)",
        bottom: 15
    };

    const MAPBOX_TOKEN = "pk.eyJ1IjoiYWxleDI2MCIsImEiOiJja3FxazJuYnQwcnRxMzFxYXNpaHV2NHR3In0.sClUCkiGXj9AQubDvnv68A"

    const [viewport, setViewport] = useState({
        latitude: 47.3769,
        longitude: 8.5417,
        width: "100%",
        height: "100%",
        zoom: 10
    });

    const [selectedIssue, setSelectedIssue] = useState(null);

    return(
        <MainContainer>
            <ReactMapGL {...viewport}
            mapboxApiAccessToken={MAPBOX_TOKEN} 
            mapStyle="mapbox://styles/mapbox/streets-v11"
            onViewportChange={(viewport) => {setViewport(viewport)}}
            width="100%"
            height="100%"
            maxZoom={20}
            transitionDuration={400}
            transitionInterpolator={new FlyToInterpolator({
                curve: 0.2,
                speed: 0.2,
                screenSpeed: 0.2,
                maxDuration: 1
            })}
            >
                <FullscreenControl style={fullscreenControlStyle} />
                <GeolocateControl
                style={geolocateControlStyle}
                positionOptions={{enableHighAccuracy: true}}
                trackUserLocation={true}
                showAccuracyCircle={false}
                auto
                />
                <NavigationControl style={navControlStyle} />
                <ScaleControl maxWidth={100} unit="metric" style={scaleControlStyle} />
                {
                    issues.data.map((issue) => (
                        <Marker 
                        key={issue.id}
                        latitude={issue.latitude} 
                        longitude={issue.longitude}
                        offsetLeft={-18}
                        offsetTop={-18}
                        >
                            <MarkerImgStyle
                            src={MarkerPng}
                            alt="marker"
                            onClick={(e) => {
                                e.preventDefault();
                                setSelectedIssue(issue);
                                setViewport({
                                    latitude: issue.latitude,
                                    longitude: issue.longitude,
                                    width: "90%",
                                    height: "90%",
                                    zoom: 17
                                })
                            }}
                            />
                        </Marker>
                    ))
                }
                {
                    selectedIssue && (
                        <Popup 
                        latitude={selectedIssue.latitude} 
                        longitude={selectedIssue.longitude}
                        onClose={() => {
                            setSelectedIssue(null);
                        }}
                        closeOnClick={false}
                        >
                            <div>
                                <h2>{selectedIssue.title}</h2>
                                <p>{selectedIssue.description}</p>
                            </div>
                        </Popup>
                    )
                }
            </ReactMapGL>
        </MainContainer>
    )
}


export default Map