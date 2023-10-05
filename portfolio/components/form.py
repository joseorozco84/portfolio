import reflex as rx

def form():
    return rx.box(
        background_color="rgb(1, 1, 1, 0.15)",
        backdrop_filter="blur(5px)",
        border_radius="1em",
        _hover={
            "transform": "scale(1.1)",
            "transition": "0.5s",
            },
    )