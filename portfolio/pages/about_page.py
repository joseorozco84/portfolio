import reflex as rx
from portfolio.components import info


def about():
    return rx.box(
        rx.tabs(
            rx.tab_list(
                rx.tab(
                    "About me",
                    backdrop_filter="blur(5px)",
                    border_radius="10px 10px 0px 0px",
                    font_size=["14px","24px"],
                    font_weight="bold",
                    # padding="0px"
                ),
                rx.tab(
                    "About page",
                    backdrop_filter="blur(5px)",
                    border_radius="10px 10px 0px 0px",
                    font_size=["14px","24px"],
                    font_weight="bold",
                ),
                border_bottom="none",
                padding_left="25px",
                padding_right="25px",            
            ),
            rx.tab_panels(
                rx.tab_panel(
                    info.info(),
                    padding_top="2px",
                    padding="0px"
                ),
                rx.tab_panel(
                    info.page(),
                    padding_top="2px",
                    padding="0px"
                ),
            ),
            color="darkgray",
            user_select="none",
            is_fitted=True,
        ),
        margin_top=["15%","15%","10%","10%","10%"],
        margin_bottom="10%",
        border_radius="10px",
        width=["90%","90%","80%"],
        max_width="1200px",
    )