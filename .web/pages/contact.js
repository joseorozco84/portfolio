import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { Event, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, set_val, spreadArraysOrObjects, uploadFiles, useEventLoop } from "/utils/state"
import { EventLoopContext, initialEvents, StateContext } from "/utils/context.js"
import "focus-visible/dist/focus-visible"
import { Box, Button, Heading, HStack, Image, Input, Link, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, SimpleGrid, Text, Textarea, useColorMode, VStack } from "@chakra-ui/react"
import { Navbar } from "/utils/components"
import { EmailIcon } from "@chakra-ui/icons"
import NextLink from "next/link"
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

  const ref_name = useRef(null); refs['ref_name'] = ref_name;
  const ref_email = useRef(null); refs['ref_email'] = ref_email;
  const ref_message = useRef(null); refs['ref_message'] = ref_message;

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
  <Box sx={{"width": "90%", "maxWidth": "800px"}}>
  <SimpleGrid sx={{"marginTop": ["20%", "10%"], "marginBottom": "10%", "gap": "20px"}}>
  <Box>
  <Box sx={{"justifyContent": "center", "maxWidth": "800px", "padding": ["2em", "2em", "3em", "3em"], "backgroundColor": "rgb(20, 20, 20, 0.5)", "backdropFilter": "blur(5px)", "boxShadow": "rgba(0, 0, 0, 0.8) 0 15px 30px -10px", "borderRadius": "10px", "placeSelf": "center", "userSelect": "none"}}>
  <Box as={`form`}>
  <VStack sx={{"rowGap": "2em"}}>
  <Heading sx={{"userSelect": "none", "textColor": "rgb(255, 255, 255)", "fontSize": ["1.5em", "1.8em", "1.8em", "1.8em", "2em"], "fontFamily": "monospace"}}>
  {`Contact me`}
</Heading>
  <Input id={`name`} isRequired={true} placeholder={`Name...`} ref={ref_name} sx={{"bgColor": "rgb(255, 255, 255, 0.75)", "textColor": "black", "borderColor": "transparent", "resize": "none"}} type={`text`}/>
  <Input id={`email`} placeholder={`Email...`} ref={ref_email} sx={{"bgColor": "rgb(255, 255, 255, 0.75)", "textColor": "black", "borderColor": "transparent", "resize": "none"}} type={`text`}/>
  <Textarea id={`message`} isRequired={true} placeholder={`Write your message...`} ref={ref_message} sx={{"bgColor": "rgb(255, 255, 255, 0.75)", "textColor": "black", "borderColor": "transparent", "resize": "none", "height": "200px", "maxHeight": "300px"}}/>
  <Button onClick={(_e) => addEvents([Event("parent_state.modal_state.change", {})], (_e))} size={`lg`} sx={{"bgColor": "#2b6cb0", "textColor": "white", "fontFamily": "monospace", "columnGap": "5px", "_hover": {"transform": "scale(1.1)", "transition": "0.25s"}}}>
  {`Send`}
  <EmailIcon/>
</Button>
</VStack>
</Box>
  <Box>
  <Modal isCentered={true} isOpen={parent_state.modal_state.show}>
  <ModalOverlay sx={{"userSelect": "none"}}>
  <ModalContent sx={{"textColor": "black", "maxWidth": "300px", "bgColor": "rgb(255, 255, 255)", "boxShadow": "rgba(0, 0, 0, 0.8) 0 15px 30px -10px"}}>
  <ModalHeader>
  {`Confirm`}
</ModalHeader>
  <ModalBody>
  {`Your message has been sent!`}
</ModalBody>
  <ModalFooter>
  <Button onClick={(_e) => addEvents([Event("parent_state.modal_state.change", {})], (_e))} sx={{"bgColor": "#2b6cb0", "textColor": "white"}}>
  {`Close`}
</Button>
</ModalFooter>
</ModalContent>
</ModalOverlay>
</Modal>
</Box>
</Box>
</Box>
  <Box sx={{"justifyContent": "center", "maxWidth": "800px", "padding": ["2em", "2em", "3em", "3em"], "backgroundColor": "rgb(20, 20, 20, 0.5)", "backdropFilter": "blur(5px)", "boxShadow": "rgba(0, 0, 0, 0.8) 0 15px 30px -10px", "borderRadius": "10px", "placeSelf": "center", "userSelect": "none"}}>
  <HStack sx={{"gap": "2em"}}>
  <Link as={NextLink} href={`https://github.com/joseorozco84`} isExternal={true} sx={{"_hover": {"textDecoration": "none"}}}>
  <VStack sx={{"bgColor": "rgb(97, 30, 30, 0.45)", "borderRadius": "5px", "padding": "20px", "width": "100px", "_hover": {"transform": "scale(1.1)", "transition": "0.25s", "bgColor": "rgb(97, 30, 30, 0.95)"}}}>
  <Image src={`/github_white.png`} sx={{"width": "48px"}}/>
  <Text>
  {`GitHub`}
</Text>
</VStack>
</Link>
  <Link as={NextLink} href={`https://www.linkedin.com/in/jose-orozco-79367143/`} isExternal={true} sx={{"_hover": {"textDecoration": "none"}}}>
  <VStack sx={{"bgColor": "rgb(30, 63, 100, 0.45)", "borderRadius": "5px", "padding": "20px", "width": "100px", "_hover": {"transform": "scale(1.1)", "transition": "0.25s", "bgColor": "rgb(30, 63, 100, 0.95)"}}}>
  <Image src={`/linkedin_white.png`} sx={{"width": "48px"}}/>
  <Text>
  {`Linkedin`}
</Text>
</VStack>
</Link>
</HStack>
</Box>
</SimpleGrid>
</Box>
</VStack>
</Box>
  <NextHead>
  <title>
  {`Contact`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
