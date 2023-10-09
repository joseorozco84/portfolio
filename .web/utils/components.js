import { memo } from "react"
import { E, isTrue } from "/utils/state"
import { Container, Flex, Link, Spacer } from "@chakra-ui/react"
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
  <Link as={NextLink} href={`/contact`} sx={{"_hover": {"color": "green"}, "fontWeight": "bold", "userSelect": "none"}}>
  {`.contact`}
</Link>
</Container>
</Flex>
</Flex>
</Flex>
))
