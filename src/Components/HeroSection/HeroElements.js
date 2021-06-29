import styled from "styled-components";

export const HeroContainer = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template:
        'home' 
        'about' 
        'education' 
        'caree' 
        'skill' 
        'experience' 
        'get' 
        /1fr
    ; 
    justify-content: center;
    align-items:center;
    grid-row-gap: 36px;
    transition: all 0.2s ease-in-out;
 
    @media screen and (max-width:990px){
        min-height: 600px;
        max-width: 875px;
        transition: all 0.2s ease-in-out;
        margin-right:auto;
        margin-left:auto;
    }

    @media screen and (max-width:767px){
        transition: all 0.2s ease-in-out;
        margin-left: 10px;
        margin-right: 10px;
    }
`
export const HomeContainer = styled.div`
    min-height: 600px;
    max-width: 875px;
    border-radius: 20px;
    background: #6495ED;
    box-shadow: 0px 6px 15px 0px rgb(74 99 231 / 10%);
    padding: 40px 0px 40px 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
export const HomeInfoWrap = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
`
export const HomeInfoH1 = styled.h1`
    font-weight: 800;
    font-size: 64px;
`
export const HomeInfoP= styled.p`
    font-weight: 300;
    font-size: 24px;
`
export const Profile = styled.img`
    max-width: 80%;
    height: auto;
    border-radius: 50%;
    margin: auto;
    @media screen and (max-width:900px){
        max-width: 40%;
        margin: auto;
    }
`

export const AboutMeContainer = styled.div`
    min-height: 550px;
    max-width: 875px;
    border-radius: 20px;
    padding: 65px 10px 50px 50px;
    box-shadow: 0px 6px 15px 0px rgb(74 99 231 / 10%);
    background:#fff;
    color: #000;
`
export const AboutMeWrap = styled.div`
    display: grid;
    grid-template-rows: 1fr 3fr;
    @media screen and (max-width:900px){
        grid-template-rows: 0.5fr 3fr;
    }

`
export const AboutMeInfoWrap = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;

    @media screen and (max-width:900px){
        grid-template-columns: 1fr;
        grid-template-rows: 0.5fr 2fr;
    }
`
export const AboutMeInfoDescWrap = styled.div`
    display: grid;
    grid-template-rows: 0.5fr 1.5fr 2fr;
    margin-top: auto;
    margin-bottom: auto;
`
export const PersonalInfoWrap = styled.div`
    display: grid;
    grid-template:
        'name' 'location' 1fr
        'birthday' 'email' 1fr
        /1fr 1fr
    ;
    @media screen and (max-width:900px){
        text-align: center;
        grid-template:
        'name' 1fr
        'location' 1fr
        'birthday' 1fr
        'email' 1fr
        /1fr
    ;
    }
   
  
`

export const SkillContainer = styled.div`
    min-height: 550px;
    max-width: 875px;
    border-radius: 20px;
    padding: 65px 50px 50px 50px;
    box-shadow: 0px 6px 15px 0px rgb(74 99 231 / 10%);
    background:#fff;
    display: grid;
    grid-template-rows: 1fr 4fr;
    color: #000;
`
export const SkillWrap = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows:1fr 1fr ;
    grid-gap:10px;

    @media screen and (max-width:900px){
        grid-template-columns: 1fr 1fr;
        grid-template-rows:1fr 1fr 1fr 1fr;
    }
`
export const SkillInfoWrap = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    padding: 20px;
    border: solid 1px #EFEFEF;
    transition: all 0.3s ease-in-out;
    display: grid;
    grid-template-rows: 1fr 1fr;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #000;

    &:hover{
        background:#6495ED;
        color: #fff;
    }
`
export const SkillIcon =styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.5rem;
    color: #FF5959;
    transition: all 0.4s ease-in-out;

`
export const SkillText = styled.p`
    font-weight: 800;
    font-size: 16px;
`


export const EducationContainer = styled.div`
    min-height: 300px;
    max-width: 875px;
    border-radius: 20px;
    padding: 65px 10px 50px 50px;
    box-shadow: 0px 6px 15px 0px rgb(74 99 231 / 10%);
    background:#a73b24;
    display: grid;
    grid-template-columns: 1fr 3fr;

    @media screen and (max-width:900px){
        grid-template-columns: 1fr ;
        grid-template-rows:1fr 1fr;
        padding: 50px 50px 50px 50px;
    }
`
export const EduIconWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const EduICon = styled.img`
    width: 80%;
    height: auto;
    @media screen and (max-width:900px){
        width: 40%;
    }
`
export const EduInfoTextWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
`
export const CareeContainer = styled.div`
    min-height: 500px;
    max-width: 875px;
    border-radius: 20px;
    padding: 65px 50px 50px 50px;
    box-shadow: 0px 6px 15px 0px rgb(74 99 231 / 10%);
    background:#fff;
    display: grid;
    grid-auto-rows: 1fr 4fr;
    color: #000;
`
export const CareerWrap = styled.div`
    display: grid;
    grid-column-gap: 10px;
    grid-template-columns: 1fr 1fr;
    @media screen and (max-width:900px){
        grid-template-columns: 1fr;
        grid-template-rows:1fr 1fr;
    }
`
export const CareerIconWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 20px;
    border: solid 1px #EFEFEF;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;

    &:hover{
        background:#6495ED ;
    }
`
export const CareerTextWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 20px;
    border: solid 1px #EFEFEF;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;

    &:hover{
        background:#6495ED ;
        color: #fff;
    }
`
export const CareerIcon = styled.img`
    width: 80%;
    height: auto;
`

export const ExperienceContainer = styled.div`
    min-height: 700px;
    max-width: 875px;
    border-radius: 20px;
    padding: 65px 50px 50px 50px;
    box-shadow: 0px 6px 15px 0px rgb(74 99 231 / 10%);
    background:#fff;
    display: grid;
    grid-template-rows: 1fr 4fr;
    color: #000;
`
export const Timeline = styled.div`
    display: grid;
    grid-template-columns: 1fr 3px 1fr;
    color: #000;
`
export const Timeline_component = styled.div`
    margin: 0 20px 20px 20px;
`
export const Timeline_date_right = styled.div`
    text-align: ${({left}) => (left ? 'left' : 'right')};
`
export const Timeline_middle = styled.div`
    position: relative;
    background: #FF5959;
`
export const Timeline__point = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 15px;
    height: 15px;
    background: #FF5959;
    border-radius: 50%;
`
export const Timeline__component_bg = styled.div`
    padding: 1.5em;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    margin:10px;
    transition: all 0.3s ease-in-out;

    &:hover{
        background:#6495ED;
        color: #fff;
    }
`

export const ContactContainer =styled.div`
    min-height: 350px;
    max-width: 875px;
    border-radius: 20px;
    padding: 65px 50px 50px 50px;
    box-shadow: 0px 6px 15px 0px rgb(74 99 231 / 10%);
    background:#fff;
    margin-bottom:40vh;
    display: grid;
    grid-template-rows: 1fr 2fr;
    color: #000;
`
export const ContactWrap = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
    @media screen and (max-width:900px){
        grid-template-columns: 1fr ;
        grid-template-rows:1fr 1fr 1fr ;
    }
    
`
export const ContactInfoWrap = styled.div`
    color:#FF5959;
    display: grid;
    grid-template-rows: 1fr 2fr;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 10px;
    border:solid 2px #FF5959;
    transition: all 0.3s ease-in-out;

    &:hover{
        background:#FF5959;
        color: #fff;
    }
`
export const ContactIcon = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
`

export const H3 = styled.h3`
    font-weight: 800;
    font-size: 24px;
    margin-bottom: 5%;

    &::after{
        content: "";
        background: #FF5959;
        border-radius: 25px;
        display: block;
        height: 5px;
        margin-top: 14px;
        width: 30px;
    }

`
export const H4 = styled.h4`
    font-weight: 800;
    font-size: 20px;
`
export const P = styled.p`
    font-size: 16px;
    font-weight: 200;
`
export const PStrong = styled.p`
    font-size: 16px;
    font-weight: 300;
`
