import React, { useState } from 'react'

// Images
import Ales from '../../images/Ales.png';
import Filip from '../../images/Filip.png';
import Lumir from '../../images/lumir-dp.png';
import Marek from '../../images/lumir-dp.png';
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
            Q11: 'klidně různorodě. každá značka může disponovat jinými nástroji nebo specifickým workflow. netrvám na standardizaci, ale relevanci.',
            Q12: 'mělo by to vždy korespondovat s podstatou značky a jejími plány.',
        },
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
        },
        { 
            name: 'Petr Krejzek',     
            img: Petr, 
            Q1: 'Petr Krejzek' ,
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
        { 
            name: 'Filip Blažek', 
            img: Filip, 
            Q1: 'Filip Blažek' ,
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
        { 
            name: 'Markéta Steinert', 
            img: Marketa, 
            Q1: 'Markéta Steinert' ,
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
        { 
            name: 'Aleš Najbrt', 
            img: Ales, 
            Q1: 'Aleš Najbrt', 
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

        <p>1: {selectedOptionOne.value}</p>
        <p>1: {selectedOptionTwo.value}</p>

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