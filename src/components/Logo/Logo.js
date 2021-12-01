import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const Logo = () => {
    return (
        <LogoStyled>
            Salleh.T
        </LogoStyled>
    )
}
const LogoStyled = styled.div`
${tw`text-2xl font-semibold tracking-widest font-family[monospace]`}
`
export default Logo
