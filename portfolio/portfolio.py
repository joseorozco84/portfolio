"""Welcome to Reflex! This file outlines the steps to create a basic app."""
from typing import Any
from rxconfig import config
import reflex as rx
from .components import navbar
from .components.classes import  ColorPicker, ColorPickerState
from .pages	import home_page, about_page, contact_page, portfolio_page

picker = ColorPicker.create

def color() -> rx.Component:
    return rx.box(
        rx.vstack(
            rx.heading(ColorPickerState.color),
            picker(
                on_change=ColorPickerState.set_color,
            ),
        ),
        background_color=ColorPickerState.color,
        padding="5em",
        border_radius="1em",
    )

# home page
def home() -> rx.Component:
    return rx.box(
        rx.vstack(
            navbar.navbar(),
            home_page.home(),
            picker(
                on_change=ColorPickerState.set_color,
            ),
        ),
        max_width="100%",
        # background_color="rgb(1, 1, 1, 0.25)",
        min_height="100vh",
        background_image=f"linear-gradient(338deg, #090b19 6.75%, #313d57 50.75%, #835454 88.52%)",
        background_position="center",
        background_repeat="no-repeat",
        background_size="cover",
    )

# portfolio page
def portfolio() -> rx.Component:
    return rx.box(
        rx.vstack(
            navbar.navbar(),
            portfolio_page.portfolio(),
        ),
        max_width="100%",
        # background_color="rgb(1, 1, 1, 0.25)",
        min_height="100vh",
        background_image="linear-gradient(338deg, #090b19 6.75%, #313d57 50.75%, #835454 88.52%)",
        background_position="center",
        background_repeat="no-repeat",
        background_size="cover",
        
    )

# about page
def about() -> rx.Component:
    return rx.box(
        rx.vstack(
            navbar.navbar(),
            about_page.about(),
        ),
        max_width="100%",
        # background_color="rgb(1, 1, 1, 0.25)",
        min_height="100vh",
        background_image="linear-gradient(338deg, #090b19 6.75%, #313d57 50.75%, #835454 88.52%)",
        background_position="center",
        background_repeat="no-repeat",
        background_size="cover",
        
    )

# contact page
def contact() -> rx.Component:
    return rx.box(
        rx.vstack(
            navbar.navbar(),
            contact_page.contact(),
        ),
        max_width="100%",
        # background_color="rgb(1, 1, 1, 0.25)",
        min_height="100vh",
        background_image="linear-gradient(338deg, #090b19 6.75%, #313d57 50.75%, #835454 88.52%)",
        background_position="center",
        background_repeat="no-repeat",
        background_size="cover",
    )

style = {
    "font_family": "monospace",
    "text_color": "white",
}


# Add state and page to the app.
app = rx.App(style=style)
app.add_page(home, title="Portfolio -> Home")
app.add_page(portfolio, title="Portfolio -> Repositories")
app.add_page(about, title="Portfolio -> About")
app.add_page(contact, title="Portfolio -> Contact")
app.add_page(color)
app.compile()
