import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'
import cimage from '../../assets/1.jpg'

const MyCrousel = () => {
    return (
        <Container>
            <Heading>Explore new things</Heading>
            <Description>Let's explore new place for
                making yourself a healthy and active personaliity
                okay..
            </Description>
            <Carousel dynamicHeight={false} autoPlay emulateTouch>
                <CItem dynamicHeight={false}>
                    <img src={cimage} alt='' />
                    <ItemDescription>
                        hi.
                    </ItemDescription>
                </CItem>
                <CItem dynamicHeight={false}>
                    <img src={cimage} alt='' />
                    <ItemDescription>
                        hi.
                    </ItemDescription>
                </CItem>
            </Carousel>
        </Container>
    )
}
const Description = styled.p`
${tw`text-center tracking-widest mb-6`}
`
const Heading = styled.h1`
${tw`text-5xl uppercase font-bold text-center`}
`
const ItemDescription = styled.div`
${tw`absolute bottom-9 left[45%] 
bg-black! font-bold py-1 px-4 rounded-2xl text-center  z-10 text-white text-2xl
w-auto 
`}
`
const CItem = styled.div`
${tw`w-full h-full relative`}
`
const Container = styled.div`
${tw`height[100%] width[100%] relative m-auto mt-1
sm:height[60%] sm:width[70%] lg:width[50%] md:width[60%] xl:width[40%]
`}
`
export default MyCrousel
