import React from 'react';
import styled from 'styled-components';

const SectionWorkGroup = styled.div`
    display: grid;
    max-width: 75vw;
    margin: 10px auto;
    grid-template-columns: 30% 70%;

    @media (max-width: 720px) {
        max-width: 85vw;
        grid-template-columns: 1fr;
    }
`

const SectionSubTitle = styled.h4`
    font-family: 'Josefin Sans';
    font-size: 1rem;
    
    
    @media (max-width: 720px) {
        padding-bottom: 10px;
    }
`

const SectionText = styled.p`
    font-size: 0.8rem;

    @media (max-width: 720px) {
        font-size: 0.8rem;
    }
`

const WorkItem = (props) => (
    <SectionWorkGroup>
        <SectionSubTitle>{props.title}</SectionSubTitle>
        <SectionText>{props.content}</SectionText>
    </SectionWorkGroup>
)

export default WorkItem;