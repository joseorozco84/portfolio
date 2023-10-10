import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { E, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, uploadFiles, useEventLoop } from "/utils/state"
import { EventLoopContext, StateContext } from "/utils/context.js"
import "focus-visible/dist/focus-visible"
import { Box, SimpleGrid, Text, useColorMode, VStack } from "@chakra-ui/react"
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
