import { createContext } from "react"
import { E } from "/utils/state.js"

export const initialState = {"color_picker_state": {"color": "#db114b"}, "is_hydrated": false, "modal_state": {"show": false}}
export const initialEvents = [E('parent_state.hydrate', {})]
export const StateContext = createContext(null);
export const EventLoopContext = createContext(null);