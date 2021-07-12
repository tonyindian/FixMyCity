import React from 'react';
import styled from "styled-components";
import Banner from '../../components/Banner/Banner';
import { Main, ReportButton, SearchBar, MapContainer } from './HomepageStyled';





const Homepage = () => {

    return (
        <Main>
            <SearchBar>
				<div>Search </div>
			</SearchBar>
            
            <MapContainer>
            <h1>Map</h1>
            </MapContainer>
                <ReportButton name="Report" >Report</ReportButton>
            
        </Main>
    )

}

export default Homepage