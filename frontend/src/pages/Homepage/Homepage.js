import React from 'react';
import { Main, ReportButton, Search, MapContainer } from './HomepageStyled';
import Map from '../../components/Map/Map';
import searchglass from '../../assets/images/search.png';




const Homepage = () => {

    return (
        <Main>
            <Search>
                <input type="text" placeholder="Search..."/>        
                <button type="submit"><img src={searchglass} /> </button>
			</Search>
            
            <MapContainer>
            {/* <Map></Map> */}
            </MapContainer>
                <ReportButton name="Report" >Report</ReportButton>
            
        </Main>
    )

}

export default Homepage