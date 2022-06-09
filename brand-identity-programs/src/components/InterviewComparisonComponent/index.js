import React, { useState } from 'react'

// Images
import Ales from '../../images/Ales.png';
import Filip from '../../images/Filip.png';
import Lumir from '../../images/lumir-dp.png';
import Marek from '../../images/Marek-dp.png';
import Marketa from '../../images/Marketa.png';
import Petr from '../../images/Petr.png';

import {
    InterviewComparisonFlex,
    InterviewSelect,
    Questions,
    AnsweresWrapper,
    AnsweresBox,
    AnswerImage,
    AnswerText1,
    AnswerText2,
    Answer2Image,
    Answer1Wrapper,
    Answer2Wrapper
} from './InterviewComparisonElements';


const InterviewComparison = () => {
    
    const options = [
        { value: 'Lumír Kajnar', label: 'Lumír Kajnar' },
        { value: 'Marek Nedelka', label: 'Marek Nedelka' },
        { value: 'Petr Krejzek', label: 'Petr Krejzek' },
        { value: 'Filip Blažek', label: 'Filip Blažek' },
        { value: 'Markéta Steinert', label: 'Markéta Steinert' },
        { value: 'Aleš Najbrt', label: 'Aleš Najbrt' }
      ];

      const interviews = [
        {   name: 'Lumír Kajnar', 
            img: Lumir,
            Q1: 'v závislosti na uzavřených smlouvách posílám vektorové  (ai, eps, svg), bitmapové (png, jpg) nebo prezentační formáty (pdf, keynote, sdílené Google dokumenty). indesign jsem poslal snad jen párkrát, sazbě a předtiskové přípravě se věnuji jen výjimečně.',
            Q2: 'začíná se objevovat poptávka po předávání/sdílení práce ve Figmě. jinak stále kombinuji prezentační formát (PDF) a zdrojová data (v samostatné složce). ze specializovaných nástrojů doporučuji BrandCloud, pro malé zákazníky zmiňuji výše zmíněný Visualbook.pro. celkově mi nejde ani tak o zrychlení implementace, ale spíše lepší správu značky na straně klienta.',
            Q3: 'a) buď se jedná o normativní dokument, který je součástí vnitřních směrnic nebo procesů. dokument, který si uchovává jistotu a roli arbitra při řešení výjimek. b) nebo předmět PR a interní. c) málokdo ho považuje za organickou záležitost. je s tím totiž spojený strach, že se to rozpadne a hůře bude spravovat. logomanuál si stále v sobě nese prvek jistoty, řádu, konvence, kontitunity. když se objeví výstřelek, je se k čemu vrátit',
            Q4: 'doba je čím dál více customizovaná – věnuji se potřebách klienta. některému stačí jedna koncentrovaná strana v PDF, jiný potřebuje obsáhlý několika set stránkový manuál, pro další značku se vyplatí mít mikrosite nebo nějaká velká platforma typu BrandCloud. nejnáročnější, ale zdá se mi, že nejefektivnější je přenést kompetence na interního grafika nebo tým (workshop, interní komunikace) a kombinovat to sadou šablon v Canvě apod. blízkou budoucnost vidím v plug-inech, v delším horizontu se podle mého bude CI koncentrovat v aplikacích vytvořených na míru, které umožní tvorbu jakéhokoliv sdělení každým zaměstnancem/dodavatelem v příslušných vizuálních mantinelech značky.',
            Q5: 'mohl by se naplno rozvinout potenciál dynamických identit a customizace sdělení podle cílovky, médiatypu a stiuace (lepší provázání s daty).',
            Q6: 'špatné, nedostatečné UI, UX. nepokrytí potřeb/nároků. funguje na specializované věci/aplikace, ale ne plošně/univerzálně (viz problematická implementace dynamických identit). vyšší náklady, hůře obhajitelné u klienta. horší implementace na straně klienta. setrvačnost stávajících platforem/způsobů práce. ale třeba práce s písmem byla před 20 lety problém, dnes je technicky z větší části vyřešena a písmo se prodává dobře. za mě je vše otázka času a nárůstu poptávky po tvorbě nezávislé v každém kroku na profesionálním grafikovi.',
            Q7: 'asi moc ne, snažím se svou prací vytvářet a předkládat takové koncepty, idee a mentální patterny, aby mohli automatizovat svou práci jiní.',
            Q8: 'ne',
            Q9: 'ne',
            Q10: 'základ je stejný. přibylo hodně digitálních formátů a s tím spojená práce s videem, zvukem a interakcí s uživatelem. ohromně se zvýšil výběr a dostupnost vizuálních prvků (písma, databanky). s tím se ale zvýšily nároky na koordinaci práce a udržení původního konceptu. zrychlená komunikace a sdílené projekty začlenily do procesu daleko větší počet lidí. práce dnes není tak lineární, ale více agilní, organická, reaktivní. možná je dnes důležitější věci filtrovat než vymýšlet.',
            Q11: 'klidně různorodě. každá značka může disponovat jinými nástroji nebo specifickým workflow. netrvám na standardizaci, ale relevanci. mělo by to vždy korespondovat s podstatou značky a jejími plány.',
            Q12: '',
        },
        { 
            name: 'Marek Nedelka', 
            img: Marek,
            Q1: 'InDesign, Figma, Word',
            Q2: 'Figma, BrandCloud a pro menší identity i vlastní online manuál pracující s open source šablonou s odkazy na zdrojová data na Drive/Dropbox nebo další úložiště. Celkově oceňuju posun relativně nových softwarů jako je Figma (nebo Google Slides) k sdílení práce. Možnost pracovat simultánně ve více lidech na jednom dokumentu, komentovat, umožňuje pracovat transparentně a efektivně. Design tak není nějaké kouzlení za oponou, ale práce přechází v dialog.',
            Q3: '',
            Q4: 'Vnímám logomanuál primárně jako formu dialogu s klientem. Pokud jde o větší firmu/instituci, je nutné, aby byly myšlenky/principy/návody, jak s identitou zacházet, zaarchivované v nějaké srozumitelné podobě. Čím dál tím více jsem tedy přesvědčen, že v případě identit pro menší subjekty je nejlepší manuál v interaktivním PDF. Ne tak z vlastního přesvědčení, ale ze zkušenosti.V případě identity pro Technickou univerzitu v Liberci jsme zpracovali velký manuál na BrandCloud, ale univerzita jako veřejná instituce stejně potřebuje manuál v PDF pro administrativní účely. Takže stejnou práci stejně děláme dvakrát, pokaždé v jiné podobě.',
            Q5: '',
            Q6: '',
            Q7: '',
            Q8: 'Automatizace by byla fajn, ale vyžaduje bezchybnou kooperaci obou stran. Typ projektů nebo návrhu mi to zatím neumožňoval. Chtěli jsme např. automatizovat vytváření stovek logotypů v různých formátech právě pro Technickou univerzitu v Liberci (fakulty a další pracoviště), ale ukázalo se, že grafický princip tvorby logotypů (využívající kombinování více textových stylů a různé délky názvů) plnou automatizaci neumožňoval. Automatizace musí být od začátku procesu součástí grafického konceptu, aby pak bylo možné vše jednoduše zprocesovat. Z realizovaných projektů z poslední doby jsem spokojen s webu aka online archivem pro architekty SIAL, kde se podařilo zvolením správného principu dostat na web elegantně desítky projektů za desítky let fungování studia. Pro starší firmy je to tvorba webu příležitost, jak si dát dokupy své archivy, které jsou někdy i z analogové éry. Mladší firmy už to mají poměrně hezky připravené na začátku projektu. Ale to je specifické pro tvorbu webů, ne identit.',
            Q9: 'Ne Ale asi bychom si museli ujasnit, co myslíš automatizací práce, protože každý příkaz v softwaru je ve své podstatě automatizací.',
            Q10: '',
            Q11: '',
            Q12: 'Vždy je to vůli ze strany klienta dělat věci správně. S nemotivovanými lidmi identita dobře zavést nejde. Vše je o komunikaci a ne vždy zapálení vydrží a ne vždy výsledek vypadá tak, jak si designér přeje.',
        },
        { 
            name: 'Petr Krejzek',     
            img: Petr, 
            Q1: '(Indesign, Word,…)Standdardně jde o idnd, psd a wordové dokumenty, co se týče otevřených formátů. Předpokládáme ale, že prvotní výstupy půjdou od nás, až poté, co se naučí pravidla definovaná v grafickém manuálu. Většinou již pak jen sledujeme s úžasem, co s tím dál kreativně vytvářejí. Někdy se člověk nestačí divit.' ,
            Q2: 'Šablony typu Canva nepoužíváme, ani online logomanuály. Jsou to generické záležitosti, které určitě mohou zrychlit práci, zároveň vás omezují v míře identity, kterou jako grafický tvůrce chcete držet pevně v ruce. Nesnáším například wordpress, vím, že lze koupit šablony, do nichž si naleješ obsah, nicméně pak vypadá všechno víceméně stejně. Gigantický obrázek homepage a pak už jen scroll. Je fakt, že si na to firmy zvykly a v čím dál větší míře chtějí pracovat v tomto úzusu. Nabalilo se na to spousta firem, kterým šablony usnadnily práci, také to srazilo poměrně ceny, protože takové layouty lze koupit za hubičku.',
            Q3: 'Logomanuál v tom starém smyslu, že klient na výstupu dostane fyzicky těžký fascikl v hezky zpracované a řemeslné podobě, který si zastrčí do knihovny ve třech-deseti kusech jsou už přežitek. Myslím, že flexibilita a tekutost doby si žádá online manuály, ty jdou také v podstatě aktivně doplňovat a měnit podle potřeb, protože častokrát si klient potřebuje doplnit dodělávky vzniklé na základě nutnosti, o níž při počáteční práci na manuálu neměl ani potuchy. Manuály o kterých mluvím jsou většinou statická pdf zavěšená na webových stránkách, lze je proklikat v obsahu, zároveň do nich nikdo, než autor nemůže nic měnit.',
            Q4: 'Ta je určitě obsažena v kapacitě online řešení, to je trendem a tak to bude pokračovat. Dovedu si představit kompletní úložiště, kde v pdf formátu budou linky na jednotlivé šablony, se kterými si pak cizí tvůrci budou pracovat dle definic v manuálu. Manuál je ale stále nějaká konkrétní forma, definuje pravidla ve kterých se pak člověk pohybuje. Jinak by to byla anarchie a bordel, tedy přesně to, co stálo před samotnou podstatou zadání. ',
            Q5: 'Vím, že se tím spousta lidí zabývá, je to trend, před kterým nelze ohnout zrak. Na druhou stranu to pak zabíjí samotnou podstatu designu, tedy nějakého tvůrčího procesu, kdy designér není robotem (byť počítač, jako robotický systém ke své práci užívá), ale aktivním myslícím – a iracionálním – prvkem. O Superinteligenci, která se jednou probudí (dle Bossoma) a odřízne člověka od jeho lidství zatím jen čteme. Jsem vášnivým čtenářem scifi a mám rád, opravdu rád, tyto predikce, ale stále si myslím, že ten prvek lidství je pro nás ještě to stěžejní a neměli bychom se ho zbavovat. Automatizace slouží především k rychlému kapitálu.',
            Q6: '(teď nebo v budoucnu)Určitě pomůže k urychlení těch technických procesů např. kodování, usnadní nám to mnoho kroků se kterými by se člověk mořil hodiny a dny. Ale nedomnívám se, že v dohledné době nahradí moment myšlení. Design je především o tom myslet, nacházet jiné cesty, které ještě nebyly prošlapány. Asi jsem ale idealista a moje názory jsou k smíchu.',
            Q7: 'Asi ještě nejsou vyvinuty algoritmy, které by do procesu navrhování aplikovaly právě ten moment náhody. Stále jsi jen designér, který pracuje s myšlenkou a počítač je nástroj, který ti pomáhá tuhle myšlenku různým způsobem ztělesnit. Představ si, že bys měl partnera, počítačový program, který by nahradil tvého kolegu designéra a přinášel by kreativní nápady. Pokopl by tě k dalšímu kaskádovitému procesu. Ale možná to není odpověď, kterou jsi čekal.',
            Q8: 'Ve své práci takové případy nevyužiju. Tedy pokud nevyužívám scripty pro sazbu, například při sazbě knihy a nahrazení a vyhledávání potřebných znaků. To je pak časově neocenitelné. ',
            Q9: 'Ne, ale určitě, když člověk zpracovává gigantická data nebo například přepis z excelových tabulek do indesignových souborů (při např. Dělání vizitek nebo popisek v masovém měřítku) tam jde o řádově obrovských časových rezervách. A o to jde. Je to jak jsem řekl už: slouží to k rychlému kapitálu:-)',
            Q10: 'Ne, ale možná bych měl začít:-) ',
            Q11: 'Nyní je všechno o systémech. Systémové řešení v grafickém designu de facto pochází (a možná se mýlím) z poloviny 50. Let a je spojeno s tzv mezinárodním stylem, který na základě logických experimentů Bauhausu ve Švýcarsku dovedli do dokonalosti Anton Stankowski, Max Bill nebo Karl Gerstner. Šlo o pragmatickou školu, která, tím, že vycházela ze švýcarsko-bauhausovského naturelu, pomohla nastolit jasná pravidla, co se týče budoucích korporátních tendencí. Mřížka, totální racionalita, přísnost, ale i humanistický status, který tuto tendenci velmi rychle převzali Američani díky emigraci po válce. V době normalizace a speciálně v naší malé kotlině se tahle racionální řešení, která by komplexně definovala nějaký grafický jazyk dostávala do podvědomí grafických designérů velmi pozvolna. Známe typický příklad, prof. Rostislav Vaněk, který s Jiřím Rathouským tyto novátorské principy otevřeli v případu informačního systému pražského metra v 70. Letech. To byl neuvěřitelný počin, který se stal vlastně legendou, jehjich žáci a pokračovatelé se vlastně s tímto procesem popírají dodneška, ostatně právě nyní vyhrál Vaňkův žák a asistent Tomáš Machek a Richardem Jarošem (Side 2) mezinárodní soutěž na novou podobu vizuálu pražského metra. Jenže. Existují i jiné přístupy. Vezmi si punkové hnutí, Jimmyho Reida nebo divokou dekonstruktivní až surrealistickou práci Davida Carsona v 90. Letech. To je zcela jiný přístup, založený na imaginaci, borcení hranic, aktivitě, která se vymyká řádu, pracuje s ošklivostí a záměrně se staví k těmto racionálním tendencím, které v době globalizační, až bych řekl, propagandy, upřednosťovala emoce, vášeň a estetický chaos. Předpokládám, že přijdou nové idee, možná generované AI, které zase změní tohle paradigma.',
            Q12: 'stále by měla být na první místě myšlenka. To je ostatně, jak píše Norman Potter nebo Bruce Sterling základními stavebními kameny jakékoli vizuální identity. Nedokážu předpovědět co bude dalším zlomovým bodem v grafickém designu. Současná generace je stmelena do jednoho klubka, Instagram, Pinterest, Facebook a třeba i Tik Tok:-). Je to dobře? Je to špatně? Nestává se komunitním stádem, které opisuje jeden od druhého a je nasáto konformitou názorů? Mají vlastní myšlenky, zajímá je ještě originalita, něco, co dokáže prolomit hranice? Vizuální identita v roce 2022 bude, předpokládám, stále v intencích tohoto procesu. A předpokládám, že někde už je originální autor, který objeví novou niku, skulinu, kterou předtím ještě nikdo neviděl. Třeba vytvoří vizuál metra z psaného písma.',
        },
        { 
            name: 'Filip Blažek', 
            img: Filip, 
            Q1: 'Most of our clients do not want open data because they do not have the necessary software or font licenses. Exceptionally, we pass templates in Word, InDesign or Photoshop together with open source fonts.' ,
            Q2: 'In recent years, we have been cooperating mainly with such clients with whom we have established long-term cooperation and are in charge of most of their outputs, so templates are not needed.',
            Q3: 'The need for a logo manual persists, nothing changes. However, it is important that the form of the manual meets the needs of the client.            ',
            Q4: 'No. The logomanual is necessary to maintain consistency, however it can be very brief.',
            Q5: 'I believe that automation is in many ways the future of graphic design. The task of the designer will be to define the framework, the principles, not the individual outputs, these should be generated automatically. Thanks to artificial intelligence, it will hopefully be possible to speed up the typesetting of books or magazines, proofreading, etc.',
            Q6: 'I imagine it, for example, that the designer designs the visual of the campaign, creates the optimal shape in height and width and determines the vectors that will guide the individual elements when changing sizes, proportions, etc. Simply that the graphic design gets what already works in the online world: responsiveness. Instead of a detector who spends days editing ad formats, these outputs would be generated automatically.',
            Q7: 'We do not have the right tools.',
            Q8: 'We use our own script to correct typographical errors. We try to use standard automation tools available in Adobe applications. The nature of our orders does not require or allow for sophisticated solutions that automate output generation.',
            Q9: 'Absolutely exceptional, because we do not make large contracts where it would pay off.',
            Q10: 'No',
            Q11: '',
            Q12: "What does not change is that the identity should meet the client's requirements and should be in line with current technological possibilities. And that is a bit of a problem these days. Technology does exist, however",
        },
        { 
            name: 'Markéta Steinert', 
            img: Marketa, 
            Q1: 'indd, eps, ai, word' ,
            Q2: 'Tool for online manuals Brandcloud, XD, Figma',
            Q3: 'Yes, in my opinion they are still needed, but in the online version, so that it is always possible to have only the most current version and files. Files, additional information and previews in one place.',
            Q4: 'Not yet',
            Q5: 'I think that in the future, DTP will be largely dropped out and designers will just set the rules of visual identity.',
            Q6: 'Simplify work for the client, more creative work for designers.',
            Q7: "Clients often still can't appreciate this thing and are not yet used to paying for these tools.",
            Q8: 'Yes, speed up work.',
            Q9: 'Sometimes yes, for easier tasks.',
            Q10: 'To a small extent, yes',
            Q11: 'Thanks to social networks, the number of outputs increased rapidly. There is a need to create more open systems that will work in any format. The logo is less important than before.',
            Q12: 'System focus and good implementation.',
        },
        { 
            name: 'Aleš Najbrt', 
            img: Ales, 
            Q1: 'We send open data in InDesign, but as little as possible.', 
            Q2: 'We mainly use the BrandCloud application for manuals and data sharing.',
            Q3: 'The logo manual is an essential part of every logo for us.',
            Q4: '',
            Q5: 'Within Adobe, we use the maximum possible automation where it makes sense.',
            Q6: '',
            Q7: '',
            Q8: '',
            Q9: '',
            Q10: '',
            Q11: '',
            Q12: 'These are too general questions to answer too long.',
        }
      ]

      const [selectedOptionOne, setselectedOptionOne] = useState({ value: 'Marek Nedelka', label: 'Marek Nedelka' });
      const [selectedOptionTwo, setselectedOptionTwo] = useState({ value: 'Petr Krejzek', label: 'Petr Krejzek' });
      const [interview1, setinterview1] = useState(
        { 
            name: 'Marek Nedelka', 
            img: Marek,
            Q1: 'Marek Nedelka',
            Q2: 'q2',
            Q3: 'q2',
            Q4: 'q2',
            Q5: 'q2',
            Q6: 'q2',
            Q7: 'q2',
            Q8: 'q2',
            Q9: 'q2',
            Q10: 'q2',
            Q11: 'q2',
            Q12: 'q2',
        },);
      const [interview2, setinterview2] = useState(
        { 
            name: 'Petr Krejzek',     
            img: Petr, 
            Q1: 'Petr Krejzek',
            Q2: 'q2',
            Q3: 'q2',
            Q4: 'q2',
            Q5: 'q2',
            Q6: 'q2',
            Q7: 'q2',
            Q8: 'q2',
            Q9: 'q2',
            Q10: 'q2',
            Q11: 'q2',
            Q12: 'q2',
            },
          );

      const handleChangeOne = (event) => {
        setselectedOptionOne(event.target.value);
        let theInterview1 = interviews.find(obj => obj.name === event.target.value);
        setinterview1(theInterview1);
      };

      const handleChangeTwo = (event) => {
        setselectedOptionTwo(event.target.value);
        let theInterview2 = interviews.find(obj => obj.name === event.target.value);
        setinterview2(theInterview2);
      };

    return (
        <>
        {/* Select */}
        <InterviewComparisonFlex>
        <InterviewSelect
            name="select-one"
            searchable={false}
            value={selectedOptionOne}
            onChange={handleChangeOne}>
            {options.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </InterviewSelect>

        <InterviewSelect 
            name="select-two"
            searchable={false}
            value={selectedOptionTwo}
            onChange={handleChangeTwo}>
            {options.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
            
        </InterviewSelect>
        </InterviewComparisonFlex>     

        {/* Answers */}
        {/* -------------------- 1 --------------------- */}
        <Questions>Jaké otevřené soubory klientům posíláte? A v jakých nejčastějších formátech?</Questions>
        <AnsweresWrapper>
            <Answer1Wrapper>
                <AnswerImage src={interview1.img} alt={interview1.name} />
                <AnswerText1><p>{interview1.Q1}</p></AnswerText1>
            </Answer1Wrapper>

            <Answer2Wrapper>
                <AnswerText2><p>{interview2.Q1}</p></AnswerText2>
                <Answer2Image src={interview2.img} alt={interview2.name}  />
            </Answer2Wrapper>
        </AnsweresWrapper>
        {/* -------------------- 2 --------------------- */}
        <Questions>Jaké nástroje používáte pro zrychlení implementace vizuální identity? (Například nástroje na šablony jako např. Canva, online logomanuály, nástroje na míru…)</Questions>
        <AnsweresWrapper>
            <Answer1Wrapper>
                <AnswerImage src={interview1.img} alt={interview1.name} />
                <AnswerText1><p>{interview1.Q2}</p></AnswerText1>
            </Answer1Wrapper>

            <Answer2Wrapper>
                <AnswerText2><p>{interview2.Q2}</p></AnswerText2>
                <Answer2Image src={interview2.img} alt={interview2.name}  />
            </Answer2Wrapper>
        </AnsweresWrapper>
        {/* --------------------3--------------------- */}
        <Questions>Jak vnímáte potřebu logomanuálu v dnešní době?</Questions>
        <AnsweresWrapper>
            <Answer1Wrapper>
                <AnswerImage src={interview1.img} alt={interview1.name} />
                <AnswerText1><p>{interview1.Q3}</p></AnswerText1>
            </Answer1Wrapper>

            <Answer2Wrapper>
                <AnswerText2><p>{interview2.Q3}</p></AnswerText2>
                <Answer2Image src={interview2.img} alt={interview2.name}  />
            </Answer2Wrapper>
        </AnsweresWrapper>
        {/* --------------------4--------------------- */}
        <Questions>Existuje jiná varianta?</Questions>
        <AnsweresWrapper>
            <Answer1Wrapper>
                <AnswerImage src={interview1.img} alt={interview1.name} />
                <AnswerText1><p>{interview1.Q4}</p></AnswerText1>
            </Answer1Wrapper>

            <Answer2Wrapper>
                <AnswerText2><p>{interview2.Q4}</p></AnswerText2>
                <Answer2Image src={interview2.img} alt={interview2.name}  />
            </Answer2Wrapper>
        </AnsweresWrapper>
        {/* --------------------5--------------------- */}
        <Questions>Jaký je váš názor na automatizaci grafického designu?</Questions>
        <AnsweresWrapper>
            <Answer1Wrapper>
                <AnswerImage src={interview1.img} alt={interview1.name} />
                <AnswerText1><p>{interview1.Q5}</p></AnswerText1>
            </Answer1Wrapper>

            <Answer2Wrapper>
                <AnswerText2><p>{interview2.Q5}</p></AnswerText2>
                <Answer2Image src={interview2.img} alt={interview2.name}  />
            </Answer2Wrapper>
        </AnsweresWrapper>
        {/* --------------------6--------------------- */}
        <Questions>Jak by nám mohla pomoct? (teď nebo v budoucnu)</Questions>
        <AnsweresWrapper>
            <Answer1Wrapper>
                <AnswerImage src={interview1.img} alt={interview1.name} />
                <AnswerText1><p>{interview1.Q6}</p></AnswerText1>
            </Answer1Wrapper>

            <Answer2Wrapper>
                <AnswerText2><p>{interview2.Q6}</p></AnswerText2>
                <Answer2Image src={interview2.img} alt={interview2.name}  />
            </Answer2Wrapper>
        </AnsweresWrapper>
        {/* --------------------7--------------------- */}
        <Questions>Proč nefunguje v dnešní době?</Questions>
        <AnsweresWrapper>
            <Answer1Wrapper>
                <AnswerImage src={interview1.img} alt={interview1.name} />
                <AnswerText1><p>{interview1.Q7}</p></AnswerText1>
            </Answer1Wrapper>

            <Answer2Wrapper>
                <AnswerText2><p>{interview2.Q7}</p></AnswerText2>
                <Answer2Image src={interview2.img} alt={interview2.name}  />
            </Answer2Wrapper>
        </AnsweresWrapper>
        {/* --------------------8--------------------- */}
        <Questions>Používáte nástroje pro automatizaci práce? Pokud ano tak jaké a proč?</Questions>
        <AnsweresWrapper>
            <Answer1Wrapper>
                <AnswerImage src={interview1.img} alt={interview1.name} />
                <AnswerText1><p>{interview1.Q8}</p></AnswerText1>
            </Answer1Wrapper>

            <Answer2Wrapper>
                <AnswerText2><p>{interview2.Q8}</p></AnswerText2>
                <Answer2Image src={interview2.img} alt={interview2.name}  />
            </Answer2Wrapper>
        </AnsweresWrapper>
        {/* ---------------------9-------------------- */}
        <Questions>Používáte v programu Indesign funkci „sloučit data“?</Questions>
        <AnsweresWrapper>
            <Answer1Wrapper>
                <AnswerImage src={interview1.img} alt={interview1.name} />
                <AnswerText1><p>{interview1.Q9}</p></AnswerText1>
            </Answer1Wrapper>

            <Answer2Wrapper>
                <AnswerText2><p>{interview2.Q9}</p></AnswerText2>
                <Answer2Image src={interview2.img} alt={interview2.name}  />
            </Answer2Wrapper>
        </AnsweresWrapper>
        {/* ---------------------10-------------------- */}
        <Questions>Používáte v procesu vytváření vizuální identity kreativního kódování?</Questions>
        <AnsweresWrapper>
            <Answer1Wrapper>
                <AnswerImage src={interview1.img} alt={interview1.name} />
                <AnswerText1><p>{interview1.Q10}</p></AnswerText1>
            </Answer1Wrapper>

            <Answer2Wrapper>
                <AnswerText2><p>{interview2.Q10}</p></AnswerText2>
                <Answer2Image src={interview2.img} alt={interview2.name}  />
            </Answer2Wrapper>
        </AnsweresWrapper>
        {/* ---------------------11-------------------- */}
        <Questions>Jak vnímáte, proměnu práce s vizuální identitou od začátku vaší kariéry?</Questions>
        <AnsweresWrapper>
            <Answer1Wrapper>
                <AnswerImage src={interview1.img} alt={interview1.name} />
                <AnswerText1><p>{interview1.Q11}</p></AnswerText1>
            </Answer1Wrapper>

            <Answer2Wrapper>
                <AnswerText2><p>{interview2.Q11}</p></AnswerText2>
                <Answer2Image src={interview2.img} alt={interview2.name}  />
            </Answer2Wrapper>
        </AnsweresWrapper>
        {/* ----------------------12------------------- */}
        <Questions>Jak by podle vás měla vypadat práce s vizuální identitou v roce 2022?</Questions>
        <AnsweresWrapper>
            <Answer1Wrapper>
                <AnswerImage src={interview1.img} alt={interview1.name} />
                <AnswerText1><p>{interview1.Q12}</p></AnswerText1>
            </Answer1Wrapper>

            <Answer2Wrapper>
                <AnswerText2><p>{interview2.Q12}</p></AnswerText2>
                <Answer2Image src={interview2.img} alt={interview2.name}  />
            </Answer2Wrapper>
        </AnsweresWrapper>

        </>
    );
};
  
export default InterviewComparison;