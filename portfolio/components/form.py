import reflex as rx

def form():
    return rx.box(
    rx.box(
            rx.form(
                rx.vstack(
                    rx.heading(
                        "📝 Send me a message",
                        font_family="monospace",
                        user_select="none",
                        text_color="rgb(255, 255, 255)",
                    ),
                    rx.input(
                        placeholder="Name...",
                        id="name",
                        bg_color="rgb(255, 255, 255, 0.75)",
                        text_color="black",
                        overflow="hidden",
                        border_color="transparent",
                        font_family="monospace",
                    
                    ),
                    rx.input(
                        placeholder="Email...",
                        id="name",
                        bg_color="rgb(255, 255, 255, 0.75)",
                        text_color="black",
                        overflow="hidden",
                        border_color="transparent",
                        font_family="monospace",
                    
                    ),
                    rx.text_area(
                        placeholder="Write your message here...",
                        id="message",
                        bg_color="rgb(255, 255, 255, 0.75)",
                        height="300px",
                        text_color="black",
                        border_color="transparent",
                        resize="none",
                        font_family="monospace",
                        max_height="200px",
                        # overflow="hidden",
                        # text_overflow="ellipsis",
                    ),
                    rx.button(
                        "Send",
                        color_scheme="green",
                        size="md",
                        font_family="monospace",
                        _hover={
                            "transform": "scale(1.3)",
                            "transition": "0.5s",
                        },
                    ),
                    row_gap="2em",
                ),
            ),
        ),
        max_width="800px",
        padding=["2em","2em","3em","3em"],
        background_color="rgb(1, 1, 1, 0.15)",
        backdrop_filter="blur(5px)",
        border_radius="1em",
    )