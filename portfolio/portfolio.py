"""Welcome to Reflex! This file outlines the steps to create a basic app."""
from rxconfig import config
import reflex as rx
from .components import navbar
from .pages	import home_page, about_page

docs_url = "https://reflex.dev/docs/getting-started/introduction"
filename = f"{config.app_name}/{config.app_name}.py"


class State(rx.State):
    """The app state."""

    pass


def home() -> rx.Component:
    return rx.box(
        rx.vstack(
            navbar.navbar(),
            home_page.home(),
        ),
        max_width="100%",
        # background_color="rgb(1, 1, 1, 0.25)",
        min_height="100vh",
        background_image="/code_des.jpg",
        background_position="center",
        background_repeat="no-repeat",
        background_size="cover",
        
    )

def about() -> rx.Component:
    return rx.box(
        rx.vstack(
            navbar.navbar(),
            about_page.about(),
        ),
        max_width="100%",
        # background_color="rgb(1, 1, 1, 0.25)",
        min_height="100vh",
        background_image="/code_des.jpg",
        background_position="center",
        background_repeat="no-repeat",
        background_size="cover",
        
    )

# Add state and page to the app.
app = rx.App()
app.add_page(home)
app.add_page(about)
app.compile()
