import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { Event, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, spreadArraysOrObjects, uploadFiles, useEventLoop } from "/utils/state"
import { EventLoopContext, initialEvents, StateContext } from "/utils/context.js"
import "focus-visible/dist/focus-visible"
import { Box, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, SimpleGrid, Text, useColorMode, VStack } from "@chakra-ui/react"
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
  <Box sx={{"maxWidth": "100%", "minHeight": "100vh", "backgroundImage": "linear-gradient(338deg, #090b19 6.75%, #313d57 50.75%, #835454 88.52%)", "backgroundPosition": "center", "backgroundRepeat": "no-repeat", "backgroundSize": "cover"}}>
  <VStack>
  <Navbar/>
  <Box sx={{"maxWidth": "1200px", "gap": "20px"}}>
  <SimpleGrid columns={[1, 1, 1, 2, 2]} sx={{"marginTop": ["20%", "10%"], "marginBottom": "10%", "width": "90%"}}>
  <Box>
  <VStack>
  <Text>
  {`Repo #1`}
</Text>
  <Text>
  {`Repo #2`}
</Text>
  <Text>
  {`Repo #3`}
</Text>
</VStack>
</Box>
</SimpleGrid>
</Box>
</VStack>
</Box>
  <NextHead>
  <title>
  {`Portfolio -> Repositories`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
