import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { Event, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, spreadArraysOrObjects, uploadFiles, useEventLoop } from "/utils/state"
import { EventLoopContext, initialEvents, StateContext } from "/utils/context.js"
import "focus-visible/dist/focus-visible"
import { Box, Center, Flex, Heading, HStack, Image, Link, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, SimpleGrid, Spacer, Text, useColorMode, VStack } from "@chakra-ui/react"
import { Navbar } from "/utils/components"
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
  <Box sx={{"width": "90%", "maxWidth": "1200px"}}>
  <VStack sx={{"gap": "20px", "marginTop": ["20%", "10%"], "marginBottom": "10%"}}>
  <Link as={NextLink} href={`https://github.com/joseorozco84/portfolio`} isExternal={true} sx={{"textColor": "white", "fontSize": ["18px", "22px"], "fontWeight": "bold", "fontFamily": "monospace", "margin": "3%", "_hover": {"textDecoration": "none", "textColor": "#2b6cb0"}}}>
  <Box sx={{"padding": "1em", "backdropFilter": "blur(5px)", "backgroundColor": "rgb(20, 20, 20, 0.5)", "boxShadow": "rgba(0, 0, 0, 0.8) 0 15px 30px -10px", "borderRadius": "10px", "userSelect": "none"}}>
  <SimpleGrid columns={[1, 1, 2, 2, 2]} sx={{"gap": "20px"}}>
  <Image src={`/Placeholder.png`} sx={{"width": "100vw", "height": "100%", "objectFit": "cover"}}/>
  <VStack alignItems={`self-start`} sx={{"gap": "20px"}}>
  <Flex sx={{"width": "100%"}}>
  <Heading>
  {`Portfolio`}
</Heading>
  <Spacer/>
  <HStack>
  <Image src={`/favicon.ico`}/>
  <Image src={`/favicon.ico`}/>
  <Image src={`/favicon.ico`}/>
</HStack>
</Flex>
  <Text>
  {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dapibus elit quis finibus sodales. Curabitur laoreet consectetur ligula, a ultricies dolor ullamcorper sed. Phasellus lobortis, massa vel sagittis cursus, urna nisl vulputate ligula, ut maximus velit orci eu mi.`}
</Text>
</VStack>
</SimpleGrid>
</Box>
</Link>
  <Link as={NextLink} href={`https://github.com/joseorozco84/farmacia`} isExternal={true} sx={{"textColor": "white", "fontSize": ["18px", "22px"], "fontWeight": "bold", "fontFamily": "monospace", "margin": "3%", "_hover": {"textDecoration": "none", "textColor": "#2b6cb0"}}}>
  <Box sx={{"padding": "1em", "backdropFilter": "blur(5px)", "backgroundColor": "rgb(20, 20, 20, 0.5)", "boxShadow": "rgba(0, 0, 0, 0.8) 0 15px 30px -10px", "borderRadius": "10px", "userSelect": "none"}}>
  <Center>
  <VStack>
  <Image src={`/Placeholder.png`} sx={{"width": "256px"}}/>
  <Text>
  {`Farmacia`}
</Text>
</VStack>
</Center>
</Box>
</Link>
  <Link as={NextLink} href={`https://github.com/joseorozco84/coderblog`} isExternal={true} sx={{"textColor": "white", "fontSize": ["18px", "22px"], "fontWeight": "bold", "fontFamily": "monospace", "margin": "3%", "_hover": {"textDecoration": "none", "textColor": "#2b6cb0"}}}>
  <Box sx={{"padding": "1em", "backdropFilter": "blur(5px)", "backgroundColor": "rgb(20, 20, 20, 0.5)", "boxShadow": "rgba(0, 0, 0, 0.8) 0 15px 30px -10px", "borderRadius": "10px", "userSelect": "none"}}>
  <Center>
  <VStack>
  <Image src={`/Placeholder.png`} sx={{"width": "256px"}}/>
  <Text>
  {`Coderblog`}
</Text>
</VStack>
</Center>
</Box>
</Link>
  <Link as={NextLink} href={`https://github.com/joseorozco84/pass_gen`} isExternal={true} sx={{"textColor": "white", "fontSize": ["18px", "22px"], "fontWeight": "bold", "fontFamily": "monospace", "margin": "3%", "_hover": {"textDecoration": "none", "textColor": "#2b6cb0"}}}>
  <Box sx={{"padding": "1em", "backdropFilter": "blur(5px)", "backgroundColor": "rgb(20, 20, 20, 0.5)", "boxShadow": "rgba(0, 0, 0, 0.8) 0 15px 30px -10px", "borderRadius": "10px", "userSelect": "none"}}>
  <Center>
  <VStack>
  <Image src={`/Placeholder.png`} sx={{"width": "256px"}}/>
  <Text>
  {`Password Generator`}
</Text>
</VStack>
</Center>
</Box>
</Link>
  <Link as={NextLink} href={`https://github.com/joseorozco84/sudoku-generator`} isExternal={true} sx={{"textColor": "white", "fontSize": ["18px", "22px"], "fontWeight": "bold", "fontFamily": "monospace", "margin": "3%", "_hover": {"textDecoration": "none", "textColor": "#2b6cb0"}}}>
  <Box sx={{"padding": "1em", "backdropFilter": "blur(5px)", "backgroundColor": "rgb(20, 20, 20, 0.5)", "boxShadow": "rgba(0, 0, 0, 0.8) 0 15px 30px -10px", "borderRadius": "10px", "userSelect": "none"}}>
  <Center>
  <VStack>
  <Image src={`/Placeholder.png`} sx={{"width": "256px"}}/>
  <Text>
  {`Sudoku Generator`}
</Text>
</VStack>
</Center>
</Box>
</Link>
  <Link as={NextLink} href={`https://github.com/joseorozco84/scraper`} isExternal={true} sx={{"textColor": "white", "fontSize": ["18px", "22px"], "fontWeight": "bold", "fontFamily": "monospace", "margin": "3%", "_hover": {"textDecoration": "none", "textColor": "#2b6cb0"}}}>
  <Box sx={{"padding": "1em", "backdropFilter": "blur(5px)", "backgroundColor": "rgb(20, 20, 20, 0.5)", "boxShadow": "rgba(0, 0, 0, 0.8) 0 15px 30px -10px", "borderRadius": "10px", "userSelect": "none"}}>
  <Center>
  <VStack>
  <Image src={`/Placeholder.png`} sx={{"width": "256px"}}/>
  <Text>
  {`Metacritic Scraper`}
</Text>
</VStack>
</Center>
</Box>
</Link>
  <Link as={NextLink} href={`https://github.com/joseorozco84/Image-to-ASCII`} isExternal={true} sx={{"textColor": "white", "fontSize": ["18px", "22px"], "fontWeight": "bold", "fontFamily": "monospace", "margin": "3%", "_hover": {"textDecoration": "none", "textColor": "#2b6cb0"}}}>
  <Box sx={{"padding": "1em", "backdropFilter": "blur(5px)", "backgroundColor": "rgb(20, 20, 20, 0.5)", "boxShadow": "rgba(0, 0, 0, 0.8) 0 15px 30px -10px", "borderRadius": "10px", "userSelect": "none"}}>
  <Center>
  <VStack>
  <Image src={`/Placeholder.png`} sx={{"width": "256px"}}/>
  <Text>
  {`Image to ASCII`}
</Text>
</VStack>
</Center>
</Box>
</Link>
</VStack>
</Box>
</VStack>
</Box>
  <NextHead>
  <title>
  {`Repositories`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
