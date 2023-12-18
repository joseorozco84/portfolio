import { createContext, useContext, useMemo, useReducer, useState } from "react"
import { applyDelta, Event, hydrateClientStorage, useEventLoop, refs } from "/utils/state.js"

export const initialState = {"state": {"is_hydrated": false, "router": {"session": {"client_token": "", "client_ip": "", "session_id": ""}, "headers": {"host": "", "origin": "", "upgrade": "", "connection": "", "pragma": "", "cache_control": "", "user_agent": "", "sec_websocket_version": "", "sec_websocket_key": "", "sec_websocket_extensions": "", "accept_encoding": "", "accept_language": ""}, "page": {"host": "", "path": "", "raw_path": "", "full_path": "", "full_raw_path": "", "params": {}}}}, "state.parent_state": {}, "state.parent_state.color_picker_state": {"color": "#db114b"}, "state.parent_state.modal_state": {"show": false}, "state.parent_state.form_state": {"form_data": {}}}

export const ColorModeContext = createContext(null);
export const UploadFilesContext = createContext(null);
export const DispatchContext = createContext(null);
export const StateContexts = {
  state: createContext(null),
  state__parent_state: createContext(null),
  state__parent_state__color_picker_state: createContext(null),
  state__parent_state__modal_state: createContext(null),
  state__parent_state__form_state: createContext(null),
}
export const EventLoopContext = createContext(null);
export const clientStorage = {"cookies": {}, "local_storage": {}}

export const onLoadInternalEvent = () => [Event('state.on_load_internal')]

export const initialEvents = () => [
    Event('state.hydrate', hydrateClientStorage(clientStorage)),
    ...onLoadInternalEvent()
]

export const isDevMode = true

export function UploadFilesProvider({ children }) {
  const [filesById, setFilesById] = useState({})
  refs["__clear_selected_files"] = (id) => setFilesById(filesById => {
    const newFilesById = {...filesById}
    delete newFilesById[id]
    return newFilesById
  })
  return (
    <UploadFilesContext.Provider value={[filesById, setFilesById]}>
      {children}
    </UploadFilesContext.Provider>
  )
}

export function EventLoopProvider({ children }) {
  const dispatch = useContext(DispatchContext)
  const [addEvents, connectError] = useEventLoop(
    dispatch,
    initialEvents,
    clientStorage,
  )
  return (
    <EventLoopContext.Provider value={[addEvents, connectError]}>
      {children}
    </EventLoopContext.Provider>
  )
}

export function StateProvider({ children }) {
  const [state, dispatch_state] = useReducer(applyDelta, initialState["state"])
  const [state__parent_state, dispatch_state__parent_state] = useReducer(applyDelta, initialState["state.parent_state"])
  const [state__parent_state__color_picker_state, dispatch_state__parent_state__color_picker_state] = useReducer(applyDelta, initialState["state.parent_state.color_picker_state"])
  const [state__parent_state__modal_state, dispatch_state__parent_state__modal_state] = useReducer(applyDelta, initialState["state.parent_state.modal_state"])
  const [state__parent_state__form_state, dispatch_state__parent_state__form_state] = useReducer(applyDelta, initialState["state.parent_state.form_state"])
  const dispatchers = useMemo(() => {
    return {
      "state": dispatch_state,
      "state.parent_state": dispatch_state__parent_state,
      "state.parent_state.color_picker_state": dispatch_state__parent_state__color_picker_state,
      "state.parent_state.modal_state": dispatch_state__parent_state__modal_state,
      "state.parent_state.form_state": dispatch_state__parent_state__form_state,
    }
  }, [])

  return (
    <StateContexts.state.Provider value={ state }>
    <StateContexts.state__parent_state.Provider value={ state__parent_state }>
    <StateContexts.state__parent_state__color_picker_state.Provider value={ state__parent_state__color_picker_state }>
    <StateContexts.state__parent_state__modal_state.Provider value={ state__parent_state__modal_state }>
    <StateContexts.state__parent_state__form_state.Provider value={ state__parent_state__form_state }>
      <DispatchContext.Provider value={dispatchers}>
        {children}
      </DispatchContext.Provider>
    </StateContexts.state__parent_state__form_state.Provider>
    </StateContexts.state__parent_state__modal_state.Provider>
    </StateContexts.state__parent_state__color_picker_state.Provider>
    </StateContexts.state__parent_state.Provider>
    </StateContexts.state.Provider>
  )
}