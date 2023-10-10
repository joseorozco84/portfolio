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
  <Box sx={{"maxWidth": "100%", "minHeight": "100vh", "backgroundImage": "linear-gradient(315deg, #152526 0.75%, #4d78b9 88.52%)", "backgroundPosition": "center", "backgroundRepeat": "no-repeat", "backgroundSize": "cover"}}>
  <VStack>
  <Navbar/>
  <SimpleGrid columns={[1, 1, 1, 2, 2]} sx={{"marginTop": ["20%", "20%", "10%", "10%", "10%"], "marginBottom": "10%", "borderRadius": "10px", "width": ["90%", "90%", "80%"], "maxWidth": "1200px", "gap": "20px"}}>
  <Box sx={{"backgroundColor": "rgb(20, 20, 20, 0.5)", "boxShadow": "rgba(0, 0, 0, 0.8) 0 15px 30px -10px", "backdropFilter": "blur(5px)", "borderRadius": "10px"}}>
  <VStack sx={{"margin": "2em"}}>
  <Image src={`/pic.jpg`} sx={{"width": ["250px", "300px", "300px"], "size": "xxl", "borderRadius": "1em", "userSelect": "none", "margin": "1em"}}/>
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
