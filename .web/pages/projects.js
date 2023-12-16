
/** @jsxImportSource @emotion/react */import { Fragment, useRef } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Box, Button, Divider, Flex, HStack, Image as ChakraImage, Link, Spacer, Text, Tooltip, VStack } from "@chakra-ui/react"
import { Navbar } from "/utils/components"
import { refs } from "/utils/state"
import NextLink from "next/link"
import "focus-visible/dist/focus-visible"
import { ArrowUpIcon } from "@chakra-ui/icons"
import NextHead from "next/head"



export default function Component() {
  const ref_top = useRef(null); refs['ref_top'] = ref_top;

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <Box sx={{"maxWidth": "100%", "minHeight": "100vh", "backgroundImage": "linear-gradient(338deg, #090b19 6.75%, #0f1c36 50.75%, #546283 88.52%)", "backgroundPosition": "center", "backgroundRepeat": "no-repeat", "backgroundSize": "cover"}}>
  <VStack>
  <Navbar/>
  <Box id={`top`} ref={ref_top} sx={{"width": "90%", "maxWidth": "1200px"}}>
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
  <ChakraImage src={`/langs/icons8-python-32.ico`} sx={{"width": ["16px", "32px"]}}/>
</Tooltip>
  <Tooltip label={`CSS`}>
  <ChakraImage src={`/langs/icons8-css-32.ico`} sx={{"width": ["16px", "32px"]}}/>
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
  <Link as={NextLink} href={`https://github.com/joseorozco84/farmacia`} isExternal={true} sx={{"textColor": "white", "fontSize": ["20px", "24px"], "fontWeight": "bold", "fontFamily": "monospace", "_hover": {"textDecoration": "none", "textColor": "#2b6cb0"}}}>
  <VStack alignItems={`self-start`} sx={{"margin": "26px"}}>
  <Flex sx={{"width": "100%"}}>
  <Text sx={{"fontSize": ["18px", "22px"]}}>
  {`Pharmacy Database`}
</Text>
  <Spacer/>
  <HStack>
  <Tooltip label={`Python`}>
  <ChakraImage src={`/langs/icons8-python-32.ico`} sx={{"width": ["16px", "32px"]}}/>
</Tooltip>
  <Tooltip label={`MySQL`}>
  <ChakraImage src={`/langs/icons8-sql-32.ico`} sx={{"width": ["16px", "32px"]}}/>
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
  <Link as={NextLink} href={`https://github.com/joseorozco84/coderblog`} isExternal={true} sx={{"textColor": "white", "fontSize": ["20px", "24px"], "fontWeight": "bold", "fontFamily": "monospace", "_hover": {"textDecoration": "none", "textColor": "#2b6cb0"}}}>
  <VStack alignItems={`self-start`} sx={{"margin": "26px"}}>
  <Flex sx={{"width": "100%"}}>
  <Text sx={{"fontSize": ["18px", "22px"]}}>
  {`Coderblog Web`}
</Text>
  <Spacer/>
  <HStack>
  <Tooltip label={`Python`}>
  <ChakraImage src={`/langs/icons8-python-32.ico`} sx={{"width": ["16px", "32px"]}}/>
</Tooltip>
  <Tooltip label={`HTML`}>
  <ChakraImage src={`/langs/icons8-html-32.ico`} sx={{"width": ["16px", "32px"]}}/>
</Tooltip>
  <Tooltip label={`CSS`}>
  <ChakraImage src={`/langs/icons8-css-32.ico`} sx={{"width": ["16px", "32px"]}}/>
</Tooltip>
  <Tooltip label={`JavaScript`}>
  <ChakraImage src={`/langs/icons8-javascript-32.ico`} sx={{"width": ["16px", "32px"]}}/>
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
  <Link as={NextLink} href={`https://github.com/joseorozco84/pass_gen`} isExternal={true} sx={{"textColor": "white", "fontSize": ["20px", "24px"], "fontWeight": "bold", "fontFamily": "monospace", "_hover": {"textDecoration": "none", "textColor": "#2b6cb0"}}}>
  <VStack alignItems={`self-start`} sx={{"margin": "26px"}}>
  <Flex sx={{"width": "100%"}}>
  <Text sx={{"fontSize": ["18px", "22px"]}}>
  {`Password Generator`}
</Text>
  <Spacer/>
  <HStack>
  <Tooltip label={`Python`}>
  <ChakraImage src={`/langs/icons8-python-32.ico`} sx={{"width": ["16px", "32px"]}}/>
</Tooltip>
  <Tooltip label={`HTML`}>
  <ChakraImage src={`/langs/icons8-html-32.ico`} sx={{"width": ["16px", "32px"]}}/>
</Tooltip>
  <Tooltip label={`CSS`}>
  <ChakraImage src={`/langs/icons8-css-32.ico`} sx={{"width": ["16px", "32px"]}}/>
</Tooltip>
</HStack>
</Flex>
  <Divider sx={{"borderColor": "gray"}}/>
  <Text sx={{"textColor": "white", "fontSize": ["14px", "17px"], "fontWeight": "bold", "fontFamily": "monospace"}}>
  {`My password generator project was developed while I was in the process of learning Python and Django. With this application, users can easily create secure and unique passwords. As I advanced in my learning journey, I built this tool as a part of my personal development and to apply my knowledge in web application development. The password generator serves as a testament to my progress and skills in Python and Django.`}
</Text>
</VStack>
</Link>
</Box>
  <Box sx={{"backdropFilter": "blur(5px)", "backgroundColor": "rgb(20, 20, 20, 0.5)", "boxShadow": "rgba(0, 0, 0, 0.8) 0 15px 30px -10px", "borderRadius": "10px", "userSelect": "none"}}>
  <Link as={NextLink} href={`https://github.com/joseorozco84/sudoku-generator`} isExternal={true} sx={{"textColor": "white", "fontSize": ["20px", "24px"], "fontWeight": "bold", "fontFamily": "monospace", "_hover": {"textDecoration": "none", "textColor": "#2b6cb0"}}}>
  <VStack alignItems={`self-start`} sx={{"margin": "26px"}}>
  <Flex sx={{"width": "100%"}}>
  <Text sx={{"fontSize": ["18px", "22px"]}}>
  {`Sudoku Generator`}
</Text>
  <Spacer/>
  <HStack>
  <Tooltip label={`Python`}>
  <ChakraImage src={`/langs/icons8-python-32.ico`} sx={{"width": ["16px", "32px"]}}/>
</Tooltip>
</HStack>
</Flex>
  <Divider sx={{"borderColor": "gray"}}/>
  <Text sx={{"textColor": "white", "fontSize": ["14px", "17px"], "fontWeight": "bold", "fontFamily": "monospace"}}>
  {`My Sudoku generator project, created while learning Python, automatically generates Sudoku puzzles. It offers logic-based challenges with customizable difficulty levels and provides solutions for each puzzle. The user interface (UI) was built using Tkinter, showcasing my programming progress and offering a fun experience for puzzle enthusiasts.`}
</Text>
</VStack>
</Link>
</Box>
  <Box sx={{"backdropFilter": "blur(5px)", "backgroundColor": "rgb(20, 20, 20, 0.5)", "boxShadow": "rgba(0, 0, 0, 0.8) 0 15px 30px -10px", "borderRadius": "10px", "userSelect": "none"}}>
  <Link as={NextLink} href={`https://github.com/joseorozco84/scraper2`} isExternal={true} sx={{"textColor": "white", "fontSize": ["20px", "24px"], "fontWeight": "bold", "fontFamily": "monospace", "_hover": {"textDecoration": "none", "textColor": "#2b6cb0"}}}>
  <VStack alignItems={`self-start`} sx={{"margin": "26px"}}>
  <Flex sx={{"width": "100%"}}>
  <Text sx={{"fontSize": ["18px", "22px"]}}>
  {`Metacritic Scraper`}
</Text>
  <Spacer/>
  <HStack>
  <Tooltip label={`Python`}>
  <ChakraImage src={`/langs/icons8-python-32.ico`} sx={{"width": ["16px", "32px"]}}/>
</Tooltip>
</HStack>
</Flex>
  <Divider sx={{"borderColor": "gray"}}/>
  <Text sx={{"textColor": "white", "fontSize": ["14px", "17px"], "fontWeight": "bold", "fontFamily": "monospace"}}>
  {`My Metacritic game links scraping project is an application I developed while learning Python. This automated tool gathers links to games from Metacritic and stores them in a txt file, making it easier for users to access critical information about games and reviews. The project represents a milestone in my Python learning journey and showcases my web data extraction skills. I utilize requests and xpath libraries along with concurrent futures to run parallel tasks.`}
</Text>
</VStack>
</Link>
</Box>
  <Box sx={{"backdropFilter": "blur(5px)", "backgroundColor": "rgb(20, 20, 20, 0.5)", "boxShadow": "rgba(0, 0, 0, 0.8) 0 15px 30px -10px", "borderRadius": "10px", "userSelect": "none"}}>
  <Link as={NextLink} href={`https://github.com/joseorozco84/Image-to-ASCII`} isExternal={true} sx={{"textColor": "white", "fontSize": ["20px", "24px"], "fontWeight": "bold", "fontFamily": "monospace", "_hover": {"textDecoration": "none", "textColor": "#2b6cb0"}}}>
  <VStack alignItems={`self-start`} sx={{"margin": "26px"}}>
  <Flex sx={{"width": "100%"}}>
  <Text sx={{"fontSize": ["18px", "22px"]}}>
  {`Image to ASCII Generator`}
</Text>
  <Spacer/>
  <HStack>
  <Tooltip label={`Python`}>
  <ChakraImage src={`/langs/icons8-python-32.ico`} sx={{"width": ["16px", "32px"]}}/>
</Tooltip>
</HStack>
</Flex>
  <Divider sx={{"borderColor": "gray"}}/>
  <Text sx={{"textColor": "white", "fontSize": ["14px", "17px"], "fontWeight": "bold", "fontFamily": "monospace"}}>
  {`My project for converting images to ASCII characters is an application that takes images as input and transforms them into artistic representations using ASCII characters. This program replaces the pixels of the image with ASCII characters to create a visually unique version of the original image. It showcases my programming skills and offers an intriguing way to interpret images through code.`}
</Text>
</VStack>
</Link>
</Box>
  <Link as={NextLink} href={`#top`} sx={{"position": "static", "bottom": ["1%", "5%"], "zIndex": "1"}}>
  <Button colorScheme={`red`}>
  <ArrowUpIcon/>
</Button>
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
