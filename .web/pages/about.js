
/** @jsxImportSource @emotion/react */import { Fragment } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Box, Link, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack } from "@chakra-ui/react"
import { Navbar } from "/utils/components"
import "focus-visible/dist/focus-visible"
import NextLink from "next/link"
import NextHead from "next/head"



export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <Box sx={{"maxWidth": "100%", "minHeight": "100vh", "backgroundImage": "linear-gradient(338deg, #090b19 6.75%, #0f1c36 50.75%, #546283 88.52%)", "backgroundPosition": "center", "backgroundRepeat": "no-repeat", "backgroundSize": "cover"}}>
  <VStack>
  <Navbar/>
  <Box sx={{"width": "90%", "maxWidth": "1200px"}}>
  <Box sx={{"marginTop": ["20%", "10%"], "marginBottom": "10%"}}>
  <Tabs isFitted={true} sx={{"color": "darkgray", "userSelect": "none"}}>
  <TabList sx={{"borderBottom": "none", "paddingLeft": "25px", "paddingRight": "25px"}}>
  <Tab sx={{"backdropFilter": "blur(5px)", "borderRadius": "10px 10px 0px 0px", "backgroundColor": "rgb(20, 20, 20, 0.5)", "fontSize": ["14px", "24px"], "fontWeight": "bold"}}>
  {`About me`}
</Tab>
  <Tab sx={{"backdropFilter": "blur(5px)", "borderRadius": "10px 10px 0px 0px", "backgroundColor": "rgb(20, 20, 20, 0.5)", "fontSize": ["14px", "24px"], "fontWeight": "bold"}}>
  {`About page`}
</Tab>
</TabList>
  <TabPanels>
  <TabPanel sx={{"paddingTop": "2px", "padding": "0px"}}>
  <Box sx={{"padding": "1em", "backdropFilter": "blur(5px)", "backgroundColor": "rgb(20, 20, 20, 0.5)", "boxShadow": "rgba(0, 0, 0, 0.8) 0 15px 30px -10px", "borderRadius": "10px", "userSelect": "none"}}>
  <Text sx={{"textColor": "white", "fontSize": ["14px", "22px"], "fontWeight": "bold", "fontFamily": "monospace", "margin": "3%"}}>
  {`Hello! 👋 My name is Jose and I am passionate about programming with a strong work ethic.
            My methodical approach and attention to detail allow me to tackle projects meticulously and ensure quality in every line of code I write.
            I am an enthusiastic self-learner who is motivated by technological challenges and quickly acquires new skills and technologies.
            I have the versatility to work both collaboratively in teams and independently.
            My determination and dedication drive me to achieve my goals and exceed expectations in every project I undertake.`}
</Text>
</Box>
</TabPanel>
  <TabPanel sx={{"paddingTop": "2px", "padding": "0px"}}>
  <Box sx={{"backdropFilter": "blur(5px)", "backgroundColor": "rgb(20, 20, 20, 0.5)", "boxShadow": "rgba(0, 0, 0, 0.8) 0 15px 30px -10px", "borderRadius": "10px", "userSelect": "none", "padding": "1em", "height": "fit-content"}}>
  <Text sx={{"textColor": "white", "fontSize": ["14px", "22px"], "fontWeight": "bold", "fontFamily": "monospace", "margin": "3%"}}>
  {`Welcome to my portfolio! Built with `}
  <Link as={NextLink} href={`https://www.python.org/`} isExternal={true} sx={{"color": "rgb(121,246,99)"}}>
  {`Python`}
</Link>
  {` 🐍 and `}
  <Link as={NextLink} href={`https://reflex.dev/`} isExternal={true} sx={{"color": "rgb(107,99,246)"}}>
  {`Reflex`}
</Link>
  {` framework, this website is where I showcase my projects and skills. It's a work in progress, and I'm excited to share my journey with you. `}
</Text>
</Box>
</TabPanel>
</TabPanels>
</Tabs>
</Box>
</Box>
</VStack>
</Box>
  <NextHead>
  <title>
  {`About`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
