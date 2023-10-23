import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { Event, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, spreadArraysOrObjects, uploadFiles, useEventLoop } from "/utils/state"
import { EventLoopContext, initialEvents, StateContext } from "/utils/context.js"
import "focus-visible/dist/focus-visible"
import { Box, Center, Heading, Image, List, ListItem, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, SimpleGrid, Text, useColorMode, VStack } from "@chakra-ui/react"
import { Navbar } from "/utils/components"
import NextHead from "next/head"



export default function Component() {
  const parent_state = useContext(StateContext)
  const router = useRouter()
  const { colorMode, toggleColorMode } = useColorMode()
  const focusRef = useRef();
  
  // Main event loop.
  const [addEvents, connectError] = useContext(EventLoopContext)

  // Set focus to the specified element.
  useEffect(() => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  })

  // Route after the initial page hydration.
  useEffect(() => {
    const change_complete = () => addEvents(initialEvents.map((e) => ({...e})))
    router.events.on('routeChangeComplete', change_complete)
    return () => {
      router.events.off('routeChangeComplete', change_complete)
    }
  }, [router])


  return (
    <Fragment>
  <Fragment>
  {isTrue(connectError !== null) ? (
  <Fragment>
  <Modal isOpen={connectError !== null}>
  <ModalOverlay>
  <ModalContent>
  <ModalHeader>
  {`Connection Error`}
</ModalHeader>
  <ModalBody>
  <Text>
  {`Cannot connect to server: `}
  {(connectError !== null) ? connectError.message : ''}
  {`. Check if server is reachable at `}
  {`http://localhost:8000`}
</Text>
</ModalBody>
</ModalContent>
</ModalOverlay>
</Modal>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <Box sx={{"maxWidth": "100%", "minHeight": "100vh", "backgroundImage": "linear-gradient(338deg, #090b19 6.75%, #0f1c36 50.75%, #546283 88.52%)", "backgroundPosition": "center", "backgroundRepeat": "no-repeat", "backgroundSize": "cover"}}>
  <VStack>
  <Navbar/>
  <Box sx={{"width": "90%", "maxWidth": "1200px"}}>
  <SimpleGrid columns={[1, 1, 1, 2, 2]} sx={{"marginTop": ["20%", "10%"], "marginBottom": "10%", "gap": "20px"}}>
  <Box sx={{"backgroundColor": "rgb(20, 20, 20, 0.5)", "boxShadow": "rgba(0, 0, 0, 0.8) 0 15px 30px -10px", "backdropFilter": "blur(5px)", "borderRadius": "10px"}}>
  <VStack sx={{"margin": "2em"}}>
  <Image src={`/pic.jpg`} sx={{"width": ["250px", "300px", "300px"], "size": "xxl", "borderRadius": "1em", "userSelect": "none", "margin": "1em", "filter": "saturate(20%)", "_hover": {"filter": "saturate(100%)", "transition": "0.5s"}}}/>
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
