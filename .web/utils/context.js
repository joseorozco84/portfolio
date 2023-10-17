import { createContext } from "react"
import { Event, hydrateClientStorage } from "/utils/state.js"

export const initialState = {"color_picker_state": {"color": "#db114b"}, "form_state": {"form_data": {}}, "is_hydrated": false, "modal_state": {"show": false}}
export const StateContext = createContext(null);
export const EventLoopContext = createContext(null);
export const clientStorage = {"cookies": {}, "local_storage": {}}
export const initialEvents = [
    Event('parent_state.hydrate', hydrateClientStorage(clientStorage)),
]