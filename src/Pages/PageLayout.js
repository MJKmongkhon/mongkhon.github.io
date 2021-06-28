import styled from "styled-components";


export const PageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    transition: all 0.2s ease-in-out;

    @media screen and (max-width:990px){
        margin-top: 20px;
    }
    
    
` 
export const PageLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-column-gap: 30px;
    transition: all 0.2s ease-in-out;

    @media screen and (max-width:990px){
        grid-template-columns: ${({isOpen}) => (isOpen ? '1fr 3fr' : '1fr')};
        width: 100%;
        height: 100%;
        box-align:center;
    }

`
export const SidebadGrid = styled.div`
    width: 280px;
    height: 600px;
    position: sticky;
    transition: all 0.2s ease-in-out;

    @media screen and (max-width:990px){
        display: ${({isOpen}) => (isOpen ? 'block' : 'none')};
    }
    
`
export const HeroGrid = styled.div`
    color: #fff;
   
`
export const MobileContaner = styled.div`
    position: relative;
    max-width: 875px;
    height: 60px;
    background:#6495ED;
    display: none;
    padding:0px 20px ;
    margin-top: 24px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 20px;
    transition: all 0.2s ease-in-out;

    @media screen and (max-width:990px){
       display: block;
    }
    @media screen and (max-width:767px){
        transition: all 0.2s ease-in-out;
        margin-left: 10px;
        margin-right: 10px;
    }
`
export const MobileWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`  
export const ProfileWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    margin-right:10px;
`
export const Profile = styled.img`
    max-width: 42px;
    height: auto;
    border-radius: 50%;
`
export const MobileIcon = styled.div`
    display: flex;
    margin-top: auto;
    margin-bottom: auto;
    color: #fff;
    font-size: 2rem;
    cursor: pointer;
`
export const NameH1 = styled.h1`
    font-size: 32px;
    font-weight:800;
    color: #fff;
`


