from typing import Any
import reflex as rx

class ParentState(rx.State):
    pass

class ParentComponent(rx.Component):
    pass


  
class ModalState(ParentState):
    show : bool = False

    def change(self):
        self.show = not (self.show)


class ColorPicker(ParentComponent):
    library = "react-colorful"
    tag = "HexColorPicker"
    color: rx.Var[str]

    def get_event_triggers(self) -> dict[str, Any]:
        return {
            **super().get_event_triggers(),
            "on_change": lambda e0: [e0],
        }
    
class ColorPickerState(ParentState):
    color: str = "#db114b"