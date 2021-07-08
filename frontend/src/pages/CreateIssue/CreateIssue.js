import React, {useState, useEffect} from "react"
import {MainContainer} from "./CreateIssueStyled"
import Map from "../../components/Map/Map"
import Camera from "../../components/Camera/Camera"

const CreateIssue = () => {

    const [coordinates, setCoordinates] = useState(null);
    
    useEffect(() => {
        console.log(coordinates)
    }, [coordinates])

    return (
        <MainContainer>
            <h1>Create issue</h1>
            <Map height={"2000px"} width={"513px"} setCoordinates={setCoordinates}/>
            <h3>Title</h3>
            <Camera></Camera>
            <h3>Description</h3>
            <textarea rows="40" cols="70"></textarea>
            <button>SEND</button>
        </MainContainer>
    )

}

export default CreateIssue