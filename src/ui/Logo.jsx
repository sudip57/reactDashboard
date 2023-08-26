import styled from 'styled-components'
import { useDarkMode } from '../context/DarkModeContext'
import { useEffect, useState } from 'react'

const StyledLogo = styled.div`
  text-align: center;
`

const Img = styled.img`
  height: 9.6rem;
  width: 13rem;
`

function Logo() {
  const [imageLoaded, setImageLoaded] = useState(false)
  const { isDarkMode } = useDarkMode()
  const src = isDarkMode ? '/logo-dark.png' : '/logo-light.png'
  useEffect(() => {
    const img = new Image()
    img.src = src
    img.onload = () => {
      // The image has been preloaded
      setImageLoaded(true)
    }
  }, [src])
  return (
    <StyledLogo>{imageLoaded ? <Img src={src} alt="logo" /> : null}</StyledLogo>
  )
}

export default Logo
