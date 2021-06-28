import React,{ useState } from 'react'
import Sidebar from '../Components/Sidebar'
import Hero from '../Components/HeroSection'
import { 
    PageLayout, 
    SidebadGrid, 
    HeroGrid,
    PageContainer, 
    MobileContaner, 
    MobileWrapper, 
    MobileIcon,
    ProfileWrap, 
    Profile,
    NameH1
} from './PageLayout'
import { FaBars } from 'react-icons/fa'
import ProfileImg from '../Images/profile.jpg'
 
const Home = () => {
    const [isOpen,setOpen] = useState(false)
    const toggle = () => {
        setOpen(!isOpen)
    }
    return (
        <>
        <MobileContaner>
            <MobileWrapper>
                <MobileIcon><FaBars onClick={toggle}/></MobileIcon>
                <ProfileWrap><Profile src={ProfileImg}/></ProfileWrap>
                <NameH1>Mongkhon.</NameH1>
            </MobileWrapper>
        </MobileContaner>
        <PageContainer>
            <PageLayout isOpen={isOpen}>
                <SidebadGrid isOpen={isOpen}>
                  <Sidebar/>
                </SidebadGrid>
                <HeroGrid>
                    <Hero />
                </HeroGrid>
            </PageLayout>
        </PageContainer>
        </>
    )
}

export default Home
