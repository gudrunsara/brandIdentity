import React from 'react';
import jQuery from 'jquery'

// Images
import Canva from '../../images/Canva.png';
import GraphicStandard from '../../images/Graphic-Standard.png';
import LucidPress from '../../images/Lucid-press.png';
import Ex from '../../images/ex.png';
import CZ from '../../images/CZ.png';
import AUS from '../../images/AUS.png';
import USA from '../../images/USA.png';


import {
    PageTitle,
    ProgramsComparisonWrapper,
    ProgramsComparisonFlex,
    ProgramsComparisonHeaderImg,
    ExSign,
    LanguageIcon,
    PurpleDiv,
    GrayDiv,
    GreenDiv,
    FrontPageLinkComponentLink,
    LinkText,
    DivisionLine,
    HeaderH2,
    LightH2,
    TitleH2Strong
} from './ProgramsComparisonElements';

(function($) {
    $(document).ready(function() {
    
    });
})(jQuery);

const ProgramsComparison = () => {
    return (
        <>
        <PageTitle>Porovnávání programů</PageTitle>

        {/* First */}

        <ProgramsComparisonWrapper>
            <ProgramsComparisonFlex>
                <div>
                    <GrayDiv>
                        <FrontPageLinkComponentLink to='/programs'>
                            <LinkText>Graphic Standard</LinkText>
                            <ProgramsComparisonHeaderImg src={GraphicStandard} alt="GraphicStandard" />
                        </FrontPageLinkComponentLink >
                    </GrayDiv>
                    <h3>Graphic Standard je platforma na efektivnější prací s vizuálními styli s pokročilými funkcemi zaměřenými na zrychlení práce. Vytvořená v České republice. Aplikace ještě nebyla oficiálně představená.</h3>
                </div>
                <div>

                    <GreenDiv>
                        <FrontPageLinkComponentLink to='/programs'>
                            <LinkText>Lucid Press</LinkText>
                            <ProgramsComparisonHeaderImg src={LucidPress} alt="LucidPress" />
                        </FrontPageLinkComponentLink >
                    </GreenDiv>
                    <h3>Lucidpress je intuitivní platforma z USA pro tvorbu designu a šablon značek, která usnadňuje vytváření a sdílení značkových materiálů. Na vaší značce záleží a Lucidpress nabízí konzistenci, kterou vaše značka potřebuje, aby mohla efektivně předat své poselství všude, kam se dostane.</h3>
                </div>
                <div>
                    <PurpleDiv>
                        <FrontPageLinkComponentLink to='/programs'>
                            <LinkText>Canva</LinkText>
                            <ProgramsComparisonHeaderImg src={Canva} alt="Canva" />
                        </FrontPageLinkComponentLink >
                    </PurpleDiv>
                    <h3>Canva je platforma pro grafický design, která slouží k vytváření grafiky pro sociální média, prezentací, plakátů, dokumentů a dalšího vizuálního obsahu pomocí představených šablon. S připlacením vyšších verzí můžete nahrát i vlastní písmo, popřípadě svoje odstavcové stylya barevnosti.</h3>
                </div>
            </ProgramsComparisonFlex>

            {/* --------- */}
            <HeaderH2>
                Nahrávání šablon
            </HeaderH2>
            <DivisionLine></DivisionLine>
            <ProgramsComparisonFlex>
                <div>
                    <h2>InDesign</h2>
                    <p>Pošlete operátorovi, který vám pomůže šablonu vytvořit co nejefektivněji.</p>
                </div>

                <div>
                    <h2>InDesign</h2>
                    <p>Nahrajete samya v samotné aplikaci můžete zamknout neměné prvky.</p>
                </div>

                <div>
                    <h2>PDF beta</h2>
                    <p>Pnahrajete samy. Jedná se o novinku, tedy nemůžete nahrát více než 15 stran a text se často nahradí jiným písmem.</p>
                </div>
            </ProgramsComparisonFlex>

            {/* --------- */}
            <HeaderH2>
                Logomanuál
            </HeaderH2>
            <DivisionLine></DivisionLine>
            <ProgramsComparisonFlex>
                <div>
                    <p>Vytvoření samostatné stránky v aplikaci. Navadí vás na vytvoření minimálního manuálu s volnou rukou při vytváření dalších pravidel. Šablony jsou úzce spojeny právě s pravidly definovanými v logomanuálu.</p>
                </div>

                <div>
                    <p>Jde nahrát upravitelná detailní online verze logomanuálu.</p>
                </div>

                <div>
                    <p>Aplikace nabízí funkci Brand Kid: kde můžete  nahrát své logo, barevost, odstíny a odstavcové styly ve smyslu nahrání písma a jeho velikosti. Canva nepodporuje úpravu prokladu. Všechny šablony se potom rychle přemění podle vybraných písem a barev.</p>
                </div>
            </ProgramsComparisonFlex>

            {/* --------- */}
            <HeaderH2>
                Pravidla české typografie
            </HeaderH2>
            <DivisionLine></DivisionLine>
            <ProgramsComparisonFlex>
                <div>
                    <p>Program dokáže odstranit jednoduché typografické chyby v textu jako je jednoznaková předložka.</p>
                </div>

                <div>
                    <ExSign src={Ex} alt="Ex" />
                </div>

                <div>
                    <ExSign src={Ex} alt="Ex" />
                </div>
            </ProgramsComparisonFlex>

            {/* --------- */}
            <HeaderH2>
                Kontorla DTP
            </HeaderH2>
            <DivisionLine></DivisionLine>
            <ProgramsComparisonFlex>
                <div>
                    <p>Při uploadu fotografií systém automaticky kontroluje rozlišení fotografií, do určité míry je opravuje nebo upozorní uživatele v okamžiku, kdy je rozlišení již nedostatečné. Kontrolujeme za vás kvalitu obrázků, tak ať se můžete spolehnout, že tisk dopadne dobře.</p>
                </div>

                <div>
                    <ExSign src={Ex} alt="Ex" />
                </div>

                <div>
                    <ExSign src={Ex} alt="Ex" />
                </div>
            </ProgramsComparisonFlex>

            {/* --------- */}
            <HeaderH2>
                Tvoření v aplikaci 
            </HeaderH2>
            <DivisionLine></DivisionLine>
            <ProgramsComparisonFlex>
                <div>
                    <ExSign src={Ex} alt="Ex" />
                </div>

                <div>
                    <p>Samotný nástroj má jednoduché rozhraní pro tvorbu geometrických tvarů a úpravy textu</p>
                </div>

                <div>
                    <p>Obsahuje jednoduchý nástroj pro vytváření šablon</p>
                </div>
            </ProgramsComparisonFlex>

             {/* --------- */}
             <HeaderH2>
                Data automatizace  
            </HeaderH2>
            <DivisionLine></DivisionLine>
            <ProgramsComparisonFlex>
                <div>
                    <ExSign src={Ex} alt="Ex" />
                </div>

                <div>
                    <p>Samotný nástroj má jednoduché rozhraní pro tvorbu geometrických tvarů a úpravy textu</p>
               </div>

                <div>
                    <ExSign src={Ex} alt="Ex" />
                </div>
            </ProgramsComparisonFlex>

            {/* --------- */}
            <HeaderH2>
                Země výrobce
            </HeaderH2>
            <DivisionLine></DivisionLine>
            <ProgramsComparisonFlex>
                <div>
                    <LanguageIcon src={CZ} alt="Footer" />
                </div>

                <div>
                    <LanguageIcon src={USA} alt="Footer" />
               </div>

                <div>
                    <LanguageIcon src={AUS} alt="Footer" />
                </div>
            </ProgramsComparisonFlex>

            {/* --------- */}
            <HeaderH2>
                Tisknout z aplikace
            </HeaderH2>
            <DivisionLine></DivisionLine>
            <ProgramsComparisonFlex>
                <div>
                    <h2>Pouze v Čr</h2>
                    <p>Aplikace vám nabídne funkci tisknout. Má svojí databázi kvalitních tiskáren, které se postarají o kvalitu. Můžete si vybrat papír, popřípadě nějakým zpusovem zušlechtit tiskovinu. Tato funkce je dostupná pouze pro Českou republiku.</p>
                </div>

                <div>
                    <h2>Pouze v USA</h2>
                    <p>Aplikace vám sama nabídne funkci tisknout. Má svojí databázi kvalitních tiskáren, které se postarají o kvalitu. Funkce je dostupná pro celé spojené státy americké. </p>
                </div>

                <div>
                    <ExSign src={Ex} alt="Ex" />
                </div>
            </ProgramsComparisonFlex>

             {/* --------- */}
             <HeaderH2>
                Cena
            </HeaderH2>
            <DivisionLine></DivisionLine>
            <ProgramsComparisonFlex>
                <div>
                    <p><strong>Zatím neupřesněno</strong></p>
                </div>

                <div>
                    <TitleH2Strong>Základní:</TitleH2Strong> <LightH2>Zdarma</LightH2>
                    <p>Nahrání 3 šablon</p>

                    <TitleH2Strong>Pro:</TitleH2Strong> <LightH2>10 $/měsíc</LightH2> 
                    <p>Knihovna fotek a icon, neomezený počet dokumentů, neomezený počet stran dokumentu, premium šablony, Základní zamikání šablon</p>

                    <TitleH2Strong>Busness:</TitleH2Strong>  <LightH2>Kontkatovat společnos</LightH2>  
                    <p>Knihovna fotek a icon, neomezený počet dokumentů, neomezený počet stran dokumentu, premium šablony, Pokročilé zamikání šablon, Automatizace dat</p>
                </div>

                <div>
                    <TitleH2Strong>Základní:</TitleH2Strong> <LightH2>Zdarma</LightH2>
                    <p>Otevřená knihovna 250 000 šablon, Bez možnosti nahrání vlastního písma. </p>

                    <TitleH2Strong>Pro:</TitleH2Strong> <LightH2>19.99 $/rok</LightH2> 
                    <p>Knihovna fotek a icon, neomezený počet dokumentů, neomezený počet stran dokumentu, premium šablony, Základní zamikání šablon</p>

                    <TitleH2Strong>Podniky:</TitleH2Strong> <LightH2>30 $/měsíc</LightH2> 

                    <p>Neomezené uložiště, Brand Kid, ukládání vlastních šablon, Kontrola týmu nad držením jednotné vizuální identity. Neziskovky: Zdarma Canva Pro může být poskytnuta neziskovým organizacím zdarma, pokud splňují stanovené podmínky.</p>   

                    <TitleH2Strong>Neziskovky:</TitleH2Strong> <LightH2>Zdarma</LightH2>   
                    <p>Canva Pro může být poskytnuta neziskovým organizacím zdarma, pokud splňují stanovené podmínky.</p>        
                </div>
            </ProgramsComparisonFlex>
        </ProgramsComparisonWrapper>
        </>
    );
};
  
export default ProgramsComparison;