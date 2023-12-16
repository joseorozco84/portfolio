
/** @jsxImportSource @emotion/react */import { memo } from "react"
import { E, isTrue } from "/utils/state"
import { Container, Flex, HStack, Image as ChakraImage, Link, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Spacer, Text } from "@chakra-ui/react"
import NextLink from "next/link"
import "focus-visible/dist/focus-visible"





export const Navbar = memo(({}) => {
    return(
        <Flex sx={{"backgroundColor": "rgb(20, 20, 20, 0.5)", "boxShadow": "rgba(0, 0, 0, 0.8) 0 15px 30px -10px", "backdropFilter": "blur(5px)", "position": "fixed", "top": "0", "zIndex": "1", "width": "100%", "alignItems": "center", "justifyContent": "center"}}>
  <Flex sx={{"width": "100%", "maxWidth": "1200px", "minWidth": "50%", "minHeight": "6vh", "padding": "0.5em", "textColor": "white", "fontSize": ["1em", "1.8em", "2em", "2em"], "alignItems": "center", "justifyContent": "space-evenly", "overflow": "hidden"}}>
  <Flex>
  <Container>
  <Link as={NextLink} href={`/home`} sx={{"_hover": {"color": "#2b6cb0"}, "fontWeight": "bold", "userSelect": "none"}}>
  {`.home`}
</Link>
</Container>
</Flex>
  <Spacer/>
  <Flex sx={{"justifyContent": "space-between", "alignItems": "center"}}>
  <Container>
  <Link as={NextLink} href={`/projects`} sx={{"_hover": {"color": "#2b6cb0"}, "fontWeight": "bold", "userSelect": "none"}}>
  {`.projects`}
</Link>
</Container>
  <Spacer/>
  <Container>
  <Link as={NextLink} href={`/about`} sx={{"_hover": {"color": "#2b6cb0"}, "fontWeight": "bold", "userSelect": "none"}}>
  {`.about`}
</Link>
</Container>
  <Spacer/>
  <Container>
  <Menu sx={{"border": "hidden"}}>
  <MenuButton sx={{"_hover": {"color": "#2b6cb0"}, "fontWeight": "bold", "userSelect": "none"}}>
  <Text sx={{"fontWeight": "bold", "userSelect": "none"}}>
  {`.contact`}
</Text>
</MenuButton>
  <MenuList sx={{"backgroundColor": "rgb(20, 20, 20, 0.95)", "backdropFilter": "blur(5px)", "borderColor": "rgb(20, 20, 20, 0.85)", "boxShadow": "rgba(0, 0, 0, 0.8) 0 15px 30px -10px"}}>
  <Link as={NextLink} href={`/contact`} sx={{"_hover": {"textDecoration": "none"}}}>
  <MenuItem sx={{"textColor": "gray", "justifyContent": "left", "_hover": {"bgColor": "#2b6cb0", "textColor": "white"}, "bgColor": "inherit"}}>
  <HStack>
  <ChakraImage src={`/email_white.png`} sx={{"width": "32px"}}/>
  <Text sx={{"fontWeight": "bold", "fontSize": "20px"}}>
  {`Contact me`}
</Text>
</HStack>
</MenuItem>
</Link>
  <MenuDivider/>
  <Link as={NextLink} href={`https://github.com/joseorozco84`} isExternal={true} sx={{"_hover": {"textDecoration": "none"}}}>
  <MenuItem sx={{"textColor": "gray", "justifyContent": "left", "_hover": {"bgColor": "#2b6cb0", "textColor": "white"}, "bgColor": "inherit"}}>
  <HStack>
  <ChakraImage src={`/github_white.png`} sx={{"width": "32px"}}/>
  <Text sx={{"fontWeight": "bold", "fontSize": "20px"}}>
  {`GitHub`}
</Text>
</HStack>
</MenuItem>
</Link>
  <Link as={NextLink} href={`https://www.linkedin.com/in/jose-orozco-79367143/`} isExternal={true} sx={{"_hover": {"textDecoration": "none"}}}>
  <MenuItem sx={{"textColor": "gray", "justifyContent": "left", "_hover": {"bgColor": "#2b6cb0", "textColor": "white"}, "bgColor": "inherit"}}>
  <HStack>
  <ChakraImage src={`/linkedin_white.png`} sx={{"width": "32px"}}/>
  <Text sx={{"fontWeight": "bold", "fontSize": "20px"}}>
  {`LinkedIn`}
</Text>
</HStack>
</MenuItem>
</Link>
</MenuList>
</Menu>
</Container>
</Flex>
</Flex>
</Flex>
      )

})
