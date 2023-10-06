import reflex as rx
from portfolio.components import info


def about():
    return rx.responsive_grid(
        info.info(),
        # columns=[1,1,1,2,2],
        margin_top=["25%","25%","20%","15%","10%"],
        margin_bottom="10%",
        border_radius="1em",
        width=["90%","90%","80%"],
        max_width="1200px",
    )