import React, {useState} from "react"
import {MainContainer} from "./CreateIssueStyled"
import Map from "../../components/Map/Map"
import Camera from "../../components/Camera/Camera"



const CreateIssue = () => {

    const [description, setDescription] = useState("");

    const descriptionOnChangeHandler = e => {
        setDescription(e.target.value);
    }

    const sendOnClickHandler = e => {
        console.log("You hit send, congratulations.")
    }


    return (
        <MainContainer>
            <h1>Create issue</h1>
            <Map></Map>
            <h3>Title</h3>
            <Camera></Camera>
            <h3>Description</h3>
            <textarea rows="10" cols="40" onChange={descriptionOnChangeHandler}></textarea>
            <button onClick={sendOnClickHandler}>SEND</button>
        </MainContainer>
    )

}

export default CreateIssue