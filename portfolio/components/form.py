import reflex as rx

def form():
    return rx.container(
        rx.form(
            rx.vstack(
                rx.input(
                    placeholder="Name",
                    id="name",
                    bg_color="rgb(255, 255, 255, 0.85)",
                ),
                rx.text_area(
                    placeholder="Message",
                    id="message",
                    bg_color="rgb(255, 255, 255, 0.85)",
                    height="300px",
                ),
                rx.button(
                    "Send",
                    color_scheme="green",
                    size="md",
                    font_family="monospace",
                )
            ),
        ),
        background_color="rgb(1, 1, 1, 0.15)",
        backdrop_filter="blur(5px)",
        border_radius="1em",
    )