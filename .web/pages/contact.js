import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { E, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, set_val, uploadFiles, useEventLoop } from "/utils/state"
import { EventLoopContext, StateContext } from "/utils/context.js"
import "focus-visible/dist/focus-visible"
import { Box, Button, Heading, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, SimpleGrid, Text, Textarea, useColorMode, VStack } from "@chakra-ui/react"
import { Navbar } from "/utils/components"
import { EmailIcon } from "@chakra-ui/icons"
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

  const ref_name = useRef(null); refs['ref_name'] = ref_name;
  const ref_message = useRef(null); refs['ref_message'] = ref_message;
  const ref_email = useRef(null); refs['ref_email'] = ref_email;

  return (
  <Fragment><Fragment>
  <Box sx={{"maxWidth": "100%", "minHeight": "100vh", "backgroundImage": "/code_des.jpg", "backgroundPosition": "center", "backgroundRepeat": "no-repeat", "backgroundSize": "cover"}}>
  <VStack>
  <Navbar/>
  <SimpleGrid sx={{"marginTop": ["25%", "20%", "20%", "15%", "10%"], "marginBottom": "10%", "borderRadius": "1em", "width": ["90%", "90%", "80%"], "maxWidth": "800px"}}>
  <Box sx={{"maxWidth": "800px", "padding": ["2em", "2em", "3em", "3em"], "backgroundColor": "rgb(1, 1, 1, 0.15)", "backdropFilter": "blur(5px)", "borderRadius": "1em"}}>
  <Box>
  <Box as={`form`}>
  <VStack sx={{"rowGap": "2em"}}>
  <Heading sx={{"fontFamily": "monospace", "userSelect": "none", "textColor": "rgb(255, 255, 255)", "fontSize": ["1.5em", "1.8em", "1.8em", "1.8em", "2em"]}}>
  {`📝 Send me a message`}
</Heading>
  <Input id={`name`} isRequired={true} placeholder={`Name...`} ref={ref_name} sx={{"bgColor": "rgb(255, 255, 255, 0.75)", "textColor": "black", "overflow": "hidden", "borderColor": "transparent", "fontFamily": "monospace"}} type={`text`}/>
  <Input id={`email`} placeholder={`Email...`} ref={ref_email} sx={{"bgColor": "rgb(255, 255, 255, 0.75)", "textColor": "black", "overflow": "hidden", "borderColor": "transparent", "fontFamily": "monospace"}} type={`text`}/>
  <Textarea id={`message`} isRequired={true} placeholder={`Write your message...`} ref={ref_message} sx={{"bgColor": "rgb(255, 255, 255, 0.75)", "height": "300px", "textColor": "black", "borderColor": "transparent", "resize": "none", "fontFamily": "monospace", "maxHeight": "200px"}}/>
  <Button colorScheme={`green`} onClick={_e => Event([E("modal_state.change", {})], _e)} size={`lg`} sx={{"fontFamily": "monospace", "_hover": {"transform": "scale(1.1)", "transition": "0.25s"}, "columnGap": "5px"}}>
  {`Send`}
  <EmailIcon/>
</Button>
</VStack>
</Box>
  <Box sx={{"justifyContent": "center"}}>
  <Modal isOpen={modal_state.show}>
  <ModalOverlay>
  <ModalContent sx={{"fontFamily": "monospace", "maxWidth": "300px", "bgColor": "rgb(255, 255, 255)"}}>
  <ModalHeader>
  {`Confirm`}
</ModalHeader>
  <ModalBody>
  {`Your message has been sent!`}
</ModalBody>
  <ModalFooter>
  <Button colorScheme={`green`} onClick={_e => Event([E("modal_state.change", {})], _e)}>
  {`Close`}
</Button>
</ModalFooter>
</ModalContent>
</ModalOverlay>
</Modal>
</Box>
</Box>
</Box>
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
