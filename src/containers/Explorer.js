import React from 'react'
import styled from 'styled-components'
import { Element } from 'react-scroll'
import tw from 'twin.macro'
import MyCrousel from '../components/MyCrousel/MyCrousel'
const Explorer = () => {
    return (
        <Container name='Explorer'>
            <MyCrousel />
        </Container>
    )
}
const Container = styled(Element)`
${tw`h-screen w-full mt-1 `}
`
export default Explorer
