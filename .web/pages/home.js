import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { E, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, uploadFiles, useEventLoop } from "/utils/state"
import { EventLoopContext, StateContext } from "/utils/context.js"
import "focus-visible/dist/focus-visible"
import { Box, Image, SimpleGrid, Text, useColorMode, VStack } from "@chakra-ui/react"
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


  return (
  <Fragment><Fragment>
  <Box sx={{"maxWidth": "100%", "minHeight": "100vh", "backgroundImage": "/code_des.jpg", "backgroundPosition": "center", "backgroundRepeat": "no-repeat", "backgroundSize": "cover"}}>
  <VStack>
  <Navbar/>
  <SimpleGrid columns={[1, 1, 1, 2, 2]} sx={{"marginTop": ["25%", "25%", "20%", "15%", "10%"], "gap": "1em", "borderRadius": "1em", "width": ["90%", "90%", "80%"], "maxWidth": "1200px"}}>
  <Box sx={{"backgroundColor": "rgb(1, 1, 1, 0.15)", "backdropFilter": "blur(5px)", "borderRadius": "1em", "_hover": {"transform": "scale(1.1)", "transition": "0.5s"}}}>
  <VStack sx={{"margin": "2em"}}>
  <Image src={`/pic.jpg`} sx={{"width": ["250px", "350px", "350px"], "size": "xxl", "borderRadius": "1em", "userSelect": "none", "margin": "1em"}}/>
  <Text sx={{"fontSize": ["1.8em", "2.5em", "3em"], "fontFamily": "monospace", "borderRadius": "0.3em", "textColor": "white", "textShadow": "0px 0px 10px black", "userSelect": "none"}}>
  {`Hi! I'm Jose`}
</Text>
  <Text sx={{"textColor": "green", "fontSize": ["1.5em", "1.8em", "2em"], "fontFamily": "monospace", "userSelect": "none"}}>
  {`jr.developer`}
</Text>
</VStack>
</Box>
  <VStack justifyContent={`space-evenly`} sx={{"fontFamily": "monospace", "textColor": "white", "fontSize": ["1.2em", "1.5em", "1.8em", "1.8em", "2em"], "backgroundColor": "rgb(1, 1, 1, 0.15)", "backdropFilter": "blur(5px)", "borderRadius": "1em", "minHeight": "250px", "margin": "2em", "userSelect": "none"}}>
  <Text sx={{"_hover": {"transform": "scale(1.1)", "transition": "0.5s", "color": "darkgreen"}}}>
  {`Programming Skills 💻`}
</Text>
  <Text sx={{"_hover": {"transform": "scale(1.1)", "transition": "0.5s", "color": "darkgreen"}}}>
  {`Problem-Solving 🧩`}
</Text>
  <Text sx={{"_hover": {"transform": "scale(1.1)", "transition": "0.5s", "color": "darkgreen"}}}>
  {`Team Collaboration 🤝`}
</Text>
  <Text sx={{"_hover": {"transform": "scale(1.1)", "transition": "0.5s", "color": "darkgreen"}}}>
  {`Project Management 📂`}
</Text>
  <Text sx={{"_hover": {"transform": "scale(1.1)", "transition": "0.5s", "color": "darkgreen"}}}>
  {`Adaptability 🌟`}
</Text>
</VStack>
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
