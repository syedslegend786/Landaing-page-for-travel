import React, { useState } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import Logo from '../Logo/Logo'
import './nav.css'
import { Link } from 'react-scroll'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useMediaQuery } from 'react-responsive'
const NavBar = () => {
    const [sliderCtrl, setsliderCtrl] = useState(false)
    const isMobile = useMediaQuery({ maxWidth: 640 })
    const links = [
        { name: 'HOME', to: '/' },
        { name: 'ABOUT', to: '/' },
        { name: 'EXPLORE', to: '/' },
    ]
    const navItems = () => (
        <div>
            <Items >
                {
                    links.map((val, index) => {
                        return (
                            <Item>
                                {val.name}
                            </Item>
                        )
                    })
                }
            </Items>

        </div>
    )
    const navForDesktop = () => (
        <Desktop>
            {
                links.map((val, index) => {
                    return (
                        <DesktopItem>
                            {val.name}
                        </DesktopItem>
                    )
                })
            }
        </Desktop>
    )
    const open = () => {
        setsliderCtrl(true)
    }
    const close = () => {
        setsliderCtrl(false)
    }
    return (
        <Container>
            <Logo />
            {
                isMobile
                    ? <>
                        <GiHamburgerMenu onClick={open} className='text-lg cursor-pointer ' />
                        <Slider sliderCtrl={sliderCtrl}>
                            <div className=' flex justify-end'>
                                <span onClick={close} className='cursor-pointer my-4 mx-4 h-7 w-7 bg-yellow-500 text-red-600 rounded-full text-center flex justify-center items-center'>X</span>
                            </div>
                            {navItems()}
                        </Slider>
                    </>
                    :
                    navForDesktop()
            }
            { }
        </Container>
    )
}
const DesktopItem = styled.div`
position: relative;
&:after {
    content: "";
    height: 2px;
    width: 100%;
    background-color: black;
    position: absolute;
    left: 0;
    display: none;
  }
  &:hover{
      &:after{
          display: block;
      }
  }
${tw`cursor-pointer`}
`

const Desktop = styled.div`
${tw`flex space-x-6`}
`
const Slider = styled.div`
transform:${(props) => props.sliderCtrl ? 'translateX(0)' : "translateX(100vw)"};
${tw`fixed height[100%] bg-green-500 width[50%] top-0 right-0 
transition-all duration-700 z-10
`}
`
const Item = styled.div`
${tw`block text-center py-4 hover:bg-indigo-500 cursor-pointer
transition-all transition-duration[300ms]
`}
`
const Items = styled.div`
${tw`flex flex-col `}
`
const Container = styled.div`
${tw`!flex items-center h-12  width[80%] m-auto  border-black border-b-2
justify-between
transition-all transition-duration[300ms]
`}
`
export default NavBar
