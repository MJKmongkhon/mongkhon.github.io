import React,{ useState } from 'react'
import { 
    SidebarContainer,
    SidebarWrap, 
    ProfileWrap, 
    Profile, 
    ProfileInfoWrap, 
    NameH1, 
    InfoP,
    SidebarMenuWrap,
    SidebarMenu,
    SidebarLink,
    SidebarLinkIcon,
    BtnClose

} from '../../Components/Sidebar/SidebarElements'
import ProfileImg from '../../Images/profile.jpg'
import { AiFillHome } from 'react-icons/ai' 
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaUniversity } from 'react-icons/fa' 
import { GiStairsGoal, GiPerspectiveDiceThree } from 'react-icons/gi'
import { HiAcademicCap, HiMail } from "react-icons/hi";

const Sidebar = () => {
    return (
        <>
              <SidebarContainer>
                <SidebarWrap>
                    <ProfileWrap>
                        <BtnClose>
                            <span aria-hidden="true">×</span>
                        </BtnClose>
                        <Profile src={ProfileImg}/>
                    </ProfileWrap>
                    <ProfileInfoWrap>
                        <NameH1>Mongkhon.</NameH1>
                        <InfoP>Web Developer</InfoP>
                    </ProfileInfoWrap>
                   <SidebarMenuWrap>
                       <SidebarMenu>
                           <SidebarLink
                            to='home'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                           >
                               <SidebarLinkIcon><AiFillHome />
                                    </SidebarLinkIcon>Home
                               </SidebarLink>
                           <SidebarLink
                            to='about'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                           >
                               <SidebarLinkIcon>
                                   <BsFillPersonLinesFill />
                               </SidebarLinkIcon>About</SidebarLink>
                           <SidebarLink
                            to='education'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                           >
                               <SidebarLinkIcon>
                                   <FaUniversity />
                               </SidebarLinkIcon>Eucation</SidebarLink>
                           <SidebarLink
                            to='career'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                           >
                               <SidebarLinkIcon>
                                   <GiStairsGoal />
                                </SidebarLinkIcon>Career Objective</SidebarLink>
                           <SidebarLink
                            to='skill'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                           >
                               <SidebarLinkIcon>
                                   <GiPerspectiveDiceThree />
                                </SidebarLinkIcon>Skill</SidebarLink> 
                           <SidebarLink
                            to='experience'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                           >
                               <SidebarLinkIcon>
                                    <HiAcademicCap />
                                </SidebarLinkIcon>Experience</SidebarLink>
                           <SidebarLink
                            to='contact'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                           >
                               <SidebarLinkIcon>
                                    <HiMail />
                                </SidebarLinkIcon>Get in Contactt</SidebarLink>
                       </SidebarMenu>
                   </SidebarMenuWrap>
                </SidebarWrap>
            </SidebarContainer>
        </>
    )
}

export default Sidebar
