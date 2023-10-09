import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { E, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, uploadFiles, useEventLoop } from "/utils/state"
import { EventLoopContext, StateContext } from "/utils/context.js"
import "focus-visible/dist/focus-visible"
import { Box, Center, Heading, Image, List, ListItem, SimpleGrid, Text, useColorMode, VStack } from "@chakra-ui/react"
import { Navbar } from "/utils/components"
import NextHead from "next/head"


export default function Component() {
  const modal_state = useContext(StateContext)
  const router = useRouter()
  const { colorMode, toggleColorMode } = useColorMode()
  const focusRef = useRef();
  
  // Main event loop.
  const [Event, notConnected] = useContext(EventLoopContext)

  // Set focus to the specified element.
  useEffect(() => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  })

  // Route after the initial page hydration.
  useEffect(() => {
    const change_complete = () => Event([E('modal_state.hydrate', {})])
    router.events.on('routeChangeComplete', change_complete)
    return () => {
      router.events.off('routeChangeComplete', change_complete)
    }
  }, [router])


  return (
  <Fragment><Fragment>
  <Box sx={{"maxWidth": "100%", "minHeight": "100vh", "backgroundImage": "/code_des.jpg", "backgroundPosition": "center", "backgroundRepeat": "no-repeat", "backgroundSize": "cover"}}>
  <VStack>
  <Navbar/>
  <SimpleGrid columns={[1, 1, 1, 2, 2]} sx={{"marginTop": ["15%", "15%", "10%", "10%", "10%"], "marginBottom": "10%", "borderRadius": "5px", "width": ["90%", "90%", "80%"], "maxWidth": "1200px", "gap": "20px"}}>
  <Box sx={{"backdropFilter": "blur(5px)", "borderRadius": "10px", "_hover": {"transform": "scale(1.05)", "transition": "0.5s"}}}>
  <VStack sx={{"margin": "2em"}}>
  <Image src={`/pic.jpg`} sx={{"width": ["250px", "350px", "350px"], "size": "xxl", "borderRadius": "1em", "userSelect": "none", "margin": "1em"}}/>
  <Heading sx={{"fontFamily": "monospace", "fontSize": ["1.8em", "2.5em", "3em"], "borderRadius": "0.3em", "textColor": "white", "textShadow": "0px 0px 10px black", "userSelect": "none"}}>
  {`Hi! I'm Jose`}
</Heading>
  <Text sx={{"textColor": "green", "fontSize": ["1.5em", "1.8em", "2em"], "userSelect": "none"}}>
  {`jr.developer`}
</Text>
</VStack>
</Box>
  <Center sx={{"justifyContent": "space-evenly", "fontWeight": "bold", "fontSize": ["1.5em", "2em", "2em", "2em", "2.5em"], "backdropFilter": "blur(5px)", "borderRadius": "10px", "minHeight": "350px", "userSelect": "none"}}>
  <List spacing={`1em`} sx={{"margin": "1em"}}>
  <ListItem sx={{"_hover": {"transform": "scale(1.1)", "transition": "0.5s", "color": "darkgreen"}}}>
  {`💻 Programming Skills`}
</ListItem>
  <ListItem sx={{"_hover": {"transform": "scale(1.1)", "transition": "0.5s", "color": "darkgreen"}}}>
  {`🧩 Problem-Solving`}
</ListItem>
  <ListItem sx={{"_hover": {"transform": "scale(1.1)", "transition": "0.5s", "color": "darkgreen"}}}>
  {`🤝 Team Collaboration`}
</ListItem>
  <ListItem sx={{"_hover": {"transform": "scale(1.1)", "transition": "0.5s", "color": "darkgreen"}}}>
  {`📂 Project Management`}
</ListItem>
  <ListItem sx={{"_hover": {"transform": "scale(1.1)", "transition": "0.5s", "color": "darkgreen"}}}>
  {`🌟 Adaptability`}
</ListItem>
</List>
</Center>
</SimpleGrid>
</VStack>
</Box>
  <NextHead>
  <title>
  {`Reflex App`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
    </Fragment>
  )
}
