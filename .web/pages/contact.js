
/** @jsxImportSource @emotion/react */import { Fragment, useCallback, useContext, useRef } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Box, Button, Divider, Heading, HStack, Image as ChakraImage, Input, Link, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, SimpleGrid, Text, Textarea, VStack } from "@chakra-ui/react"
import { Navbar } from "/utils/components"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, getRefValue, getRefValues, refs, set_val } from "/utils/state"
import "focus-visible/dist/focus-visible"
import { EmailIcon } from "@chakra-ui/icons"
import NextLink from "next/link"
import NextHead from "next/head"



export function Box_8cf45eac01d0f59633591ad2749dd4a8 () {
  const ref_email = useRef(null); refs['ref_email'] = ref_email;
  
    const handleSubmit_87e07eb26908a4491ed056ad53a8b760 = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...{"message": getRefValue(refs['ref_message']), "name": getRefValue(refs['ref_name']), "email": getRefValue(refs['ref_email'])}}

        addEvents([Event("state.parent_state.form_state.handle_submit", {form_data:form_data})])

        if (false) {
            $form.reset()
        }
    })
    
  const ref_message = useRef(null); refs['ref_message'] = ref_message;
  const ref_name = useRef(null); refs['ref_name'] = ref_name;
  const [addEvents, connectError] = useContext(EventLoopContext);


  return (
    <Box as={`form`} onSubmit={handleSubmit_87e07eb26908a4491ed056ad53a8b760}>
  <VStack sx={{"rowGap": "1em"}}>
  <Heading sx={{"userSelect": "none", "textColor": "rgb(255, 255, 255)", "fontSize": ["1.5em", "1.8em", "1.8em", "1.8em", "2em"], "fontFamily": "monospace"}}>
  {`Contact me`}
</Heading>
  <Divider sx={{"borderColor": "gray"}}/>
  <Input id={`name`} isRequired={true} placeholder={`Name...`} ref={ref_name} sx={{"bgColor": "rgb(255, 255, 255, 0.75)", "textColor": "black", "borderColor": "transparent", "resize": "none"}} type={`text`}/>
  <Input id={`email`} placeholder={`Email...`} ref={ref_email} sx={{"bgColor": "rgb(255, 255, 255, 0.75)", "textColor": "black", "borderColor": "transparent", "resize": "none"}} type={`text`}/>
  <Textarea id={`message`} isRequired={true} placeholder={`Write your message...`} ref={ref_message} sx={{"bgColor": "rgb(255, 255, 255, 0.75)", "textColor": "black", "borderColor": "transparent", "resize": "none", "height": "200px", "maxHeight": "300px"}}/>
  <Button_44df1b6c107f2260e34dd7f997cdadc0/>
</VStack>
</Box>
  )
}

export function Modal_0435852a89b0ca7aaeea583615fc8eea () {
  const state__parent_state__modal_state = useContext(StateContexts.state__parent_state__modal_state)


  return (
    <Modal isCentered={true} isOpen={state__parent_state__modal_state.show}>
  <ModalOverlay sx={{"userSelect": "none"}}>
  <ModalContent sx={{"textColor": "black", "maxWidth": "300px", "bgColor": "rgb(255, 255, 255)", "boxShadow": "rgba(0, 0, 0, 0.8) 0 15px 30px -10px"}}>
  <ModalHeader>
  {`Confirm`}
</ModalHeader>
  <ModalBody>
  {`Your message has been sent!`}
</ModalBody>
  <ModalFooter>
  <Button_b40d9e1211b55fe86cd0dc99fadf5939/>
</ModalFooter>
</ModalContent>
</ModalOverlay>
</Modal>
  )
}

export function Button_b40d9e1211b55fe86cd0dc99fadf5939 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_ddfddae1a07572c6d626cfd1fc442364 = useCallback((_e) => addEvents([Event("state.parent_state.modal_state.change", {})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_ddfddae1a07572c6d626cfd1fc442364} sx={{"bgColor": "#2b6cb0", "textColor": "white"}}>
  {`Close`}
</Button>
  )
}

export function Button_44df1b6c107f2260e34dd7f997cdadc0 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_ddfddae1a07572c6d626cfd1fc442364 = useCallback((_e) => addEvents([Event("state.parent_state.modal_state.change", {})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_ddfddae1a07572c6d626cfd1fc442364} size={`lg`} sx={{"bgColor": "#2b6cb0", "textColor": "white", "fontFamily": "monospace", "columnGap": "5px", "_hover": {"transform": "scale(1.1)", "transition": "0.25s"}}} type={`submit`}>
  {`Send`}
  <EmailIcon/>
</Button>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <Box sx={{"maxWidth": "100%", "minHeight": "100vh", "backgroundImage": "linear-gradient(338deg, #090b19 6.75%, #0f1c36 50.75%, #546283 88.52%)", "backgroundPosition": "center", "backgroundRepeat": "no-repeat", "backgroundSize": "cover"}}>
  <VStack>
  <Navbar/>
  <Box sx={{"width": "90%", "maxWidth": "800px"}}>
  <SimpleGrid sx={{"marginTop": ["20%", "10%"], "marginBottom": "10%", "gap": "20px"}}>
  <Box>
  <Box sx={{"justifyContent": "center", "padding": ["2em", "2em", "3em", "3em"], "backgroundColor": "rgb(20, 20, 20, 0.5)", "backdropFilter": "blur(5px)", "boxShadow": "rgba(0, 0, 0, 0.8) 0 15px 30px -10px", "borderRadius": "10px", "placeSelf": "center", "userSelect": "none"}}>
  <Box_8cf45eac01d0f59633591ad2749dd4a8/>
  <Box>
  <Modal_0435852a89b0ca7aaeea583615fc8eea/>
</Box>
</Box>
</Box>
  <Box sx={{"justifyContent": "center", "padding": ["2em", "2em", "3em", "3em"], "backgroundColor": "rgb(20, 20, 20, 0.5)", "backdropFilter": "blur(5px)", "boxShadow": "rgba(0, 0, 0, 0.8) 0 15px 30px -10px", "borderRadius": "10px", "placeSelf": "center", "userSelect": "none"}}>
  <HStack sx={{"gap": "2em"}}>
  <Link as={NextLink} href={`https://github.com/joseorozco84`} isExternal={true} sx={{"_hover": {"textDecoration": "none"}}}>
  <VStack sx={{"bgColor": "rgb(97, 30, 30, 0.45)", "borderRadius": "5px", "padding": "20px", "width": "100px", "_hover": {"transform": "scale(1.1)", "transition": "0.25s", "bgColor": "rgb(97, 30, 30, 0.95)"}}}>
  <ChakraImage src={`/github_white.png`} sx={{"width": "48px"}}/>
  <Text>
  {`GitHub`}
</Text>
</VStack>
</Link>
  <Link as={NextLink} href={`https://www.linkedin.com/in/jose-orozco-79367143/`} isExternal={true} sx={{"_hover": {"textDecoration": "none"}}}>
  <VStack sx={{"bgColor": "rgb(30, 63, 100, 0.45)", "borderRadius": "5px", "padding": "20px", "width": "100px", "_hover": {"transform": "scale(1.1)", "transition": "0.25s", "bgColor": "rgb(30, 63, 100, 0.95)"}}}>
  <ChakraImage src={`/linkedin_white.png`} sx={{"width": "48px"}}/>
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
