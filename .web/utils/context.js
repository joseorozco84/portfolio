import { createContext } from "react"
import { E } from "/utils/state.js"

export const initialState = {"is_hydrated": false, "show": false}
export const initialEvents = [E('modal_state.hydrate', {})]
export const StateContext = createContext(null);
export const EventLoopContext = createContext(null);