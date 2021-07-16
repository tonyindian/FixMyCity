import React from 'react';
import { LastReportContainer, Main, MoreContainer, FetschingContainer, AddressContainer} from './ProfileStyled';
import Navigation from '../../components/Navigation/Navigation';
import ProfileUpperPart from './ProfileUpperPart';

const LastReport = () => {

    return (
        <>
            <Navigation/>
                <Main>
                    <ProfileUpperPart/>

                        <LastReportContainer>
                            <h1>Last reported</h1>

                            <FetschingContainer>
                                <p className='issue'>Broken bench</p>
                                <AddressContainer>Argauerstrasse 12</AddressContainer>
                            </FetschingContainer>

                            

                            <FetschingContainer>
                                <p className='issue'>Broken bench</p>
                                <AddressContainer>Argauerstrasse 12</AddressContainer>
                            </FetschingContainer>

                            <FetschingContainer>
                                <p className='issue'>Broken bench</p>
                                <AddressContainer>Argauerstrasse 12</AddressContainer>
                            </FetschingContainer>

                        </LastReportContainer>

                        <MoreContainer>
                            <p>More...</p>
                        </MoreContainer>

                </Main>
        </>


    )
}
export default LastReport