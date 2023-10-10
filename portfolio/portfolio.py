"""Welcome to Reflex! This file outlines the steps to create a basic app."""
from rxconfig import config
import reflex as rx
from .components import navbar
from .pages	import home_page, about_page, contact_page, portfolio_page


# home page
def home() -> rx.Component:
    return rx.box(
        rx.vstack(
            navbar.navbar(),
            home_page.home(),
        ),
        max_width="100%",
        # background_color="rgb(1, 1, 1, 0.25)",
        min_height="100vh",
        # background_image="/code_des.jpg",
        background_image="linear-gradient(315deg, #152526 0.75%, #4d78b9 88.52%)",
        background_position="center",
        background_repeat="no-repeat",
        background_size="cover",
        
    )

def portfolio() -> rx.Component:
    return rx.box(
        rx.vstack(
            navbar.navbar(),
            portfolio_page.portfolio(),
        ),
        max_width="100%",
        # background_color="rgb(1, 1, 1, 0.25)",
        min_height="100vh",
        # background_image="/code_des.jpg",
        background_image="linear-gradient(315deg, #152526 0.75%, #4d78b9 88.52%)",
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
        # background_image="/code_des.jpg",
        background_image="linear-gradient(315deg, #152526 0.75%, #4d78b9 88.52%)",
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
        # background_image="/code_des.jpg",
        background_image="linear-gradient(315deg, #152526 0.75%, #4d78b9 88.52%)",
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
app.add_page(home)
app.add_page(portfolio)
app.add_page(about)
app.add_page(contact)
app.compile()
