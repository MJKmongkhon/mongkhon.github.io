import React from 'react'
import ProfileImg from '../../Images/profile.jpg'
import kku from '../../Images/kkulogo.png'
import CareerObj from '../../Images/programming.svg'
import {
    HeroContainer, 
    HomeContainer, 
    AboutMeContainer, 
    SkillContainer,
    EducationContainer,
    CareeContainer,
    ExperienceContainer,
    ContactContainer,
    HomeInfoWrap,
    HomeInfoH1,
    HomeInfoP,
    AboutMeWrap,
    H3,
    AboutMeInfoWrap,
    Profile,
    AboutMeInfoDescWrap,
    H4,P,PStrong,
    PersonalInfoWrap,
    EduICon,EduIconWrap,
    EduInfoTextWrap,CareerWrap,
    CareerIconWrap,CareerTextWrap,CareerIcon,
    Timeline,Timeline_component,Timeline_date_right,
    Timeline__point,Timeline_middle,Timeline__component_bg,
    SkillWrap,SkillInfoWrap,SkillIcon,SkillText,ContactWrap,ContactInfoWrap,ContactIcon

} from './HeroElements'
import { GoGist, GoDatabase } from "react-icons/go";
import { FaNodeJs, FaReact, FaPython, FaPhoneAlt, FaLocationArrow } from "react-icons/fa";
import { MdSatellite, MdEmail } from "react-icons/md";
import { BsGeoAlt } from "react-icons/bs";
import { GiEarthAmerica } from "react-icons/gi";

const Hero = () => {
    return (
        <>
                <HeroContainer>
                    <HomeContainer id='home'>
                        <HomeInfoWrap>
                            <HomeInfoH1>
                                My name's Mongkon.
                            </HomeInfoH1>
                            <HomeInfoP>
                                Hello everyone welcome to my Website. And thank you for your interested!!!
                            </HomeInfoP>
                        </HomeInfoWrap>
                    </HomeContainer>
                    <AboutMeContainer id='about'>
                        <AboutMeWrap>
                            <H3>About Me</H3>
                            <AboutMeInfoWrap>
                                <Profile src={ProfileImg} />
                                <AboutMeInfoDescWrap>
                                    <H4>Hello,</H4>
                                    <PStrong>I'm Mongkhon web/web GIS developer. I have full stack web developer skill, GIS knowledge and Remote Sensing, also I am good at database/spatial database.</PStrong>
                                    <PersonalInfoWrap>
                                        <div>
                                            <PStrong>Name:</PStrong><P>Mongkhon butpheng</P>
                                        </div>
                                        <div>
                                            <PStrong>Location:</PStrong><P>Sakhonnakorn,TH</P>
                                        </div>
                                        <div>
                                            <PStrong>Birthday:</PStrong><P>24 September 1998</P>
                                        </div>
                                        <div>
                                            <PStrong>Email:</PStrong><P>buhtpeng@gmail.com</P>
                                        </div>
                                    </PersonalInfoWrap>
                                </AboutMeInfoDescWrap>
                            </AboutMeInfoWrap>
                        </AboutMeWrap>
                    </AboutMeContainer>
                    <EducationContainer id='education'>
                        <EduIconWrap>
                            <EduICon src={kku}/>
                        </EduIconWrap>
                            <EduInfoTextWrap>
                                <H4>B.Sc. (Geo-informatics) Khonkaen university</H4>
                                <PStrong>Major : Design and development of geographic information systems </PStrong>
                                <PStrong>GPA : 3.37 ( 2nd class honors ) </PStrong>
                            </EduInfoTextWrap>
                    </EducationContainer>
                    <CareeContainer id='career'>
                        <H3>Career Objective</H3>
                        <CareerWrap>
                            <CareerIconWrap>
                                <CareerIcon src={CareerObj} />
                            </CareerIconWrap>
                            <CareerTextWrap>
                                <P>Want to integrate programming skills and Geo-informatics knowledge and be ready to learn new technology or new programming language for the growth of the organization as well as to enhance my knowledge about new and emerging trends</P>
                            </CareerTextWrap>
                        </CareerWrap>
                    </CareeContainer>
                    <SkillContainer id='skill'>
                        <H3>Skills</H3>
                        <SkillWrap>
                            <SkillInfoWrap>
                                <SkillIcon><GoGist /></SkillIcon>
                                <SkillText>Full Stack Developer</SkillText>
                            </SkillInfoWrap>
                            <SkillInfoWrap>
                                <SkillIcon><FaNodeJs /></SkillIcon>
                                <SkillText>Node JS</SkillText>
                            </SkillInfoWrap>
                            <SkillInfoWrap>
                                <SkillIcon><FaReact /></SkillIcon>
                                <SkillText>React JS</SkillText>
                            </SkillInfoWrap>
                            <SkillInfoWrap>
                                <SkillIcon><FaPython /></SkillIcon>
                                <SkillText>Python</SkillText>
                            </SkillInfoWrap>
                            <SkillInfoWrap>
                                <SkillIcon><GoDatabase /></SkillIcon>
                                <SkillText>Database</SkillText>
                            </SkillInfoWrap>
                            <SkillInfoWrap>
                                <SkillIcon><BsGeoAlt /></SkillIcon>
                                <SkillText>GIS</SkillText>
                            </SkillInfoWrap>
                            <SkillInfoWrap>
                                <SkillIcon><MdSatellite /></SkillIcon>
                                <SkillText>Remote Sensing</SkillText>
                            </SkillInfoWrap>
                            <SkillInfoWrap>
                                <SkillIcon><GiEarthAmerica /></SkillIcon>
                                <SkillText>Geospatial Analysis</SkillText>
                            </SkillInfoWrap>
                        </SkillWrap>
                    </SkillContainer>
                    <ExperienceContainer id='experience'>
                        <H3>Experience</H3>
                        <Timeline>
                            <Timeline_component>
                                <Timeline_date_right>2019</Timeline_date_right>
                            </Timeline_component>
                            <Timeline_middle>
                                <Timeline__point></Timeline__point>
                            </Timeline_middle>
                            <Timeline__component_bg>
                                <H4>TEACHING ASSISTANT</H4>
                                <PStrong>- Introduction to geographic information system</PStrong>
                            </Timeline__component_bg>
                            <Timeline__component_bg>
                                <H4>TEACHING ASSISTANT</H4>
                                <PStrong>- Fundamentals of remote sensing</PStrong>
                                <PStrong>- Design and standard geo-spatial database</PStrong>
                            </Timeline__component_bg>
                            <Timeline_middle>
                                <Timeline__point></Timeline__point>
                            </Timeline_middle>
                            <Timeline_component>
                                <Timeline_date_right left={true}>2019</Timeline_date_right>
                            </Timeline_component>
                            <Timeline_component>
                                <Timeline_date_right>December 2020 –  April 2021</Timeline_date_right>
                            </Timeline_component>
                            <Timeline_middle>
                                <Timeline__point></Timeline__point>
                            </Timeline_middle>
                            <Timeline__component_bg>
                                <H4>INTERNSHIP</H4>
                                <PStrong>- D.T.C. Enterprise Co., Ltd </PStrong>
                                <P>- Research methods and technologies used in the development of the LINE chatbot and create a prototype.</P>
                                <P>- Automatic Sentinel-2 satellite imagery classification system</P>
                            </Timeline__component_bg>
                        </Timeline>
                    </ExperienceContainer>
                    <ContactContainer id='contact'>
                        <H3>Get In Contact</H3>
                        <ContactWrap>
                            <ContactInfoWrap>
                                <ContactIcon><FaPhoneAlt /></ContactIcon>
                                <div>
                                    <SkillText>Phon Number</SkillText>
                                    <PStrong>+66821586215</PStrong>
                                </div>
                            </ContactInfoWrap>
                            <ContactInfoWrap>
                                <ContactIcon><MdEmail /></ContactIcon>
                                <div>
                                    <SkillText>Email address</SkillText>
                                    <PStrong>buhtpeng@gmail.com</PStrong>
                                </div>
                            </ContactInfoWrap>
                            <ContactInfoWrap>
                                <ContactIcon><FaLocationArrow /></ContactIcon>
                                <div>
                                    <SkillText>Location</SkillText>
                                    <PStrong>128 No.8 Srivichai Wanonniwat Sakhonnakorn 47120 </PStrong>
                                </div>
                            </ContactInfoWrap>
                        </ContactWrap>
                    </ContactContainer>
                </HeroContainer>
            
        </>
    )
}

export default Hero
