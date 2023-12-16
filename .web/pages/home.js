
/** @jsxImportSource @emotion/react */import { Fragment } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Box, Center, Heading, Image as ChakraImage, List, ListItem, SimpleGrid, Text, VStack } from "@chakra-ui/react"
import { Navbar } from "/utils/components"
import "focus-visible/dist/focus-visible"
import NextHead from "next/head"



export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <Box sx={{"maxWidth": "100%", "minHeight": "100vh", "backgroundImage": "linear-gradient(338deg, #090b19 6.75%, #0f1c36 50.75%, #546283 88.52%)", "backgroundPosition": "center", "backgroundRepeat": "no-repeat", "backgroundSize": "cover"}}>
  <VStack>
  <Navbar/>
  <Box sx={{"width": "90%", "maxWidth": "1200px"}}>
  <SimpleGrid columns={[1, 1, 1, 2, 2]} sx={{"marginTop": ["20%", "10%"], "marginBottom": "10%", "gap": "20px"}}>
  <Box sx={{"backgroundColor": "rgb(20, 20, 20, 0.5)", "boxShadow": "rgba(0, 0, 0, 0.8) 0 15px 30px -10px", "backdropFilter": "blur(5px)", "borderRadius": "10px"}}>
  <VStack sx={{"margin": "2em"}}>
  <ChakraImage src={`/pic.jpg`} sx={{"width": ["250px", "300px", "300px"], "size": "xxl", "borderRadius": "1em", "userSelect": "none", "margin": "1em", "filter": "saturate(20%)", "_hover": {"filter": "saturate(100%)", "transition": "0.5s"}}}/>
  <Heading sx={{"fontFamily": "monospace", "fontSize": ["1.8em", "2.5em", "3em"], "borderRadius": "0.3em", "textColor": "white", "userSelect": "none"}}>
  {`Hi! I'm Jose`}
</Heading>
  <Text sx={{"textColor": "#2b6cb0", "fontSize": ["1.5em", "1.8em", "2em"], "userSelect": "none"}}>
  {`jr.developer`}
</Text>
</VStack>
</Box>
  <Center sx={{"justifyContent": "space-evenly", "fontWeight": "bold", "fontSize": ["1.5em", "2em", "2em", "2em", "2.5em"], "backgroundColor": "rgb(20, 20, 20, 0.5)", "boxShadow": "rgba(0, 0, 0, 0.8) 0 15px 30px -10px", "backdropFilter": "blur(5px)", "borderRadius": "10px", "minHeight": "350px", "userSelect": "none"}}>
  <List spacing={`1em`} sx={{"margin": "1em"}}>
  <ListItem sx={{"_hover": {"transform": "scale(1.1)", "transition": "0.5s", "color": "#2b6cb0"}}}>
  {`💻 Programming Skills`}
</ListItem>
  <ListItem sx={{"_hover": {"transform": "scale(1.1)", "transition": "0.5s", "color": "#2b6cb0"}}}>
  {`🧩 Problem-Solving`}
</ListItem>
  <ListItem sx={{"_hover": {"transform": "scale(1.1)", "transition": "0.5s", "color": "#2b6cb0"}}}>
  {`🤝 Team Collaboration`}
</ListItem>
  <ListItem sx={{"_hover": {"transform": "scale(1.1)", "transition": "0.5s", "color": "#2b6cb0"}}}>
  {`📂 Project Management`}
</ListItem>
  <ListItem sx={{"_hover": {"transform": "scale(1.1)", "transition": "0.5s", "color": "#2b6cb0"}}}>
  {`🌟 Adaptability`}
</ListItem>
</List>
</Center>
</SimpleGrid>
</Box>
</VStack>
</Box>
  <NextHead>
  <title>
  {`Home`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
