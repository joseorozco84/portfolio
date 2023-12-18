import reflex as rx
from .classes import ModalState, FormState


def form():
    return rx.box(
        rx.box(
            rx.form(
                rx.vstack(
                    rx.heading(
                        "Contact me",
                        user_select="none",
                        text_color="rgb(255, 255, 255)",
                        font_size=["1.5em","1.8em", "1.8em", "1.8em", "2em"],
                        font_family="monospace",
                    ),
                    rx.divider(border_color="gray"),
                    rx.input(
                        placeholder="Name...",
                        id="name",
                        is_required=True,
                        style=input_style,
                    ),
                    rx.input(
                        placeholder="Email...",
                        id="email",
                        style=input_style,
                    ),
                    rx.text_area(
                        placeholder="Write your message...",
                        id="message",
                        height="200px",
                        max_height="300px",
                        style=input_style,
                        is_required=True,
                    ),
                    rx.button(
                        "Send",
                        rx.icon(
                            tag="email",
                        ),
                        type_="submit",
                        bg_color="#2b6cb0",
                        text_color="white",
                        font_family="monospace",
                        size="lg",
                        column_gap="5px",
                        # on_click=ModalState.change,
                        _hover={
                            "transform": "scale(1.1)",
                            "transition": "0.25s",
                        },
                    ),
                    row_gap="1em",
                ),
                # submit form content
                on_submit=FormState.handle_submit,
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
                                    bg_color="#2b6cb0",
                                    text_color="white",
                                )
                            ),
                            text_color="black",
                            max_width="300px",
                            bg_color="rgb(255, 255, 255)",
                            box_shadow="rgba(0, 0, 0, 0.8) 0 15px 30px -10px",
                        ),
                        user_select="none",
                    ),
                    is_open=ModalState.show,
                    is_centered=True,
                ),
            ),
            style=box_style,
        ),
    )


def social():
    return rx.box(
        rx.hstack(
            rx.link(
                rx.vstack(
                    rx.image(
                        src="/github_white.png",
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
                _hover={
                    "text_decoration":"none"
                },
            ),
            rx.link(
                rx.vstack(
                    rx.image(
                        src="/linkedin_white.png",
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
                _hover={
                    "text_decoration":"none"
                },
            ),
            gap="2em",
        ),
        style=box_style,
    )

input_style = {
    "bg_color":"rgb(255, 255, 255, 0.75)",
    "text_color":"black",
    "border_color":"transparent",
    "resize":"none",
}

box_style = {
    "justify_content":"center",
    # "max_width":"800px",
    "padding":["2em","2em","3em","3em"],
    "background_color":"rgb(20, 20, 20, 0.5)",
    "backdrop_filter":"blur(5px)",
    "box_shadow":"rgba(0, 0, 0, 0.8) 0 15px 30px -10px",
    "border_radius":"10px",
    "place_self":"center",
    "user_select":"none",
}