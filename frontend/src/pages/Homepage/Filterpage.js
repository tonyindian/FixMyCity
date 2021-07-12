import React, {useState, useEffect} from 'react';
import { Main, ReportButton, Search, MapContainer } from './Styled';
import Map from '../../components/Map/Map';
import searchglass from '../../assets/images/search.png';




const Filterpage = () => {

    const [coordinates, setCoordinates] = useState(null);

    useEffect(() => {
        console.log(coordinates);
    },  [coordinates]);

    return (
        <Main>
            <Search>
                <input type="text" placeholder="Search..."/>        
                <button type="submit"><img src={searchglass} /> </button>
			</Search>
            
            <MapContainer>
                <Map height={"100%"} width={"100%"} setCoordinates={setCoordinates}/>
            </MapContainer>
                <ReportButton name="Report" >Filter</ReportButton>
            
        </Main>
    )

}
export default Filterpage