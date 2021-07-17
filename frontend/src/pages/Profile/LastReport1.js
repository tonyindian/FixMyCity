import React from 'react';
import { LastReportContainer, Main, ButtonContainer, TitleContainer, FetschingContainer, AddressContainer} from './ProfileStyled';
import Navigation from '../../components/Navigation/Navigation';
import ProfileUpperPart from './ProfileUpperPart';

const LastReport = () => {

    return (
        <>
            <Navigation/>
                <Main>
                    <ProfileUpperPart/>
                        <TitleContainer>
                            <h1>Last reported</h1>
                        </TitleContainer>
    
                        <LastReportContainer>

                            <FetschingContainer>
                                <p className='issue'>Broken bench</p>
                                <AddressContainer>Argauerstrasse 12</AddressContainer>
                            </FetschingContainer>

                        </LastReportContainer>

                        <ButtonContainer>
                            <button>More...</button>
                        </ButtonContainer>

                </Main>
        </>


    )
}
export default LastReport