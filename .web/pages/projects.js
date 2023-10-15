import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { Event, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, spreadArraysOrObjects, uploadFiles, useEventLoop } from "/utils/state"
import { EventLoopContext, initialEvents, StateContext } from "/utils/context.js"
import "focus-visible/dist/focus-visible"
import { Box, Center, Divider, Flex, HStack, Image, Link, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Spacer, Text, Tooltip, useColorMode, VStack } from "@chakra-ui/react"
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
  <Box sx={{"maxWidth": "100%", "minHeight": "100vh", "backgroundImage": "linear-gradient(338deg, #090b19 6.75%, #0f1c36 50.75%, #546283 88.52%)", "backgroundPosition": "center", "backgroundRepeat": "no-repeat", "backgroundSize": "cover"}}>
  <VStack>
  <Navbar/>
  <Box sx={{"width": "90%", "maxWidth": "1200px"}}>
  <VStack sx={{"gap": "20px", "marginTop": ["20%", "10%"], "marginBottom": "10%"}}>
  <Box sx={{"backdropFilter": "blur(5px)", "backgroundColor": "rgb(20, 20, 20, 0.5)", "boxShadow": "rgba(0, 0, 0, 0.8) 0 15px 30px -10px", "borderRadius": "10px", "userSelect": "none"}}>
  <Link as={NextLink} href={`https://github.com/joseorozco84/portfolio`} isExternal={true} sx={{"textColor": "white", "fontSize": ["20px", "24px"], "fontWeight": "bold", "fontFamily": "monospace", "_hover": {"textDecoration": "none", "textColor": "#2b6cb0"}}}>
  <VStack alignItems={`self-start`} sx={{"margin": "26px"}}>
  <Flex sx={{"width": "100%"}}>
  <Text sx={{"fontSize": ["18px", "22px"]}}>
  {`Portfolio Web`}
</Text>
  <Spacer/>
  <HStack>
  <Tooltip label={`Python`}>
  <Image src={`/langs/icons8-python-32.ico`} sx={{"width": ["16px", "32px"]}}/>
</Tooltip>
  <Tooltip label={`CSS`}>
  <Image src={`/langs/icons8-css-32.ico`} sx={{"width": ["16px", "32px"]}}/>
</Tooltip>
</HStack>
</Flex>
  <Divider sx={{"borderColor": "gray"}}/>
  <Text sx={{"textColor": "white", "fontSize": ["14px", "17px"], "fontWeight": "bold", "fontFamily": "monospace"}}>
  {`My portfolio web project is an elegant and fully responsive platform designed to showcase my work and skills effectively. Developed using Python and the modern Reflex framework, this website ensures an exceptional user experience on devices of all sizes. I present my portfolio in an appealing manner, highlighting my projects, achievements, and skills in a visually attractive and easy-to-navigate way.`}
</Text>
</VStack>
</Link>
</Box>
  <Box sx={{"backdropFilter": "blur(5px)", "backgroundColor": "rgb(20, 20, 20, 0.5)", "boxShadow": "rgba(0, 0, 0, 0.8) 0 15px 30px -10px", "borderRadius": "10px", "userSelect": "none"}}>
  <Link as={NextLink} href={`https://github.com/joseorozco84/portfolio`} isExternal={true} sx={{"textColor": "white", "fontSize": ["20px", "24px"], "fontWeight": "bold", "fontFamily": "monospace", "_hover": {"textDecoration": "none", "textColor": "#2b6cb0"}}}>
  <VStack alignItems={`self-start`} sx={{"margin": "26px"}}>
  <Flex sx={{"width": "100%"}}>
  <Text sx={{"fontSize": ["18px", "22px"]}}>
  {`Farmacia Database`}
</Text>
  <Spacer/>
  <HStack>
  <Tooltip label={`Python`}>
  <Image src={`/langs/icons8-python-32.ico`} sx={{"width": ["16px", "32px"]}}/>
</Tooltip>
  <Tooltip label={`MySQL`}>
  <Image src={`/langs/icons8-sql-32.ico`} sx={{"width": ["16px", "32px"]}}/>
</Tooltip>
</HStack>
</Flex>
  <Divider sx={{"borderColor": "gray"}}/>
  <Text sx={{"textColor": "white", "fontSize": ["14px", "17px"], "fontWeight": "bold", "fontFamily": "monospace"}}>
  {`My database project is centered around a pharmacy chain and utilizes MySQL as the database management system. I gather and analyze data related to sales, inventory, and other relevant aspects of pharmacy operations. I then visualize this data through a dashboard with bar charts and pie charts, providing a clear visual representation of trends and patterns. Additionally, I have integrated FastAPI to create endpoints that enable efficient and secure access to this data via a web dashboard, making it easy to interact with and query the information stored in the database.`}
</Text>
</VStack>
</Link>
</Box>
  <Box sx={{"backdropFilter": "blur(5px)", "backgroundColor": "rgb(20, 20, 20, 0.5)", "boxShadow": "rgba(0, 0, 0, 0.8) 0 15px 30px -10px", "borderRadius": "10px", "userSelect": "none"}}>
  <Link as={NextLink} href={`https://github.com/joseorozco84/portfolio`} isExternal={true} sx={{"textColor": "white", "fontSize": ["20px", "24px"], "fontWeight": "bold", "fontFamily": "monospace", "_hover": {"textDecoration": "none", "textColor": "#2b6cb0"}}}>
  <VStack alignItems={`self-start`} sx={{"margin": "26px"}}>
  <Flex sx={{"width": "100%"}}>
  <Text sx={{"fontSize": ["18px", "22px"]}}>
  {`Coderblog Web`}
</Text>
  <Spacer/>
  <HStack>
  <Tooltip label={`Python`}>
  <Image src={`/langs/icons8-python-32.ico`} sx={{"width": ["16px", "32px"]}}/>
</Tooltip>
  <Tooltip label={`HTML`}>
  <Image src={`/langs/icons8-html-32.ico`} sx={{"width": ["16px", "32px"]}}/>
</Tooltip>
  <Tooltip label={`CSS`}>
  <Image src={`/langs/icons8-css-32.ico`} sx={{"width": ["16px", "32px"]}}/>
</Tooltip>
  <Tooltip label={`JavaScript`}>
  <Image src={`/langs/icons8-javascript-32.ico`} sx={{"width": ["16px", "32px"]}}/>
</Tooltip>
</HStack>
</Flex>
  <Divider sx={{"borderColor": "gray"}}/>
  <Text sx={{"textColor": "white", "fontSize": ["14px", "17px"], "fontWeight": "bold", "fontFamily": "monospace"}}>
  {`CoderBlog is a collaborative web project created with Python and the Django framework. It represents the collective efforts of a team of three individuals, including myself. CoderBlog serves as a dynamic platform where we share our insights, experiences, and expertise in the world of coding, software development, and technology. Through a user-friendly and aesthetically pleasing interface, we provide informative and engaging content, including articles, tutorials, and discussions, all centered around the ever-evolving field of coding. Our joint efforts have culminated in a rich resource for both seasoned developers and those just embarking on their coding journey.`}
</Text>
</VStack>
</Link>
</Box>
  <Box sx={{"backdropFilter": "blur(5px)", "backgroundColor": "rgb(20, 20, 20, 0.5)", "boxShadow": "rgba(0, 0, 0, 0.8) 0 15px 30px -10px", "borderRadius": "10px", "userSelect": "none"}}>
  <Link as={NextLink} href={`https://github.com/joseorozco84/portfolio`} isExternal={true} sx={{"textColor": "white", "fontSize": ["20px", "24px"], "fontWeight": "bold", "fontFamily": "monospace", "_hover": {"textDecoration": "none", "textColor": "#2b6cb0"}}}>
  <VStack alignItems={`self-start`} sx={{"margin": "26px"}}>
  <Flex sx={{"width": "100%"}}>
  <Text sx={{"fontSize": ["18px", "22px"]}}>
  {`Password Generator`}
</Text>
  <Spacer/>
  <HStack>
  <Tooltip label={`Python`}>
  <Image src={`/langs/icons8-python-32.ico`} sx={{"width": ["16px", "32px"]}}/>
</Tooltip>
  <Tooltip label={`HTML`}>
  <Image src={`/langs/icons8-html-32.ico`} sx={{"width": ["16px", "32px"]}}/>
</Tooltip>
  <Tooltip label={`CSS`}>
  <Image src={`/langs/icons8-css-32.ico`} sx={{"width": ["16px", "32px"]}}/>
</Tooltip>
</HStack>
</Flex>
  <Divider sx={{"borderColor": "gray"}}/>
  <Text sx={{"textColor": "white", "fontSize": ["14px", "17px"], "fontWeight": "bold", "fontFamily": "monospace"}}>
  {`My password generator project was developed while I was in the process of learning Python and Django. With this application, users can easily create secure and unique passwords. As I advanced in my learning journey, I built this tool as a part of my personal development and to apply my knowledge in web application development. The password generator serves as a testament to my progress and skills in Python and Django, offering a practical solution to enhance online security.`}
</Text>
</VStack>
</Link>
</Box>
  <Link as={NextLink} href={`https://github.com/joseorozco84/sudoku-generator`} isExternal={true} sx={{"textColor": "white", "fontSize": ["14px", "17px"], "fontWeight": "bold", "fontFamily": "monospace"}}>
  <Box sx={{"backdropFilter": "blur(5px)", "backgroundColor": "rgb(20, 20, 20, 0.5)", "boxShadow": "rgba(0, 0, 0, 0.8) 0 15px 30px -10px", "borderRadius": "10px", "userSelect": "none"}}>
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
  <Link as={NextLink} href={`https://github.com/joseorozco84/scraper`} isExternal={true} sx={{"textColor": "white", "fontSize": ["14px", "17px"], "fontWeight": "bold", "fontFamily": "monospace"}}>
  <Box sx={{"backdropFilter": "blur(5px)", "backgroundColor": "rgb(20, 20, 20, 0.5)", "boxShadow": "rgba(0, 0, 0, 0.8) 0 15px 30px -10px", "borderRadius": "10px", "userSelect": "none"}}>
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
  <Link as={NextLink} href={`https://github.com/joseorozco84/Image-to-ASCII`} isExternal={true} sx={{"textColor": "white", "fontSize": ["14px", "17px"], "fontWeight": "bold", "fontFamily": "monospace"}}>
  <Box sx={{"backdropFilter": "blur(5px)", "backgroundColor": "rgb(20, 20, 20, 0.5)", "boxShadow": "rgba(0, 0, 0, 0.8) 0 15px 30px -10px", "borderRadius": "10px", "userSelect": "none"}}>
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
