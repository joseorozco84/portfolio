import { memo } from "react"
import { E, isTrue } from "/utils/state"
import { Container, Flex, Link, Spacer } from "@chakra-ui/react"
import NextLink from "next/link"



export const Navbar = memo(({}) => (
  <Flex sx={{"backgroundColor": "rgb(1, 1, 1, 0.15)", "backdropFilter": "blur(5px)", "position": "fixed", "top": "0", "zIndex": "1", "width": "100%", "alignItems": "center", "justifyContent": "center"}}>
  <Flex sx={{"width": "100%", "maxWidth": "1200px", "minWidth": "50%", "minHeight": "6vh", "padding": "0.5em", "textColor": "white", "fontSize": ["0.8em", "1.8em", "2em", "2em"], "alignItems": "center", "justifyContent": "space-evenly", "overflow": "hidden"}}>
  <Flex>
  <Container>
  <Link as={NextLink} href={`/home`} sx={{"fontFamily": "monospace", "fontWeight": "bold", "_hover": {"color": "darkred"}, "userSelect": "none"}}>
  {`.home`}
</Link>
</Container>
</Flex>
  <Spacer/>
  <Flex sx={{"justifyContent": "space-between", "alignItems": "center"}}>
  <Container>
  <Link as={NextLink} href={`/portfolio`} sx={{"fontFamily": "monospace", "_hover": {"color": "darkred"}, "fontWeight": "bold", "userSelect": "none"}}>
  {`.portfolio`}
</Link>
</Container>
  <Spacer/>
  <Container>
  <Link as={NextLink} href={`/about`} sx={{"fontFamily": "monospace", "_hover": {"color": "darkred"}, "fontWeight": "bold", "userSelect": "none"}}>
  {`.about`}
</Link>
</Container>
  <Spacer/>
  <Container>
  <Link as={NextLink} href={`/contact`} sx={{"fontFamily": "monospace", "_hover": {"color": "darkred"}, "fontWeight": "bold", "userSelect": "none"}}>
  {`.contact`}
</Link>
</Container>
</Flex>
</Flex>
</Flex>
))
