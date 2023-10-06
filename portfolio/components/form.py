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
                        "📝 Send me a message",
                        font_family="monospace",
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
                        font_family="monospace",
                        is_required=True,
                    ),
                    rx.input(
                        placeholder="Email...",
                        id="email",
                        bg_color="rgb(255, 255, 255, 0.75)",
                        text_color="black",
                        overflow="hidden",
                        border_color="transparent",
                        font_family="monospace",
                    ),
                    rx.text_area(
                        placeholder="Write your message...",
                        id="message",
                        bg_color="rgb(255, 255, 255, 0.75)",
                        height="300px",
                        text_color="black",
                        border_color="transparent",
                        resize="none",
                        font_family="monospace",
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
                        font_family="monospace",
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
                            font_family="monospace",
                            max_width="300px",
                            bg_color="rgb(255, 255, 255)",
                        )
                    ),
                    is_open=ModalState.show,
                ),
                justify_content="center",
            ),
        ),
        max_width="800px",
        padding=["2em","2em","3em","3em"],
        background_color="rgb(1, 1, 1, 0.15)",
        backdrop_filter="blur(5px)",
        border_radius="1em",
    )