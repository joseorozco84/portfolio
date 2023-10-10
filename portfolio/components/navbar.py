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
                        _hover={"color":"#2b6cb0"},
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
                        _hover={"color":"#2b6cb0"},
                        font_weight="bold",
                        user_select="none",
                    ),
                ),
                rx.spacer(),            
                rx.container(
                    rx.link(
                        ".about",
                        href="/about",
                        _hover={"color":"#2b6cb0"},
                        font_weight="bold",
                        user_select="none",
                    ),
                ),
                rx.spacer(),
                rx.container(
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
            font_size=["1em","1.8em","2em","2em"],
            align_items="center",
            justify_content="space-evenly",
            overflow="hidden",
        ),
        # background_image="linear-gradient(315deg, #152526 0.75%, #4d78b9 88.52%)",
        background_color="rgb(20, 20, 20, 0.5)",
        box_shadow="rgba(0, 0, 0, 0.8) 0 15px 30px -10px",
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
                "text_color": "#2b6cb0",
            },
        ),
        rx.menu_list(
            rx.link(
                rx.menu_item(
                        rx.hstack(
                            rx.image(
                                src="/email_white.png",
                                width="32px"
                            ),
                            rx.text(
                                "Contact me",
                                font_weight="bold",
                                font_size="20px",
                            ),
                        ),
                    text_color="gray",
                    justify_content="left",
                    _hover={
                        # "transition": "0.25s",
                        "bg_color": "#2b6cb0",
                        "text_color": "white",
                    },
                    bg_color="inherit",
                ),
                href="/contact",
            ),
            rx.menu_divider(),
            rx.link(
                rx.menu_item(
                    rx.hstack(
                        rx.image(
                            src="/github_white.png",
                            width="32px"
                        ),
                        rx.text(
                            "GitHub",
                            font_weight="bold",
                            font_size="20px",
                        ),
                    ),
                    text_color="gray",
                    justify_content="left",
                    _hover={
                        "bg_color": "#2b6cb0",
                        "text_color": "white",
                    },
                    bg_color="inherit",
                ),
                href="https://github.com/joseorozco84",
                is_external=True,
            ),
            rx.link(
                rx.menu_item(
                    rx.hstack(
                        rx.image(
                            src="/linkedin_white.png",
                            width="32px"
                        ),
                        rx.text(
                            "LinkedIn",
                            font_weight="bold",
                            font_size="20px",
                        ),
                    ),
                    text_color="gray",
                    justify_content="left",
                    _hover={
                        "bg_color": "#2b6cb0",
                        "text_color": "white",
                    },
                    bg_color="inherit",
                ),
                href="https://www.linkedin.com/in/jose-orozco-79367143/",
                is_external=True,

            ),
            background_color="rgb(20, 20, 20, 0.95)",
            # background="rgb(1, 1, 1, 0.9)",
            backdrop_filter="blur(5px)",
            border_color="rgb(20, 20, 20, 0.85)",
            box_shadow="rgba(0, 0, 0, 0.8) 0 15px 30px -10px",
        ),
        border="hidden",
    )