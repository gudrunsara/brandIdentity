import React from 'react';
 import {
    FrontPageHeaderDiv,
    AboutTextDiv,
    AboutText,
    FrontpageGif
} from './FrontPageHeaderElements';
import footerImage from '../../images/footer-img.png';


const FrontPageHeader = () => {
    return (
        <>
        <FrontPageHeaderDiv>
            <AboutTextDiv>
                <AboutText>
                    Logomanuál je nástrojem pro udržení pravidel vizuální identity. Avšak po odevzdání se do něj za nějaký čas málokdo koukne.V dnešní době interaktivních médií musí existovat lepší způsob.Jaká může být práce s vizuální identitou v roce 2022?Na tuto otázku se snažím přijítVv tomto projektu na stáži v atelieru nových médií na UMPRUM.
                </AboutText>
            </AboutTextDiv>
          
           <FrontpageGif src={footerImage} alt="Footer" />
        </FrontPageHeaderDiv>
        </>
    );
};
  
export default FrontPageHeader;