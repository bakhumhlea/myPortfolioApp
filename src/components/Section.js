import React from 'react';
import styled from 'styled-components';
import Wave from './Wave';
import staticdata from '../../staticdata.json';
import WorkItem from './WorkItem';

const SectionGroup = styled.div`
    background: #232323;
    padding: 80px 0 80px 0;
    color: white;
    height: 100vh;
    grid-template-rows: 100px auto;
    position: relative;
    overflow: hidden;
`

const  SectionTitle = styled.h3`
    font-family: 'Josefin Sans';
    text-transform: uppercase;
    font-size: 1.2rem;
    padding: 20px 80px;
    text-align: center;

    @media (max-width: 720px) {
        font-size: 1rem;
        padding: 20px 0 10px 0;
    }
`
const WaveTop = styled.div`
    position: absolute;
    width: 100%;
    transform: rotate(180deg);
    top: -60px;
`
const WaveButtom = styled.div`
    position: absolute;
    width: 100%;
    bottom: -60px;
`

const Section = props => (
    <SectionGroup>
        <WaveTop><Wave /></WaveTop>
        <SectionTitle>Developer</SectionTitle>
        {staticdata.cells.map((cell,index) => (
            <WorkItem 
                key={index}
                title={cell.title}
                content={cell.description}
            />
        ))}
        <WaveButtom>
            <Wave />
        </WaveButtom>
    </SectionGroup>
    
)

export default Section;