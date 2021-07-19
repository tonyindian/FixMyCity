import React from 'react';
import {  Main, ButtonContainer, TitleContainer, FetschingContainer, AddressContainer, DateContainer, UpvotesContainer} from './ProfileStyled';
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

                            <FetschingContainer>
                                
                                <AddressContainer>
                                    <p className='issue'>Broken bench</p>
                                    Argauerstrasse 12, 8005 Zürich
                                </AddressContainer>

                                <UpvotesContainer>
                                    <DateContainer>
                                    May 2021
                                    </DateContainer>
                                    <p className='upvotes'>38 upvotes</p>
                                </UpvotesContainer>

                            </FetschingContainer>

                        <ButtonContainer>
                            <button>More...</button>
                        </ButtonContainer>

                </Main>
        </>
    )
}
export default LastReport