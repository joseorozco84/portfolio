import { memo } from "react"
import { E, isTrue } from "/utils/state"
import { Container, Flex, HStack, Image, Link, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Spacer, Text } from "@chakra-ui/react"
import NextLink from "next/link"



export const Navbar = memo(({}) => (
  <Flex sx={{"backdropFilter": "blur(5px)", "position": "fixed", "top": "0", "zIndex": "1", "width": "100%", "alignItems": "center", "justifyContent": "center"}}>
  <Flex sx={{"width": "100%", "maxWidth": "1200px", "minWidth": "50%", "minHeight": "6vh", "padding": "0.5em", "textColor": "white", "fontSize": ["0.8em", "1.8em", "2em", "2em"], "alignItems": "center", "justifyContent": "space-evenly", "overflow": "hidden"}}>
  <Flex>
  <Container>
  <Link as={NextLink} href={`/home`} sx={{"fontWeight": "bold", "_hover": {"color": "green"}, "userSelect": "none"}}>
  {`.home`}
</Link>
</Container>
</Flex>
  <Spacer/>
  <Flex sx={{"justifyContent": "space-between", "alignItems": "center"}}>
  <Container>
  <Link as={NextLink} href={`/portfolio`} sx={{"_hover": {"color": "green"}, "fontWeight": "bold", "userSelect": "none"}}>
  {`.portfolio`}
</Link>
</Container>
  <Spacer/>
  <Container>
  <Link as={NextLink} href={`/about`} sx={{"_hover": {"color": "green"}, "fontWeight": "bold", "userSelect": "none"}}>
  {`.about`}
</Link>
</Container>
  <Spacer/>
  <Container>
  <Menu sx={{"textColor": "black", "border": "hidden"}}>
  <MenuButton sx={{"_hover": {"transition": "0.25s", "textColor": "green"}}}>
  <Text sx={{"fontWeight": "bold", "userSelect": "none"}}>
  {`.contact`}
</Text>
</MenuButton>
  <MenuList>
  <Link as={NextLink} href={`/contact`}>
  <MenuItem sx={{"textColor": "gray", "justifyContent": "left", "_hover": {"bgColor": "#38a169", "textColor": "white"}}}>
  <HStack>
  <Image src={`/email.png`} sx={{"width": "32px"}}/>
  <Text sx={{"fontWeight": "bold", "fontSize": "24px"}}>
  {`Contact me`}
</Text>
</HStack>
</MenuItem>
</Link>
  <MenuDivider/>
  <Link as={NextLink} href={`https://github.com/joseorozco84`} isExternal={true}>
  <MenuItem sx={{"textColor": "gray", "justifyContent": "left", "_hover": {"bgColor": "#38a169", "textColor": "white"}}}>
  <HStack>
  <Image src={`/github.png`} sx={{"width": "32px"}}/>
  <Text sx={{"fontWeight": "bold", "fontSize": "24px"}}>
  {`GitHub`}
</Text>
</HStack>
</MenuItem>
</Link>
  <Link as={NextLink} href={`https://www.linkedin.com/in/jose-orozco-79367143/`} isExternal={true}>
  <MenuItem sx={{"textColor": "gray", "justifyContent": "left", "_hover": {"bgColor": "#38a169", "textColor": "white"}}}>
  <HStack>
  <Image src={`/linkedin.png`} sx={{"width": "32px"}}/>
  <Text sx={{"fontWeight": "bold", "fontSize": "24px"}}>
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
))
