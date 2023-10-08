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
                        _hover={"color":"darkred"},
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
                        _hover={"color":"darkred"},
                        font_weight="bold",
                        user_select="none",
                    ),
                ),
                rx.spacer(),            
                rx.container(
                    rx.link(
                        ".about",
                        href="/about",
                        _hover={"color":"darkred"},
                        font_weight="bold",
                        user_select="none",
                    ),
                ),
                rx.spacer(),
                rx.container(
                    rx.link(
                        ".contact",
                        href="/contact",
                        _hover={"color":"darkred"},
                        font_weight="bold",
                        user_select="none",
                    ),
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
        background_color="rgb(1, 1, 1, 0.15)",
        backdrop_filter="blur(5px)",
        position="fixed",
        top="0",
        z_index="1",
        width="100%",
        align_items="center",
        justify_content="center",
    )
