import React from 'react';
import jQuery from 'jquery'

// Images
import Ales from '../../images/Ales.png';
import Filip from '../../images/Filip.png';
import Lumir from '../../images/Lumir.png';
import Marek from '../../images/Marek.png';
import Marketa from '../../images/Marketa.png';
import Petr from '../../images/Petr.png';

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
} from './interviewsOverviewElements';

    function onHoverBlack(e, id){
        console.log('hovered!! ', id, 'jq: ', jQuery('#hoverText' + id));
        jQuery('#hoverText' + id).show();
        jQuery('#hoverImg'+ id).css({ filter:'blur(4px)' });
    }

    function onHoverWhite(e, id){
        console.log('hovered!! ', id, 'jq: ', jQuery('#hoverText' + id));
        jQuery('#hoverText' + id).show();
        jQuery('#hoverText'+ id).css({ color:'white' });
        jQuery('#hoverImg'+ id).css({ filter:'blur(4px)' });
    }

    function onHoverOut(e, id){
        console.log('out!! ', id, 'jq: ', jQuery('#hoverText' + id));
        jQuery('#hoverText' + id).hide();
        jQuery('#hoverImg' + id).css({ filter:'blur(0px)' });
    }

const Programs = () => {
    return (
        <>
        <PageTitle>Vyber si rozhovor a porovnej</PageTitle>

        {/* Programs links */}
        <FrontPageLinkComponentLinks>

            <FrontPageLinkComponentProgramy onMouseOver={(e)  => onHoverWhite(e, 1)} onMouseOut={(e)  => onHoverOut(e, 1)} id='linkBox1'>
                <FrontPageLinkComponentLink to='/interviews-comparison'>
                    <OnHoverText id='hoverText1'>Na začátku 90. let pracoval jako art director časopisu Reflex a šéfredaktor časopisu Raut. V roce 1994 s Pavlem Lvem založili Studio Najbrt. Za svoje filmové a divadelní plakáty, knihy a další práce získal Grand Prix 17. bienále grafického designu Brno 1996, pět Českých lvů i Czech Grand Design 2007. </OnHoverText>
                    <FrontPageLinkComponentLinkText>Aleš Najbrt</FrontPageLinkComponentLinkText>
                    <FrontPageLinkComponentImg id='hoverImg1' src={Ales} alt="Ales" />
                </FrontPageLinkComponentLink >
            </FrontPageLinkComponentProgramy>

            <FrontPageLinkComponentRozhovory id='linkBox2' onMouseOver={(e)  => onHoverBlack(e, 2)} onMouseOut={(e)  => onHoverOut(e, 2)}>
            <FrontPageLinkComponentLink to='/interviews-comparison'>
            <OnHoverText id='hoverText2'>Během studíí se stal zakládajícím členem umělecké skupiny Bratrstvo, kde se podílí na fotografických, malířských a hudebních projektech sdružení. Od roku 1995 je jako editor, designér a fotograf v časopise Živel, jehož koncepci a design dělá dodnes. Za svou práci získal řadu ocenění (ED Awards, Bienále Brno, Nejkrásněší knihy ČR). Od roku 2014 je vedoucím pedagogem v atelieru Grafický design a vizuální komunikace na UMPRUM v Praze. </OnHoverText>
                <FrontPageLinkComponentLinkText>Petr Krejzek</FrontPageLinkComponentLinkText>
                <FrontPageLinkComponentImg id='hoverImg2' src={Petr} alt="Footer Image" />
                </FrontPageLinkComponentLink >
            </FrontPageLinkComponentRozhovory>

            <FrontPageLinkComponentZdroje id='linkBox3' onMouseOver={(e)  => onHoverWhite(e, 3)} onMouseOut={(e)  => onHoverOut(e, 3)}>
            <FrontPageLinkComponentLink to='/interviews-comparison'>
                <OnHoverText id='hoverText3'>JSpecializuje se na vizuální branding, vytváření brand identity a komerční komunikace. V reklamě pracuje od roku 2000. Je několikanásobným držitelem ocenění z festivalů Golden Drum v Portoroži, cen Louskáček, vítězem Young Lions Cannes za Českou republiku a jeho reklamy získaly dvakrát status finalisty na festivalu v Cannes.</OnHoverText>
                <FrontPageLinkComponentLinkText>Lumír Kajnar</FrontPageLinkComponentLinkText>
                <FrontPageLinkComponentImg id='hoverImg3' src={Lumir} alt="Footer Image" />
                </FrontPageLinkComponentLink >
            </FrontPageLinkComponentZdroje>

            <FrontPageLinkComponentProgramy id='linkBox4' onMouseOver={(e)  => onHoverBlack(e, 4)} onMouseOut={(e)  => onHoverOut(e, 4)}>
                <FrontPageLinkComponentLink to='/interviews-comparison'>
                    <OnHoverText id='hoverText4'>Je autorem Typoknihy a spoluautorem Praktické typografie, pravidelně přispívá do odborných periodik. Byl zakladatelem a členem redakce časopisu Typo a projektu 365typo. Od roku 1999 připravuje pro odbornou veřejnost přednášky na téma písmo a corporate identity. Vyučuje na Vysoké škole uměleckoprůmyslové a na ARCHIPu. Je členem mezinárodní organizace ATypI a zakládajícím členem Unie grafického designu.</OnHoverText>
                    <FrontPageLinkComponentLinkText>Filip Blažek</FrontPageLinkComponentLinkText>
                    <FrontPageLinkComponentImg id='hoverImg4' src={Filip} alt="Footer Image" />
                </FrontPageLinkComponentLink >
            </FrontPageLinkComponentProgramy>

            <FrontPageLinkComponentRozhovory id='linkBox5' onMouseOver={(e)  => onHoverWhite(e, 5)} onMouseOut={(e)  => onHoverOut(e, 5)}>
            <FrontPageLinkComponentLink to='/interviews-comparison'>
            <OnHoverText id='hoverText5'>Vystudoval architekturu na Technické univerzitě v Liberci a grafický design na pražské UMPRUM, Zabývá se především tištěnými a digitálními projekty v převážně z oblasti architektury, designu a kultury obecně. Za svoje návrhy knih a plakátů získal řadu ocenění a také Red Dot v kategorii Best of best za vizuální identitu mmcité+</OnHoverText>
                <FrontPageLinkComponentLinkText>Marek Nedelka</FrontPageLinkComponentLinkText>
                <FrontPageLinkComponentImg id='hoverImg5' src={Marek} alt="Footer Image" />
                </FrontPageLinkComponentLink >
            </FrontPageLinkComponentRozhovory>

            <FrontPageLinkComponentZdroje id='linkBox6' onMouseOver={(e)  => onHoverWhite(e, 6)} onMouseOut={(e)  => onHoverOut(e, 6)}>
            <FrontPageLinkComponentLink to='/interviews-comparison'>
                <OnHoverText id='hoverText6'>Absolvovala Ateliér grafického designu a vizuální komunikace na Vysoké škole uměleckoprůmyslové v Praze. Specializuje se na tvorbu vizuálních identit. Na svém kontě má například návrh vizuální identity Czech Ski and Snowboard, řetězce drogerie Teta. Vizuální identity měst Chrudim a Svitavy, nebo propagaci posledních pěti ročníků Letní filmové školy Uherské Hradiště.</OnHoverText>
                <FrontPageLinkComponentLinkText>Markéta Steinert</FrontPageLinkComponentLinkText>
                <FrontPageLinkComponentImg id='hoverImg6' src={Marketa} alt="Footer Image" />
                </FrontPageLinkComponentLink >
            </FrontPageLinkComponentZdroje>


        </FrontPageLinkComponentLinks>
        </>
    );
};
  
export default Programs;