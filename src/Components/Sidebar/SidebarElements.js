import styled from "styled-components";
import { Link } from "react-scroll";

export const SidebarContainer = styled.aside`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: fixed;
    width: 280px;
    height: 600px;
    padding: 20px;
    background: #6495ED;
    border-radius: 20px;
`
export const SidebarWrap = styled.div`
    display: grid;
    flex-direction: column;
    grid-template:
        'row1' 3fr
        'row2' 1fr
        'row3' 6fr
        /1fr
    ;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 100%;
`
export const ProfileWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    grid-area: row1;
`
export const Profile = styled.img`
    max-width: 60%;
    height: auto;
    border-radius: 50%;
`
export const ProfileInfoWrap = styled.div`
    display: grid;
    grid-template:
        'h1' 2fr
        'p' 1fr
        /1fr
    ;
    align-items: flex-start;
    justify-content: flex-start;
    grid-area: row2;
    width: 100%;
    height: 100%;
    padding-left: 10px;
    color: #fff;
`
export const NameH1 = styled.h1`
    font-size: 32px;
    font-weight:800;
    grid-area: h1;
`
export const InfoP = styled.p`
    font-size: 16px;
    font-weight: 200;
    grid-area: p;
    
`
export const SidebarMenuWrap = styled.div`
    color: #fff;
    width: 100%;
    height: 100%;
    padding: 20px 10px;
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(7,40px);
    align-items: center;
`
export const SidebarLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 1rem;
    text-decoration: none;
    list-style: none;
    transition: 0.5s ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover{
        color: pink;
    }
    &:active{
        transform: scale(1.1,1.1);
    }
`
export const SidebarLinkIcon = styled.div`
    max-width: 50%;
    height: auto;
    margin-right: 10px;
    display: flex;
    align-items: center;
`
export const BtnClose = styled.button`
    outline: none;
    padding: 0;
    background-color: #FFF;
    border: 0;
    -webkit-appearance: none;
    opacity: 1;
    color: #FF5959;
    font-weight: 400;
    font-size: 16px;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    line-height: 22px;
    margin-top: 16px;
    margin-right: 18px;
    position: absolute;
    z-index: 1;
    cursor: pointer;
    top: 0;
    right:0 ;
    display: none;
    @media screen and (max-width:990px){
        display: block;
    }
`
