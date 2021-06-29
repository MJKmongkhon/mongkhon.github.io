import React,{ useState,useEffect,useContext } from 'react'
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
    NameH1,BtnClose
} from './PageLayout'
import { FaBars } from 'react-icons/fa'
import ProfileImg from '../Images/profile.jpg'
import { closeContact } from '../Components/Sidebar'
 
const Home = () => {
    const isClose = useContext(closeContact)
    const [isOpen,setOpen] = useState(false)
    const toggle = () => {
        setOpen(!isOpen)
    }
    useEffect(() => {
    console.log(isClose)
    }, [isClose])

    return (
        <>
        <MobileContaner>
            <MobileWrapper>
                <MobileIcon><FaBars onClick={toggle}/></MobileIcon>
                <ProfileWrap><Profile src={ProfileImg}/></ProfileWrap>
                <NameH1>Mongkhon.{isClose}</NameH1>
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
