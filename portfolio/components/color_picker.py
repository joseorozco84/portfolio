from typing import Any
import reflex as rx
from .classes import ParentState

class ColorPicker(rx.Component):
    library = "react-colorful"
    tag = "HexColorPicker"
    color: rx.Var[str]

    def get_event_triggers(self) -> dict[str, Any]:
        return {
            **super().get_event_triggers(),
            "on_change": lambda e0: [e0],
        }
    

picker = ColorPicker.create

class ColorPickerState(ParentState):
    color: str = "#db114b"


def color_index():
    return rx.box(
        rx.vstack(
            rx.heading(ColorPickerState.color),
            picker(
                on_change=ColorPickerState.set_color
            ),
        ),
        background_color=ColorPickerState.color,
        padding="5em",
        border_radius="1em",
    )