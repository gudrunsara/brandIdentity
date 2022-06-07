import React from 'react';
import jQuery from 'jquery'

import Canva from '../../images/Canva.png';
import GraphicStandard from '../../images/Graphic-Standard.png';
import LucidPress from '../../images/Lucid-press.png';

import {
    PageTitle,
    FrontPageLinkComponentLinks,
    FrontPageLinkComponentProgramy,
    FrontPageLinkComponentRozhovory,
    FrontPageLinkComponentZdroje,
    FrontPageLinkComponentImg,
    FrontPageLinkComponentLink,
    FrontPageLinkComponentLinkText,
    OnHoverText,
} from './ProgramsComponentElements';

(function($) {
    $(document).ready(function() {
        // Linkbox1 
        $("#linkBox1").mouseover(function(){
            $('#hoverText1Programs1').show();
            $('#hoverImg1').css({ filter:'blur(4px)' });
        });
        $("#linkBox1").mouseout(function(){
            $('#hoverText1Programs1').hide();
            $('#hoverImg1').css({ filter:'blur(0px)' });
        });

        // Linkbox2
        $("#linkBox2").mouseover(function(){
            $('#hoverText1Programs2').show();
            $('#hoverImg2').css({ filter:'blur(4px)' });
        });
        $("#linkBox2").mouseout(function(){
            $('#hoverText1Programs2').hide();
            $('#hoverImg2').css({ filter:'blur(0px)' });
        });

        // Linkbox3
        $("#linkBox3").mouseover(function(){
            $('#hoverText1Programs3').show();
            $('#hoverImg3').css({ filter:'blur(4px)' });
        });
        $("#linkBox3").mouseout(function(){
            $('#hoverText1Programs3').hide();
            $('#hoverImg3').css({ filter:'blur(0px)' });
        });


    });
})(jQuery);

const Programs = () => {
    return (
        <>
        <PageTitle>Poznej programy</PageTitle>

        {/* Programs links */}
        <FrontPageLinkComponentLinks>

            <FrontPageLinkComponentProgramy id='linkBox1'>
                <FrontPageLinkComponentLink to='/programs'>
                    <OnHoverText id='hoverText1Programs1'>Je intuitivní platforma z USA pro tvorbu designu a šablon značek, která usnadňuje vytváření a sdílení značkových materiálů. Lucidpress nabízí efektivní vizuální konzistenci. Více než 5 milionů lidí používá Lucidpress k vytváření, přizpůsobování, kontrole a distribuci obsahu své značky.</OnHoverText>
                    <FrontPageLinkComponentLinkText>Lucid Press</FrontPageLinkComponentLinkText>
                    <FrontPageLinkComponentImg id='hoverImg1' src={LucidPress} alt="Footer Image" />
                </FrontPageLinkComponentLink >
            </FrontPageLinkComponentProgramy>

            <FrontPageLinkComponentRozhovory id='linkBox2'>
            <FrontPageLinkComponentLink to='/interviews'>
            <OnHoverText id='hoverText1Programs2'>Je platforma pro grafický design, která slouží k vytváření grafiky pro sociální média, prezentací, plakátů, dokumentů a dalšího vizuálního obsahu pomocí představených šablon. S připlacením vyšších verzí můžete nahrát i vlastní písmo, popřípadě svoje odstavcové styly a barevnosti.</OnHoverText>
                <FrontPageLinkComponentLinkText>Canva</FrontPageLinkComponentLinkText>
                <FrontPageLinkComponentImg id='hoverImg2' src={Canva} alt="Footer Image" />
                </FrontPageLinkComponentLink >
            </FrontPageLinkComponentRozhovory>

            <FrontPageLinkComponentZdroje id='linkBox3'>
            <FrontPageLinkComponentLink to='/links'>
                <OnHoverText id='hoverText1Programs3'>Je platforma na efektivnější prací s vizuálními styli s pokročilými funkcemi zaměřenými na zrychlení práce. Vytvořená v České republice.
Aplikace ještě nebyla oficiálně představená.</OnHoverText>
                <FrontPageLinkComponentLinkText>Graphic Standard</FrontPageLinkComponentLinkText>
                <FrontPageLinkComponentImg id='hoverImg3' src={GraphicStandard} alt="Footer Image" />
                </FrontPageLinkComponentLink >
            </FrontPageLinkComponentZdroje>
        </FrontPageLinkComponentLinks>
        </>
    );
};
  
export default Programs;