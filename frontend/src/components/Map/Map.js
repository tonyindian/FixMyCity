import React, {useState, useEffect, useRef} from "react";
import ReactMapGL, {Marker, Popup, FullscreenControl, GeolocateControl, NavigationControl, ScaleControl, FlyToInterpolator} from "react-map-gl";
import useSupercluster from "use-supercluster";

import {fetchIssues} from "../../Axios/fetches";
import * as issues from "./issue-data.json";
import {MainContainer, MarkerDivStyle, MarkerImgStyle, ButtonContainer, ChooseButton} from "./MapStyled";
import MarkerPng from "../../assets/map/marker.png";


const Map = (props) => {
    // Styles to place the buttons somewhere on the map (absolute position)
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



    // Token for Mapbox (to be able to use Mapbox)
    const MAPBOX_TOKEN = "pk.eyJ1IjoiYWxleDI2MCIsImEiOiJja3FxazJuYnQwcnRxMzFxYXNpaHV2NHR3In0.sClUCkiGXj9AQubDvnv68A"



    // States & Ref

    // Initial viewport for the first rendering
    const [viewport, setViewport] = useState({
        latitude: 47.3769,
        longitude: 8.5417,
        width: "100%",
        height: "100%",
        zoom: 10
    });

    // Reference for the map
    const mapRef = useRef();

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

    // State to save the user's current location
    const [userLocation, setUserLocation] = useState(null);
    
    // State to save which coordinate (user's current location or user's marker location) will be sent to the parent component's state
    const [switchButton, setSwitchButton] = useState(null);



    // Functions

    // Get the current location of the user & Set state (setUserLocation) & Set view (setViewport)
    const current_location = () => {
        if ("geolocation" in navigator) {
            console.log("Geolocation is available");
            navigator.geolocation.getCurrentPosition(position => {
                setViewport({
                    ...viewport,
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    error: null
                });
                console.log(position.coords.latitude, position.coords.longitude)
                setUserLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                })
            }, 
            error => setViewport({ ...viewport, error: error.message }),
            { enableHighAccuracy: true, timeout: 10000 }
            );
        } else {
            console.log("Geolocation is not Available");
        }
    }

    // onClick event handle, to get the coordinates if the user clicks on the map and wants to set his/her marker location
    const handleMapClick = ({ lngLat: [longitude, latitude] }) => {
        if (expandCluster === false) {
            if (toggleUserMarker === false) {
                setUserMarker({
                    id: "user",
                    latitude,
                    longitude,
                });
                setToggleUserMarker(true)
            } else if (userMarker && toggleUserMarker) {
                setUserMarker({
                    id: "user",
                    latitude,
                    longitude,
                });
            } else if (toggleUserMarker && userMarker === null) {
                setToggleUserMarker(false);
            }
        } else {
            setExpandCluster(false);
        }
        //setToggleUserMarker(false)
        setSelectedIssue(null)
    };

    // onClick event handle, to hide user's marker if he/she clicked on a marker or a cluster
    const hideUserMarker = () => {
        setToggleUserMarker(true);
        setUserMarker(null);
    };



    // useEffects

    // Initial useEffect: Get the user's current location and fetching in order to get the Issues
    useEffect(() => {
        current_location()
        //setIssues(fetchIssues);
    }, [])

    // It keeps the parent component's coordinate state up to date
    // It will be triggered if the userLocation, userMaker or the switchButton state's value is changed
    useEffect(() => {
        if (switchButton === "user") {
            props.setCoordinates({
                latitude: userLocation.latitude,
                longitude: userLocation.longitude
            })
        } else if (switchButton === "marker") {
            if (toggleUserMarker && userMarker) {
                if (userMarker !== null) {
                    props.setCoordinates({
                        latitude: userMarker.latitude,
                        longitude: userMarker.longitude
                    })
                };
            } else {
                props.setCoordinates(null);
            }
        }
    }, [userLocation, userMarker, switchButton, toggleUserMarker])



    //Clustering

    // Prepare data for clustering (from json to geojson)
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
            onClick={handleMapClick}
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

                        // Clustering
                        // It creates clusters if there is more than 1 marker in radius: 75 (check useSupercluster)
                        if (isCluster) {
                            return (
                                <Marker
                                key={cluster.id}
                                latitude={latitude}
                                longitude={longitude}
                                offsetLeft={-1 * ((10 + (pointCount / points.length) * 30) / 2)}
                                offsetTop={-1 * ((10 + (pointCount / points.length) * 30) / 2)}
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
                                    setExpandCluster(true);
                                }}
                                >
                                    <MarkerDivStyle
                                    height={`${10 + (pointCount / points.length) * 30}px`}
                                    width={`${10 + (pointCount / points.length) * 30}px`}
                                    lineHeight={`${10 + (pointCount / points.length) * 30 - 1}px`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        hideUserMarker();
                                    }}
                                    >
                                        {pointCount}
                                    </MarkerDivStyle>
                                </Marker>
                            )
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
                                        transitionInterpolator: new FlyToInterpolator({speed: 2}),
                                        transitionDuration: "auto"
                                    });
                                }}
                                />
                            </Marker>
                        )
                    })
                }
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
                        closeButton={true}
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
                    (toggleUserMarker && userMarker) && (
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
                            }}
                            style={{cursor: "auto"}}
                            />
                        </Marker>
                    )
                }
            </ReactMapGL>
            <ButtonContainer>
                <ChooseButton
                onClick={() => setSwitchButton("user")}
                backgroundColor={switchButton === "user" && "green"}
                >
                    Use current location
                </ChooseButton>
                <ChooseButton
                onClick={() => setSwitchButton("marker")}
                backgroundColor={switchButton === "marker" && "green"}
                >
                    Use pin location
                </ChooseButton>
            </ButtonContainer>
        </MainContainer>
    )
}

export default Map