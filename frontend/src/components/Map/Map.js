import React, {useState, useEffect, useRef} from "react";
import ReactMapGL, {Marker, Popup, FullscreenControl, GeolocateControl, NavigationControl, ScaleControl, FlyToInterpolator} from "react-map-gl";
import useSupercluster from "use-supercluster";

import {fetchIssues} from "../../Axios/fetches";
import * as issues from "./issue-data.json";
import {MainContainer, MarkerDivStyle, MarkerImgStyle} from "./MapStyled";
import MarkerPng from "../../assets/map/marker.png";


const Map = (props) => {

    // Styles
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


    // Token
    const MAPBOX_TOKEN = "pk.eyJ1IjoiYWxleDI2MCIsImEiOiJja3FxazJuYnQwcnRxMzFxYXNpaHV2NHR3In0.sClUCkiGXj9AQubDvnv68A"


    // States & Ref
    const [viewport, setViewport] = useState({
        latitude: 47.3769,
        longitude: 8.5417,
        width: "100%",
        height: "100%",
        zoom: 10
    });

    const mapRef = useRef();

    const [selectedIssue, setSelectedIssue] = useState(null);
    /*
    const [userMarker, setUserMarker] = useState({
        id: "user",
        latitude: 99,
        longitude: -99,
    })
    */
    //const [issues, setIssues] = useState([])


    // Get current location
    const current_location = () => {
        navigator.geolocation.getCurrentPosition(position => {
            setViewport({
                ...viewport,
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                error: null
            });
            console.log(position.coords.latitude, position.coords.longitude)
        }, 
        error => setViewport({ ...viewport, error: error.message }),
        { enableHighAccuracy: true, timeout: 10000 }
        );
    }


    // useEffect and fetching to get the Issues
    useEffect(() => {
        if ("geolocation" in navigator) {
            console.log("Geolocation is available");
            current_location();
        } else {
            console.log("Geolocation is not Available");
        }
        //setIssues(fetchIssues);
    }, [])


    //Clustering

    // Prepare data for clustering
    const points = issues.data.map(issue => ({
        type: "Feature",
        properties: {
            cluster: false,
            issueId: issue.id,
            title: issue.title
        },
        geometry: {
            type: "Point",
            coordinates: [issue.longitude, issue.latitude]
        }
    }));

    // Get map bounds
    const bounds = mapRef.current && (mapRef.current.getMap().getBounds().toArray().flat())

    // Get clusters
    const { clusters, supercluster } = useSupercluster({
        points,
        zoom: viewport.zoom,
        bounds,
        options: { radius: 75, maxZoom: 20 }
    });


    return(
        <MainContainer height={props.height} width={props.width}>
            <ReactMapGL {...viewport}
            mapboxApiAccessToken={MAPBOX_TOKEN} 
            mapStyle="mapbox://styles/mapbox/streets-v11"
            onViewportChange={(viewport) => {setViewport(viewport)}}
            width="100%"
            height="100%"
            maxZoom={20}
            ref={mapRef}
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
                    clusters.map((cluster) => {
                        const [longitude, latitude] = cluster.geometry.coordinates;
                        const {
                            cluster: isCluster, 
                            point_count: pointCount
                        } = cluster.properties;

                        if (isCluster) {
                            return (
                                <Marker
                                key={cluster.id}
                                latitude={latitude}
                                longitude={longitude}
                                onClick={() => {
                                    const expansionZoom = Math.min(
                                        supercluster.getClusterExpansionZoom(cluster.id),
                                        20
                                    );
                                    setViewport({
                                        ...viewport,
                                        latitude,
                                        longitude,
                                        zoom: expansionZoom,
                                        transitionInterpolator: new FlyToInterpolator({speed: 2}),
                                        transitionDuration: "auto"
                                    });
                                }}
                                >
                                    <MarkerDivStyle
                                    height={`${10 + (pointCount / points.length) * 30}px`}
                                    width={`${10 + (pointCount / points.length) * 30}px`}
                                    lineHeight={`${10 + (pointCount / points.length) * 30 - 1}px`}
                                    >
                                        {pointCount}
                                    </MarkerDivStyle>
                                </Marker>
                            )
                        }

                        return (
                            <Marker 
                            key={cluster.properties.issueId}
                            latitude={latitude} 
                            longitude={longitude}
                            offsetLeft={-18}
                            offsetTop={-18}
                            >
                                <MarkerImgStyle
                                src={MarkerPng}
                                alt="marker"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setSelectedIssue(cluster);
                                    setViewport({
                                        ...viewport,
                                        latitude,
                                        longitude,
                                        zoom: 17,
                                        transitionInterpolator: new FlyToInterpolator({speed: 2}),
                                        transitionDuration: "auto"
                                    })
                                }}
                                />
                            </Marker>
                        )
                    })
                }
                {
                    selectedIssue && (
                        <Popup 
                        latitude={selectedIssue.geometry.coordinates[1]} 
                        longitude={selectedIssue.geometry.coordinates[0]}
                        onClose={() => {
                            setSelectedIssue(null);
                        }}
                        closeOnClick={false}
                        >
                            <div>
                                <h2>{selectedIssue.properties.title}</h2>
                            </div>
                        </Popup>
                    )
                }
            </ReactMapGL>
        </MainContainer>
    )
}

/*
                {
                    <Marker
                    key={userMarker.id}
                    latitude={userMarker.latitude}
                    longitude={userMarker.longitude}
                    >
                        <MarkerImgStyle
                        src={MarkerPng}
                        alt="marker"
                        onClick={(e) => {
                            e.preventDefault();
                        }}
                        />
                    </Marker>
                }
                */


export default Map