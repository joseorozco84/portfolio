import reflex as rx


class ModalState(rx.State):
    show: bool = False

    def change(self):
        self.show = not (self.show)

def form():
    return rx.box(
        rx.box(
            rx.form(
                rx.vstack(
                    rx.heading(
                        "📝 Contact me",
                        user_select="none",
                        text_color="rgb(255, 255, 255)",
                        font_size=["1.5em","1.8em", "1.8em", "1.8em", "2em"],
                    ),
                    rx.input(
                        placeholder="Name...",
                        id="name",
                        bg_color="rgb(255, 255, 255, 0.75)",
                        text_color="black",
                        overflow="hidden",
                        border_color="transparent",
                        is_required=True,
                    ),
                    rx.input(
                        placeholder="Email...",
                        id="email",
                        bg_color="rgb(255, 255, 255, 0.75)",
                        text_color="black",
                        overflow="hidden",
                        border_color="transparent",
                    ),
                    rx.text_area(
                        placeholder="Write your message...",
                        id="message",
                        bg_color="rgb(255, 255, 255, 0.75)",
                        height="300px",
                        text_color="black",
                        border_color="transparent",
                        resize="none",
                        max_height="200px",
                        is_required=True,
                    ),
                    rx.button(
                        "Send",
                        rx.icon(
                            tag="email",
                        ),
                        color_scheme="green",
                        size="lg",
                        _hover={
                            "transform": "scale(1.1)",
                            "transition": "0.25s",
                        },
                        column_gap="5px",
                        on_click=ModalState.change,
                    ),
                    row_gap="2em",
                ),
            ),
            rx.box(
                rx.modal(
                    rx.modal_overlay(
                        rx.modal_content(
                            rx.modal_header("Confirm"),
                            rx.modal_body(
                                "Your message has been sent!"
                            ),
                            rx.modal_footer(
                                rx.button(
                                    "Close", on_click=ModalState.change,
                                    color_scheme="green",
                                )
                            ),
                            text_color="black",
                            max_width="300px",
                            bg_color="rgb(255, 255, 255)",
                        ),
                        user_select="none",
                    ),
                    is_open=ModalState.show,
                    is_centered=True,
                ),
            ),
            justify_content="center",
            max_height="100vh",
            max_width="800px",
            padding=["2em","2em","3em","3em"],
            # background_color="rgb(20, 20, 20, 0.5)",
            backdrop_filter="blur(5px)",
            border_radius="10px",
        ),
    )


def social():
    return rx.box(
        rx.hstack(
            rx.link(
                rx.vstack(
                    rx.image(
                        src="/github.png",
                        width="48px"
                    ),
                    rx.text("GitHub"),
                    bg_color="rgb(97, 30, 30, 0.45)",
                    border_radius="5px",
                    padding="20px",
                    width="100px",
                    _hover={
                        "transform": "scale(1.1)",
                        "transition": "0.25s",
                        "bg_color": "rgb(97, 30, 30, 0.95)",
                    },
                ),
                href="https://github.com/joseorozco84",
                is_external=True,
            ),
            rx.link(
                rx.vstack(
                    rx.image(
                        src="/linkedin.png",
                        width="48px"
                    ),
                    rx.text("Linkedin"),
                    bg_color="rgb(30, 63, 100, 0.45)",
                    border_radius="5px",
                    padding="20px",
                    width="100px",
                    _hover={
                        "transform": "scale(1.1)",
                        "transition": "0.25s",
                        "bg_color": "rgb(30, 63, 100, 0.95)",
                    },
                ),
                href="https://www.linkedin.com/in/jose-orozco-79367143/",
                is_external=True,
            ),
            gap="2em",
        ),
        justify_content="center",
        # max_height="100vh",
        max_width="800px",
        padding=["2em","2em","3em","3em"],
        # background_color="rgb(20, 20, 20, 0.5)",
        backdrop_filter="blur(5px)",
        border_radius="10px",
        place_self="center",
        user_select="none",
        
    )