import React, { useState } from 'react';
import {MainContainer, Box, InputBox} from "./CameraStyled"
import { IconButton } from '@material-ui/core';

import PhotoCameraRoundedIcon from "@material-ui/icons/PhotoCameraRounded";


//Camera app
const Camera = () => {
    const [source, setSource] = useState("");
    const handleCapture = (target) => {
        if (target.files) {
          if (target.files.length !== 0) {
            const file = target.files[0];
            const newUrl = URL.createObjectURL(file);
            setSource(newUrl);
          }
        }
      };

    return(
        <MainContainer>
          <h5>Capture your image</h5>
            {source &&
              <Box>
                <img src={source} alt={"snap"} className="img"></img>
              </Box>}
              <InputBox
                  accept="image/*"
                  id="icon-button-file"
                  type="file"
                  /*capture="environment"*/
                  onChange={(e) => handleCapture(e.target)}>
              </InputBox>
              <label htmlFor="icon-button-file">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <PhotoCameraRoundedIcon fontSize="large" color="primary" />
                </IconButton>
              </label>
        </MainContainer> 
    )
}


export default Camera