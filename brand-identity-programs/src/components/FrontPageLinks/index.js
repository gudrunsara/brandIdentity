import React from 'react';
// import {Link} from 'react-router';
import Canva from '../../images/Canva.png';
import Petr from '../../images/Petr.png';


import {
    FrontPageLinkComponentLinks,
    FrontPageLinkComponentProgramy,
    FrontPageLinkComponentRozhovory,
    FrontPageLinkComponentZdroje,
    FrontPageLinkComponentImg,
    FrontPageLinkComponentLink,
    FrontPageLinkComponentLinkText,
    FrontPageLinkComponentLinkTextLast
} from './FrontPageLinksComponents';
const FrontPageLinks = () => {
    return (
        <>
        <FrontPageLinkComponentLinks>
            <FrontPageLinkComponentProgramy>
                <FrontPageLinkComponentLink to='/programs'>
                    <FrontPageLinkComponentLinkText>Programy</FrontPageLinkComponentLinkText>
                    <FrontPageLinkComponentImg src={Canva} alt="Canva" />
                </FrontPageLinkComponentLink >
            </FrontPageLinkComponentProgramy>

            <FrontPageLinkComponentRozhovory>
            <FrontPageLinkComponentLink to='/interviews'>
                <FrontPageLinkComponentLinkText>Rozhovory</FrontPageLinkComponentLinkText>
                <FrontPageLinkComponentImg src={Petr} alt="Petr" />
                </FrontPageLinkComponentLink >
            </FrontPageLinkComponentRozhovory>

            <FrontPageLinkComponentZdroje>
            <FrontPageLinkComponentLink to='/links'>
                <FrontPageLinkComponentLinkTextLast>Zdroje</FrontPageLinkComponentLinkTextLast>
                </FrontPageLinkComponentLink >
            </FrontPageLinkComponentZdroje>
        </FrontPageLinkComponentLinks>
        </>
    );
};

export default FrontPageLinks;