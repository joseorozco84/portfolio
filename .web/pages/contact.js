import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { E, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, set_val, uploadFiles, useEventLoop } from "/utils/state"
import { EventLoopContext, StateContext } from "/utils/context.js"
import "focus-visible/dist/focus-visible"
import { Box, Button, Container, Input, SimpleGrid, Text, Textarea, useColorMode, VStack } from "@chakra-ui/react"
import { Navbar } from "/utils/components"
import NextHead from "next/head"


export default function Component() {
  const state = useContext(StateContext)
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
    const change_complete = () => Event([E('state.hydrate', {})])
    router.events.on('routeChangeComplete', change_complete)
    return () => {
      router.events.off('routeChangeComplete', change_complete)
    }
  }, [router])

  const ref_message = useRef(null); refs['ref_message'] = ref_message;
  const ref_name = useRef(null); refs['ref_name'] = ref_name;

  return (
  <Fragment><Fragment>
  <Box sx={{"maxWidth": "100%", "minHeight": "100vh", "backgroundImage": "/code_des.jpg", "backgroundPosition": "center", "backgroundRepeat": "no-repeat", "backgroundSize": "cover"}}>
  <VStack>
  <Navbar/>
  <SimpleGrid sx={{"marginTop": ["25%", "25%", "20%", "15%", "10%"], "borderRadius": "1em", "width": ["90%", "90%", "80%"], "maxWidth": "1200px"}}>
  <Container sx={{"backgroundColor": "rgb(1, 1, 1, 0.15)", "backdropFilter": "blur(5px)", "borderRadius": "1em"}}>
  <Box as={`form`}>
  <VStack>
  <Input id={`name`} placeholder={`Name`} ref={ref_name} sx={{"bgColor": "rgb(255, 255, 255, 0.85)"}} type={`text`}/>
  <Textarea id={`message`} placeholder={`Message`} ref={ref_message} sx={{"bgColor": "rgb(255, 255, 255, 0.85)", "height": "300px"}}/>
  <Button colorScheme={`green`} size={`md`} sx={{"fontFamily": "monospace"}}>
  {`Send`}
</Button>
</VStack>
</Box>
</Container>
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
