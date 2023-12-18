
/** @jsxImportSource @emotion/react */import { Fragment, useCallback, useContext } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Box, Divider, Heading, Text, VStack } from "@chakra-ui/react"
import { EventLoopContext, StateContexts } from "/utils/context"
import "focus-visible/dist/focus-visible"
import { HexColorPicker } from "react-colorful"
import { Event } from "/utils/state"
import NextHead from "next/head"



export function Hexcolorpicker_165c5171c295cb3fc229821c30e06a7e () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_change_f89bb59b5d6399e3a64ec96fbbaf7885 = useCallback((_e0) => addEvents([Event("state.parent_state.color_picker_state.set_color", {value:_e0})], (_e0), {}), [addEvents, Event])

  return (
    <HexColorPicker onChange={on_change_f89bb59b5d6399e3a64ec96fbbaf7885}/>
  )
}

export function Text_a15494a0b363d8763b397cf848af8c0c () {
  const state__parent_state__color_picker_state = useContext(StateContexts.state__parent_state__color_picker_state)


  return (
    <Text>
  {state__parent_state__color_picker_state.color}
</Text>
  )
}

export function Box_16bb63769182da016ff1b1233ca50d3b () {
  const state__parent_state__color_picker_state = useContext(StateContexts.state__parent_state__color_picker_state)


  return (
    <Box sx={{"backgroundColor": state__parent_state__color_picker_state.color, "padding": "5em"}}>
  <VStack sx={{"height": "100vh"}}>
  <Box>
  <Heading>
  {`React Color Picker component`}
</Heading>
</Box>
  <Divider sx={{"borderColor": "gray"}}/>
  <Text_a15494a0b363d8763b397cf848af8c0c/>
  <Hexcolorpicker_165c5171c295cb3fc229821c30e06a7e/>
</VStack>
</Box>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <Box_16bb63769182da016ff1b1233ca50d3b/>
  <NextHead>
  <title>
  {`Reflex App`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
