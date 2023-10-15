"""Welcome to Reflex! This file outlines the steps to create a basic app."""
from typing import Any
from rxconfig import config
import reflex as rx
from .components import navbar
from .components.classes import  ColorPicker, ColorPickerState
from .pages	import home_page, about_page, contact_page, projects_page

picker = ColorPicker.create

def color() -> rx.Component:
    return rx.box(
        rx.vstack(
            rx.box(
                rx.heading("React Color Picker component"),
            ),
            rx.divider(border_color="gray"),
            rx.text(ColorPickerState.color),
            picker(
                on_change=ColorPickerState.set_color,
            ),
            height="100vh",
        ),
        background_color=ColorPickerState.color,
        padding="5em",
        # border_radius="1em",
    )

# home page
def home() -> rx.Component:
    return rx.box(
        rx.vstack(
            navbar.navbar(),
            home_page.home(),
        ),
        style = box_style,
    )

# portfolio page
def projects() -> rx.Component:
    return rx.box(
        rx.vstack(
            navbar.navbar(),
            projects_page.repositories(),
        ),
        style = box_style,
    )

# about page
def about() -> rx.Component:
    return rx.box(
        rx.vstack(
            navbar.navbar(),
            about_page.about(),
        ),
        style = box_style,        
    )

# contact page
def contact() -> rx.Component:
    return rx.box(
        rx.vstack(
            navbar.navbar(),
            contact_page.contact(),
        ),
        style = box_style,
    )

general_text_style = {
    "font_family": "monospace",
    "text_color": "white",
}

box_style = {
    "max_width": "100%",
    "min_height": "100vh",
    "background_image": "linear-gradient(338deg, #090b19 6.75%, #0f1c36 50.75%, #546283 88.52%)",
    "background_position": "center",
    "background_repeat": "no-repeat",
    "background_size": "cover",
}

# Add state and page to the app.
app = rx.App(style=general_text_style)
app.add_page(home, title="Home")
app.add_page(projects, title="Repositories")
app.add_page(about, title="About")
app.add_page(contact, title="Contact")
app.add_page(color)
app.compile()
