import React from 'react';
import { LastReportContainer, Main, ButtonContainer, TitleContainer, FetschingContainer, AddressContainer, DateContainer, UpvotesContainer} from './ProfileStyled';
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

                                <DateContainer>
                                    May 2021
                                </DateContainer>

                                <UpvotesContainer>
                                    38 upvotes
                                </UpvotesContainer>

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