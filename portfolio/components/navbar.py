import reflex as rx


@rx.memo
def navbar():
    return rx.flex(
        rx.flex(
            rx.flex(
                rx.container(
                    rx.link(
                        ".home",
                        href="/home",
                        font_weight="bold",
                        _hover={"color":"green"},
                        user_select="none",
                    ),
                ),
            ),
            rx.spacer(),
            rx.flex(
                rx.container(
                    rx.link(
                        ".portfolio",
                        href="/portfolio",
                        _hover={"color":"green"},
                        font_weight="bold",
                        user_select="none",
                    ),
                ),
                rx.spacer(),            
                rx.container(
                    rx.link(
                        ".about",
                        href="/about",
                        _hover={"color":"green"},
                        font_weight="bold",
                        user_select="none",
                    ),
                ),
                rx.spacer(),
                rx.container(
                    # rx.link(
                    #     ".contact",
                    #     href="/contact",
                    #     _hover={"color":"green"},
                    #     font_weight="bold",
                    #     user_select="none",
                    # ),
                    menu(),
                ),
                justify_content="space-between",
                align_items="center",
                # display=["none","none","flex"],
            ),
            width="100%",
            max_width="1200px",
            min_width="50%",
            min_height="6vh",
            padding="0.5em",
            text_color="white",
            font_size=["0.8em","1.8em","2em","2em"],
            align_items="center",
            justify_content="space-evenly",
            overflow="hidden",
        ),
        # background_color="rgb(1, 1, 1, 0.15)",
        backdrop_filter="blur(5px)",
        position="fixed",
        top="0",
        z_index="1",
        width="100%",
        align_items="center",
        justify_content="center",
    )

def menu():
    return rx.menu(
        rx.menu_button(
            rx.text(
                ".contact",
                font_weight="bold",
                user_select="none",
            ),
            _hover={
                "transition": "0.25s",
                "text_color": "green",
            },
        ),
        rx.menu_list(
            rx.link(
                rx.menu_item(
                        rx.hstack(
                            rx.image(
                                src="/email.png",
                                width="32px"
                            ),
                            rx.text(
                                "Contact me",
                                font_weight="bold",
                                font_size="24px",
                            ),
                        ),
                    text_color="gray",
                    justify_content="left",
                    _hover={
                        # "transition": "0.25s",
                        "bg_color": "#38a169",
                        "text_color": "white",
                    },
                ),
                href="/contact",
            ),
            rx.menu_divider(),
            rx.link(
                rx.menu_item(
                    rx.hstack(
                        rx.image(
                            src="/github.png",
                            width="32px"
                        ),
                        rx.text(
                            "GitHub",
                            font_weight="bold",
                            font_size="24px",
                        ),
                    ),
                    text_color="gray",
                    justify_content="left",
                    _hover={
                        # "transition": "0.25s",
                        "bg_color": "#38a169",
                        "text_color": "white",
                    },
                ),
                href="https://github.com/joseorozco84",
                is_external=True,
            ),
            rx.link(
                rx.menu_item(
                    rx.hstack(
                        rx.image(
                            src="/linkedin.png",
                            width="32px"
                        ),
                        rx.text(
                            "LinkedIn",
                            font_weight="bold",
                            font_size="24px",
                        ),
                    ),
                    text_color="gray",
                    justify_content="left",
                    _hover={
                        # "transition": "0.25s",
                        "bg_color": "#38a169",
                        "text_color": "white",
                    },
                ),
                href="https://www.linkedin.com/in/jose-orozco-79367143/",
                is_external=True,
            ),
        ),
            text_color="black",
            border="hidden",
    )