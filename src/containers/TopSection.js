import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import NavBar from '../components/Navbar/NavBar'
import BGImage from './../assets/1.jpg'
import { BsFillArrowDownCircleFill } from 'react-icons/bs'
import { Link } from 'react-scroll'
const TopSection = () => {
    return (
        <div className=''>
            <TopContainer>
                <NavBar />
                <TextContainer>
                    <RightCont>
                        <SimpleText>world</SimpleText>
                        <SimpleText className='flex'>of <StrokedText className='ml-7'>paradise,</StrokedText> </SimpleText>
                        <SimpleText className='flex'>Pakistan <StrokedText className='ml-7'>!</StrokedText></SimpleText>
                        <Description>
                            Pakista is in the top ten tourist country in the world. No , dounbt every one in the world know pakistan for his beauty and beautifull people , who are loving and caring for their visitors.
                        </Description>
                    </RightCont>
                    <Link to='Explorer' smooth={true} duration={500}>
                        < BsFillArrowDownCircleFill className='absolute bottom-3 left-1/2 right-1/2 text-white text-2xl cursor-pointer animate-bounce' />
                    </Link>
                </TextContainer>
            </TopContainer>
        </div>
    )
}
const Description = styled.p`
${tw`text-white text-sm tracking-wider whitespace-pre-line width[80%]`}
`
const StrokedText = styled.h1`
color: transparent;
-webkit-text-stroke: 2px white;
${tw`uppercase `}
`
export const SimpleText = styled.h1`
${tw`  lg:text-9xl sm:text-7xl text-6xl font-bold uppercase text-white`}
`
const RightCont = styled.div`
${tw`absolute left[20px] top[9%]`}
`
const TextContainer = styled.div`
${tw`w-full height[90%] relative`}
`
const TopContainer = styled.div`
${tw`h-screen relative`}
background-image: url(${BGImage}) , linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(135,255,127,1) 0%, rgba(223,250,255,1) 100%);
background-position: bottom left top right;
background-repeat: no-repeat;
background-size: cover;
`
export default TopSection
