import reflex as rx
from portfolio.components import info


def about():
    return rx.box(
        rx.box(
            rx.tabs(
                rx.tab_list(
                    rx.tab(
                        "About me",
                        style=tab_style,
                    ),
                    rx.tab(
                        "About page",
                        style=tab_style,
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
            margin_top=["20%","10%"],
            margin_bottom="10%",
        ),
        width="90%",
        max_width="1200px",
    )

tab_style = {
    "backdrop_filter": "blur(5px)",
    "border_radius": "10px 10px 0px 0px",
    "background_color": "rgb(20, 20, 20, 0.5)",
    "font_size": ["14px","24px"],
    "font_weight": "bold",
}